<template>
  <div class="apply-root">
    <div class="apply-cost">
      <div class="fee-title">{{ feeTitle }}</div>
      <p class="fee-select-tip">请选择您需要的项目内容</p>
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
export default {
  name: 'applycost',
  data() {
    return {
      data1: [],
      type: [],
      subType: [],
      table: [],
      feeTitle: '',
      activeType: 0,
      activeSubType: 0,
      activeOtherType: '',
      isCut: false,
      selectedFeeType: [],
    };
  },
  mounted() {
    const { type, subType, table, feeTitle, remark } = this.cost;
    this.type = type;
    this.subType = subType;
    this.feeTitle = feeTitle;
    this.table = table;
    this.remark = remark;
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
        activeSubType,
        activeOtherType,
        selectedFeeType,
        isCut,
      } = this;
      if (table[activeType]) {
        // 申办、续办等费用
        fee1 = table[activeType].subTypeCost[activeSubType];
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
            ? table[activeType].otherSingleCost[activeOtherType].fee
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
$textColor: rgb(94, 170, 250);
$textActive: #fff;
.shadow-box {
  margin-bottom: toRem(45px);
  background: #fff;
  overflow: hidden;
  border-radius: toRem(50px);
  box-shadow: toRem(3px) toRem(3px) toRem(10px) toRem(0px) #999;
}
.flex-box {
  justify-content: space-around;
  .fee-item-style {
    border-right: 1px solid #eee;
    &:last-child {
      border-right: none;
    }
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
  background: url(../assets/images/fee_bg.jpg) no-repeat center;
  background-size: cover;
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
  margin: 0 toRem(60px) toRem(100px);
  padding: toRem(60px) toRem(36px);
  border-radius: toRem(36px);
  background: linear-gradient(
    120deg,
    rgb(206, 235, 230),
    rgb(147, 197, 242),
    rgb(160, 192, 238)
  );
}
.fee-item-style {
  flex: 1;
  height: toRem(70px);
  line-height: toRem(70px);
  font-size: toRem(24px);
  padding: 0 3px;
  color: $textColor;
  &.active {
    color: $textActive;
    background: $textColor;
  }
}
</style>
