import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { LoginUserDto, CreateUserDto, UpdateUserDto } from './dto';
import { UserRO, UsersRO } from './user.interface';
import { WarnException } from '@/common/exceptions/warn.exception';
import { SECRET } from './user.constants';
import { validate } from 'class-validator';
import { UnhandleException } from '@/common/exceptions/unhandle.exception';
import { RoleEntity } from './role.entity';
import { UpdateUserRoleDto, SelectUserRoles } from './dto/update-user.dto';
import puppeteer = require('puppeteer');
import {
  getLocalStorage,
  logRequest,
  logResponse,
  puppeteerLog,
} from '@/common/utils/tool';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async findAll(query: any = {}): Promise<UsersRO> {
    const qb = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'roles');
    qb.where('1 = 1');
    if ('email' in query) {
      qb.andWhere('user.email LIKE :email', { email: `%${query.email}%` });
    }

    qb.orderBy('user.created', 'DESC');

    const usersCount = await qb.getCount();

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      qb.offset(query.offset);
    }

    const users = await qb.getMany();
    return { users, usersCount };
  }
  /**
   * find one user by email and passpord
   * @param {LoginUserDto} loginUserDto
   */
  async findOne(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const findOneOptions = {
      email: loginUserDto.email,
      password: crypto
        .createHmac('sha256', loginUserDto.password)
        .digest('hex'),
    };
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'roles')
      .where('user.email = :email', { email: findOneOptions.email })
      .andWhere('user.password = :password', {
        password: findOneOptions.password,
      })
      .getOne();
  }

  async create(dto: CreateUserDto): Promise<UserRO> {
    // check uniqueness of username/email
    const { username, email, password } = dto;
    const qb = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .orWhere('user.email = :email', { email });

    const user = await qb.getOne();

    if (user) {
      throw new WarnException(`Username and email must be unique`);
    }

    // create new user
    let newUser = new UserEntity();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;

    const errors = await validate(newUser);
    if (errors.length > 0) {
      throw new WarnException(`${errors[0]}`);
    } else {
      const savedUser = await this.userRepository.save(newUser);
      return this.buildUserRO(savedUser);
    }
  }

  async update(id: number, dto: UpdateUserDto): Promise<UserEntity> {
    let toUpdate = await this.userRepository.findOne(id);

    let updated = Object.assign(toUpdate, dto);
    return await this.userRepository.save(updated);
  }

  async delete(email: string): Promise<DeleteResult> {
    return await this.userRepository.delete({ email: email });
  }

  async deleteUserById(id: number): Promise<void> {
    const user = await this.userRepository.findOne(id, {
      relations: ['roles'],
    });
    await this.userRepository
      .createQueryBuilder('user')
      .relation(UserEntity, 'roles')
      .of(UserEntity)
      .remove(user.roles);
    await this.userRepository.remove(user);
  }

  async findById(id: number): Promise<UserRO> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new UnhandleException(`not found`);
    }

    return this.buildUserRO(user);
  }

  async findByEmail(email: string): Promise<UserRO | false> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'roles')
      .where('user.email = :email', { email: email })
      .getOne();
    if (!user) {
      return false;
    }

    return this.buildUserRO(user);
  }
  /**
   * Set user role
   * @param userId
   * @param method
   * @param roleData
   */
  async setRoleForUser(
    userId: number,
    method: 'add' | 'delete',
    roleData: UpdateUserRoleDto,
  ) {
    if (method === 'add') {
      await this.addRoleForUser(userId, roleData);
    } else {
      await this.deleteRoleForUser(userId, roleData);
    }
  }
  /**
   * select roles list for user
   * @param userId
   * @param roles
   */
  async selectRolesForUser(
    userId: number,
    roles: SelectUserRoles,
  ): Promise<UserRO> {
    let user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'roles')
      .where('user.id = :id', { id: userId })
      .getOne();
    if (!user) {
      throw new WarnException('user id is not exists');
    }
    const rolesToSet = await this.roleRepository.findByIds(roles.roleIds);
    if (!rolesToSet) {
      throw new WarnException('role id is not exists');
    }
    user.roles = rolesToSet;
    const newUser = await this.userRepository.save(user);
    return this.buildUserRO(newUser);
  }

  /**
   * @description ?????? puppeteer ??????
   * @param useId
   */
  async screenShot(useId: string, body) {
    const { screenShotUrl } = body;
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();

    await page.emulate(puppeteer.devices['iPhone X']);

    puppeteerLog('?????????????????????????????????');
    await page.goto(
      screenShotUrl,
      // ????????????Puppeteer?????????????????????????????????500ms????????????????????????
      { waitUntil: 'networkidle0' },
    );

    puppeteerLog('??????????????????');

    // ??????????????????????????????
    const JZLoginResult = await page.evaluate(() => {
      // ???????????????????????????export??????????????????????????????
      localStorage.setItem(
        'JZLoginResult',
        JSON.stringify({
          data: {
            jzAccessToken: 'd67b1ff93a64d253edbc1fbeabad8cd3',
            jzAccountId: 3435002,
          },
        }),
      );
      return localStorage.getItem('JZLoginResult');
    });

    try {
      page.on('console', t => {
        puppeteerLog(`console for evaluate: ${JSON.stringify(t)}`);
      });
      page.on('request', logRequest);

      // ??????
      const screenshot = await page.screenshot({
        path: 'screenShot_action_1.png',
      });

      return 'screenShot_action_1.png';

      // ????????????????????????

      return;

      puppeteerLog('??????????????????');
      // ??????banner
      await Promise.all([
        page.waitForNavigation(),
        page.click('.activity-sec-kill_item'),
      ]);

      puppeteerLog('??????????????????');
      puppeteerLog('3s?????????');

      await page.waitForTimeout(3000);
      // ??????
      await page.screenshot({
        path: 'screenShot_action_2.png',
      });

      puppeteerLog('????????????????????????');

      puppeteerLog('??????????????????');
      await Promise.all([
        page.waitForNavigation(),
        page.click('.bottom_footerBar_btn'),
      ]);

      puppeteerLog('????????????????????????');
      puppeteerLog('1s?????????');
      await page.waitForTimeout(1000);

      // ??????
      await page.screenshot({
        path: 'screenShot_action_3.png',
      });

      puppeteerLog('????????????');

      puppeteerLog('?????????????????? -- ?????????');
      await Promise.all([
        page.waitForNavigation(),
        page.click('.pay_info_bottom_right'),
      ]);

      return;
      // ?????????????????????????????????????????????????????????
      const isLoginPage = page.$('.login-page');

      if (isLoginPage) {
        page.on('request', logRequest);
        page.on('response', logResponse);

        puppeteerLog('????????????/??????');
        const JZLoginResult = await page.evaluate(() => {
          // ???????????????????????????export??????????????????????????????
          localStorage.setItem(
            'JZLoginResult',
            JSON.stringify({
              accessToken: 'd67b1ff93a64d253edbc1fbeabad8cd3',
              jzAccountId: 3435002,
            }),
          );
          return localStorage.getItem('JZLoginResult');
        });
        puppeteerLog(`JZLoginResult: ${JZLoginResult}`);

        // ??????????????????????????????????????????????????????
        await page.type('input.input-account', '18262281523');
        await page.type('input.input-password', '743534');

        await page.screenshot({
          path: 'screenShot_action_login.png',
        });
        puppeteerLog('????????????');

        await page.click('.fllow-btn');
        await page.click('.btn_agree', { delay: 100 });
      } else {
      }
    } catch (err) {
      console.log('err=========', err);
    }

    // ?????????????????????console??????
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));

    // Get the "viewport" of the page, as reported by the page.
    // await page.evaluate(() => {
    //   console.log(`url is ${location.href}`);

    //   return {
    //     width: document.documentElement.clientWidth,
    //     height: document.documentElement.clientHeight,
    //     deviceScaleFactor: window.devicePixelRatio,
    //   };
    // });

    await browser.close();
  }

  public generateJWT(user: UserEntity) {
    let today = new Date();
    let exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    let roles = [];

    if (user.roles) {
      roles = user.roles;
    }
    return jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        roles: roles,
        exp: exp.getTime() / 1000,
      },
      SECRET,
    );
  }

  private buildUserRO(user: UserEntity) {
    let userRO: any = {
      username: user.username,
      email: user.email,
      id: user.id,
      token: this.generateJWT(user),
    };
    if (user.roles) {
      userRO.roles = [];
      user.roles.forEach(v => {
        userRO.roles.push(v.name);
      });
    }

    return { user: userRO };
  }

  private async addRoleForUser(userId: number, roleData: UpdateUserRoleDto) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'roles')
      .where('user.id = :id', { id: userId })
      .getOne();
    const role = await this.roleRepository.findOne({ id: roleData.roleId });
    if (!role) {
      throw new WarnException('role id is not exists');
    }
    if (!user) {
      throw new WarnException('user id is not exists');
    }
    user.roles = user.roles || [];
    user.roles.push(role);
    await this.userRepository.save(user);
  }

  private async deleteRoleForUser(userId: number, roleData: UpdateUserRoleDto) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'roles')
      .where('user.id = :id', { id: userId })
      .getOne();
    const role = await this.roleRepository.findOne({ id: roleData.roleId });
    if (!role) {
      throw new WarnException('role id is not exists');
    }
    if (!user) {
      throw new WarnException('user id is not exists');
    }
    user.roles = user.roles || [];
    if (
      !user.roles.some(v => {
        return v.id == role.id;
      })
    ) {
      throw new WarnException('role id is not in user roles');
    }
    let newRoles = user.roles.filter(v => {
      return v.id != role.id;
    });
    user.roles = newRoles;
    await this.userRepository.save(user);
  }
}
