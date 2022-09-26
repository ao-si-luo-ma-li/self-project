<template>
  <div class="apply-root">
    <div :class="`apply-cost ${isWW ? 'ww' : ''}`">
      <div class="apply-title">
        <img :src="cost.imgTitle" alt="" srcset="" class="png-title" />
        <img
          :src="simpRitleRightBg"
          alt=""
          srcset=""
          class="simpRitleRightBg"
        />
      </div>
      <div class="fee-content">
        <!-- 一级选项 -->
        <div class="expect-business flex-box shadow-box" v-if="type.length > 0">
          <span
            v-for="(item, index) in type"
            :key="item"
            @click="onSwitchType"
            class="fee-item-style"
            :class="{ active: index === activeType }"
            :data-index="index"
            >{{ item }}</span
          >
        </div>
        <!-- 一级选项 额外附加单选 -->
        <div
          class="expect-business flex-box shadow-box"
          v-if="adType.length > 0"
        >
          <span
            v-for="(item, index) in adType"
            :key="item"
            @click="onSwitchAdType"
            class="fee-item-style"
            :class="{ active: index === activeAdType }"
            :data-index="index"
            >{{ item }}</span
          >
        </div>

        <!-- 二级选项 -->
        <div class="expect-business-det flex-box shadow-box">
          <span
            v-for="(item, index) in subType"
            class="fee-item-style"
            :class="{ active: index === activeSubType }"
            :key="item"
            :data-index="index"
            @click="onSwitchSubType"
            >{{ item }}</span
          >
        </div>
        <!-- 三级选项 -->
        <template v-if="table[activeTableIndex]">
          <template v-if="table[activeTableIndex].multiCost">
            <div class="expect-business-det flex-box shadow-box">
              <span
                class="fee-item-style"
                v-for="(item, index) in table[activeTableIndex].multiCost"
                :key="item"
                :class="{ active: selectedFeeType.includes(index) }"
                :data-index="index"
                @click="onSwitchFeeType"
                >{{ item.name }}</span
              >
            </div>
          </template>
        </template>
        <!-- 额外单选项 -->
        <template v-if="table[activeTableIndex]">
          <template v-if="table[activeTableIndex].otherSingleCost">
            <div class="expect-business-det flex-box shadow-box">
              <span
                class="fee-item-style"
                v-for="(item, index) in table[activeTableIndex].otherSingleCost"
                :key="item"
                :data-index="index"
                :class="{ active: index === activeOtherType }"
                @click="onSwitchOtherType"
                >{{ item.name }}</span
              >
            </div>
          </template>
        </template>
        <div
          class="common-fee shadow-box fee-item-style"
          @click="onCut"
          :class="{ active: isCut }"
        >
          普票折扣（九折）
        </div>
        <div class="expect-cost flex-box shadow-box fee-item-style">
          <span>费用合计：</span>
          <span>{{ totalMoney }}.00</span>
        </div>
        <div v-if="remark" v-html="remark"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { isWenWangWen } from '../mock/cost';
