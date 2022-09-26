<template>
  <cost-list :cost="costDetail"></cost-list>
</template>

<script>
import CostList from '../../components/CostList';
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
    CostList,
  },
};
</script>
