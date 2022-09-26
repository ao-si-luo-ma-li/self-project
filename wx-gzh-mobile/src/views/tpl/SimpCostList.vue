<template>
  <simp-cost-list :cost="costDetail"></simp-cost-list>
</template>

<script>
import SimpCostList from '../../components/SimpCostList';
import { cost } from '../../mock/cost';
export default {
  data() {
    return {
      costDetail: '',
    };
  },
  beforeMount() {
    this.costDetail = cost[this.$route.params.cost];
  },
  components: {
    SimpCostList,
  },
};
</script>