export default {
  name: 'applycost',
  data() {
    return {
      data1: [],
      type: [],
      adType: [],
      subType: [],
      table: [],
      feeTitle: '',
      activeType: 0,
      activeAdType: 0,
      activeSubType: 0,
      activeOtherType: '',
      isCut: false,
      selectedFeeType: [],
      png1: require('@/assets/images/costDetail/1.png'),
      png2: require('@/assets/images/costDetail/2.jpg'),
      png3: require('@/assets/images/costDetail/3.png'),
      png4: require('@/assets/images/costDetail/4.png'),
      isWW: false,
      simpRitleRightBg: require('@/assets/images/simpClassifylist/simp-title-right-bg.png'),
    };
  },
  mounted() {
    const { type, adType = [], subType, table, feeTitle, remark } = this.cost;
    this.type = type;
    this.adType = adType;
    this.subType = subType;
    this.feeTitle = feeTitle;
    this.table = table;
    this.remark = remark;
    this.isWW =
      isWenWangWen.findIndex(wwSrc => location.href.includes(wwSrc)) > -1;

    // 存在北京，上海时。默认选中上海
    const i = type.findIndex(tp => tp === '上海');
    if (i > 0) {
      this.onSwitchType({ target: { dataset: { index: i } } });
    }
  },
  props: {
    cost: Array,
  },
  methods: {
    onSwitchType(e) {
      const { index } = e.target.dataset;
      this.activeType = +index;

      // 切换大项类型时，小项选项重制状态
      (this.activeSubType = 0),
        (this.activeOtherType = ''),
        (this.isCut = false),
        (this.selectedFeeType = []);
    },
    onSwitchAdType(e) {
      const { index } = e.target.dataset;
      this.activeAdType = +index;
    },
    onSwitchSubType(e) {
      const { index } = e.target.dataset;
      this.activeSubType = +index;
    },
    onSwitchFeeType(e) {
      const { index } = e.target.dataset;
      const feeIndex = this.selectedFeeType.findIndex(item => item === +index);
      if (feeIndex > -1) {
        this.selectedFeeType.splice(+feeIndex, 1);
      } else {
        this.selectedFeeType.push(+index);
      }
    },
    onSwitchOtherType(e) {
      const { index } = e.target.dataset;
      if (this.activeOtherType === +index) {
        this.activeOtherType = '';
      } else {
        this.activeOtherType = +index;
      }
    },
    onCut() {
      this.isCut = !this.isCut;
    },
  },
  computed: {
    activeTableIndex() {
      return this.activeType;
    },
    totalMoney() {
      let fee1 = 0,
        fee2 = 0,
        fee3 = 0;
      const {
        table,
        activeType,
        activeAdType,
        activeSubType,
        activeOtherType,
        selectedFeeType,
        isCut,
      } = this;
      if (table[activeType]) {
        // 将 adType 存在时，计算主 activeSubType 对应价格数据的偏移
        // adType不存在时， activeSubTypeWithAdType === activeSubType
        const activeSubTypeWithAdType =
          activeSubType +
          activeAdType +
          (activeSubType && this.adType.length > 0
            ? activeSubType * this.adType.length - 1
            : 0);

        console.log(
          'activeSubTypeWithAdType',
          activeSubType,
          activeSubTypeWithAdType
        );

        // 申办、续办等费用
        fee1 = table[activeType].subTypeCost[activeSubTypeWithAdType];
        // 缺少网站等费用
        fee2 = table[activeType].multiCost
          ? table[activeType].multiCost.reduce((start, next, index) => {
              if (selectedFeeType.includes(index)) {
                return start + next.fee;
              } else {
                return start;
              }
            }, 0)
          : 0;
        // 其他单项补充费用
        fee3 =
          activeOtherType !== ''
            ? table[activeTypeWithAdType].otherSingleCost[activeOtherType].fee
            : 0;
      }
      const originFee = fee1 + fee2 + fee3;
      return originFee * (isCut ? 0.9 : 1);
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/libs/const.scss';
$textColor: #333;
$textActive: #fff;
.shadow-box {
  margin-bottom: toRem(40px);
  background: #fff;
}
.flex-box {
  justify-content: space-around;
}
.common-fee {
  margin-bottom: toRem(40px) !important;
}
.apply-title {
  padding: 16px 0;
  margin: 20px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  border-radius: 8px;

  .png-title {
    width: toRem(218px * 2);
  }

  .simpRitleRightBg {
    height: toRem(100px * 2);
    margin-left: toRem(-42px);
  }
}
.apply-root {
  padding: 1px 0;
  text-align: center;
}
.apply-cost {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url(../assets/images/simp_bg/simp-bg.png) no-repeat center;
  background-size: 100% 100%;
  background-position: 0 0;

  .png-3 {
    position: absolute;
    top: toRem(530px * 2);
    left: toRem(23px * 2);
    width: toRem(48px * 2);
  }
}
.fee-title {
  font-size: toRem(54px);
  text-shadow: 1px 1px 2px #666;
  color: #fff;
  margin: 0 toRem(8px);
  padding: toRem(14px) 0;
  border-radius: 0 0 toRem(40px) toRem(40px);
  letter-spacing: toRem(1px);
  background: linear-gradient(
    120deg,
    rgb(206, 235, 230),
    rgb(147, 197, 242),
    rgb(160, 192, 238)
  );
}
.fee-select-tip {
  font-size: toRem(32px);
  color: $textColor;
  padding: toRem(25px) 0;
}
.fee-content {
  flex: 1;
  margin: 0 15px toRem(100px);
  padding: toRem(60px) toRem(20px);
  border-radius: toRem(36px);
  background: #fff;
  border-radius: toRem(8px);
}
.fee-item-style {
  position: relative;
  margin: 0 toRem(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  flex: 1;
  height: toRem(34px * 2);
  font-size: toRem(24px);
  padding: 0 3px;
  color: $textColor;
  text-align: left;
  font-weight: bold;
  text-align: center;
  z-index: 8;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #fff;
    border-radius: toRem(100px);
    border: 1px solid #333;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 3px;
    left: 2px;
    background: #4249e5;
    border-radius: toRem(100px);
    border: 1px solid #333;
    z-index: -2;
  }

  &.active {
    color: $textActive;

    &::before {
      background: #4249e5;
      border-color: #333;
    }
    &::after {
      background: #fff;
      border-color: #4249e5;
    }
  }
}

.apply-cost {
  &.ww {
    background: url(../assets/images/simp_bg/ww-simp-bg.jpg) no-repeat center;
    background-size: 100% 100%;
    background-position: 0 0;

    .apply-title {
      box-shadow: 2px 2px 6px #ccc;
    }

    .fee-contentv {
      box-shadow: 2px 2px 6px #ccc;
    }

    .fee-item-style {
      &::after {
        background: #fa6933;
      }

      &.active {
        &::before {
          background: #fa6933;
          border-color: #fa6933;
        }
        &::after {
          background: #fff;
        }
      }
    }
  }
}
</style>
