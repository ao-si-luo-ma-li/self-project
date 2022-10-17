<template> </template>

<script>
import { GetUrlType } from '../utils/util.js';
export default {
  name: 'blank',
  mounted() {
    const { target } = GetUrlType(window.location.href);
    window.location.replace(target);
  },
};
</script>
