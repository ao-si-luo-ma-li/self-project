<template>
  <apply-cost :cost="costDetail"></apply-cost>
</template>

<script>
import ApplyCost from '../../components/ApplyCostNew';
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
    ApplyCost,
  },
};
</script>
