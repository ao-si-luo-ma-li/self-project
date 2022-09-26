<template>
  <div class="apply-root">
    <div class="apply-cost">
      <div class="expect-cost flex-box shadow-box">
        <span>预估合计费用</span>
        <span>¥{{totalMoney}}.00</span>
      </div>
      <p class="business-tip">请选择办理类型</p>
      <div class="expect-business flex-box shadow-box" v-if="type.length > 0">
        <span 
        v-for="(item, index) in type" 
        :key="item" 
        @click="onSwitchType"
        :class="{active: index === activeType}" 
        :data-index="index"
        >{{item}}</span>
      </div>
      <div class="expect-business-det flex-box shadow-box">
        <span 
        v-for="(item, index) in subType"  
        :class="{active: index === activeSubType}" 
        :key="item"
        :data-index="index"
        @click="onSwitchSubType"
        >{{item}}</span>
      </div>
      <Table 
      v-for="(data, index) in table" 
      v-if="index === activeTable" 
      :row-class-name="rowClassName" 
      :columns="columns1" 
      :data="data" 
      :key="data"></Table>
      <div 
        class="recommend shadow-box" 
        :class="{'isCut': isCut}"
        v-if="isDianXin"
        >如果有推荐人，确认后可赠送年检一次
      </div>
      <div 
        v-else
        class="recommend shadow-box" 
        :class="{'isCut': isCut}"
        @click="onCut"
        >如有推荐人确认后可抵扣 ¥3000.00</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'applycost',
  data () {
    const isDianXin = (/dianxin/i).test(location.href)
    return {
      isDianXin,
      columns1: [
          {
              title: '项目类型',
              key: 'project'
          },
          {
              title: `费用 (${isDianXin ? '专票': '增票'})`,
              key: 'fee1',
              render: (h, params) => {
                return h('div', [
                  h('span', {
                    style: {
                      display: 'inline-block',
                      width: '100%'
                    },
                    on: {
                      click: () => {
                        const {row, column, index} = params;
                        this.onClickTable({val: row.fee1, row: index, col: column.key});
                      }
                    }
                  }, params.row.fee1)
                ])
              }
          },
          {
              title: '费用 (普票)',
              key: 'fee2',
              render: (h, params) => {
                return h('div', [
                  h('span', {
                    className: 'asd',
                    style: {
                      display: 'inline-block',
                      width: '100%',
                      height: '100%'
                    },
                    on: {
                      click: () => {
                        const {row, column, index} = params;
                        this.onClickTable({val: row.fee2, row: index, col: column.key});
                      }
                    }
                  }, params.row.fee2)
                ])
              }
          }
      ],
      data1: [],
      type: [],
      subType: [],
      table: [],
      activeType: 0,
      activeSubType: 0,
      isCut: false,
      selectedProjectCost: []
    }
  },
  mounted() {
    const {type, subType, table} = this.cost;
    this.type = type;
    this.subType = subType;
    this.table = table;
  },
  props: {
    cost: Array
  },
  methods: {
    onSwitchType (e) {
      const {index} = e.target.dataset;
      this.activeType = Number(index);
    },
    onSwitchSubType (e) {
      const {index} = e.target.dataset;
      this.activeSubType = Number(index);
      this.table = this.table.map((item, index) => (item.map(_item => ({..._item, cellClassName: {}}))));
      this.selectedProjectCost = [];
      this.isCut = false;
    },
    onClickTable(params) {
      const {val, row, col} = params;
      let flag = false;
      this.table = this.table.map((item, index) => {
        if (index === this.activeTable) {
          return item.map((_item, _index) => {
            let cellClassName = _item.cellClassName || {};
            if (row === _index) {
              cellClassName[col] = 'active-table-cell';
              // 找到已选数组中，匹配当前被点击的元素同一行的元素
              const sameRowCost = this.selectedProjectCost.find(item => item.row === _index);
              if (sameRowCost ) {
                cellClassName[sameRowCost.col] = '';
                flag = row === sameRowCost.row && col === sameRowCost.col;
                if (!flag) {
                  this.selectedProjectCost = this.selectedProjectCost.filter(item => {
                    // return item.col === sameRowCost.col ? ( item.col === sameRowCost.col || item.row !== sameRowCost.row) : (item.row !== sameRowCost.row)
                    return item.col !== sameRowCost.col || item.row !== sameRowCost.row
                  });
                }
              }
            }
            return {..._item, cellClassName}
          })
        }
        else {
          return item.map(_item => ({..._item, cellClassName: {}}))
        }
      });
      const selectedProjectCostIndex = this.selectedProjectCost.findIndex(item => (item.col == col && item.row == row));
      if (!flag) {
        this.selectedProjectCost.push({
          row,
          col,
          cost: parseFloat(val.match(/\d+/)[0])
        });
      }
      else {
        this.selectedProjectCost.splice(selectedProjectCostIndex, 1);
      }
    },
    onCut() {
      this.isCut = !this.isCut;
    }
  },
  computed: {
    activeTable() {
      return (this.activeType) * (this.subType.length) + this.activeSubType;
    },
    totalMoney() {
      return this.selectedProjectCost.reduce((v, next) => (v + next.cost), 0) - (this.isCut ? 3000 : 0);
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/libs/const.scss';
.shadow-box {
  margin-bottom: toRem(35px);
  background: #fff;
  overflow: hidden;
  border-radius: toRem(12px);
  box-shadow: toRem(3px) toRem(3px) toRem(10px) toRem(0px) #999;
}
.flex-box {
  justify-content: space-around;
}
.apply-root {
  padding: 1px 0;
}
.apply-cost {
  margin: toRem(30px) toRem(20px);
  padding: toRem(30px) toRem(20px);
  background: $clMain;
  border-radius: toRem(8px);
  height: 100%;
}
.expect-cost {
  color: #e71712;
  font-size: toRem(40px);
  padding: toRem(10px) 0;
}
.business-tip {
  margin: toRem(24px) 0;
  font-size: toRem(46px);
  color: #fff;
}
.expect-business {
  font-size: toRem(26px);
  span {
    padding: toRem(16px) 0;
    width: 50%;
    flex: 1;
    text-align: center;
  }
  .active {
    color: #fff;
    background: #dc9861;
  }
}
.expect-business-det {
  font-size: toRem(46px);
  span {
    width: 33.33%;
    text-align: center;
    border-radius: toRem(8px);
  }
  .active {
    color: #fff;
    background: #dc9861;
  }
}
.recommend {
  margin-top: toRem(50px);
  color: #e71712;
  font-size: toRem(36px);
  padding: toRem(10px) 0;
  text-align: center;
}
.isCut {
  background: #e71712;
  color: #fff;
}
</style>
