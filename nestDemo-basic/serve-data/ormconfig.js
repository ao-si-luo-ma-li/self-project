const dir = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'pomelo123',
  database: 'nestjsDemoDB',
  entities: [`${dir}/**/**.entity{.ts,.js}`],
  synchronize: false,
  charset: 'UTF8_GENERAL_CI',
};
