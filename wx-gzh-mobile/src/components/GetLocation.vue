<template>
  <div>
    <div id="map-container"></div>
    <el-amap vid="amap" :plugin="plugin" class="amap-demo"></el-amap>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
// import { lazyAMapApiLoaderInstance } from 'vue-amap';
export default {
  name: 'location',
  data () {
    let self = this;
    return {
      msg: 'location by AMap',
      elAMap: '',
      plugin: [{
          pName: 'Geolocation',
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              self.elAMap = o;
              if (!self.location.province && !self.alreadyLoc) {
                if (self.$route.path === '/credit-order-submit') {
                  o.getCurrentPosition((status, result) => {
                    if (result && result.position) {
                      console.log(result);
                      // 城市信息不一定能拿到
                      if (result.addressComponent) {
                        // 设置当年城市
                        self.GET_LOCATION({
                          province: result.addressComponent.province,
                          city: result.addressComponent.city,
                          area: result.addressComponent.district
                        })
                      }
                    }else {
                      self.$Message.info({
                        content: '定位失败。请手动输入「所在市」'
                      });
                    }
                  })
                  // 表示已经定位过。不要再次进行定位
                  self.AlREADY_GET_LOCATION(true);
                }
              }
            }
          }
        }]
    }
  },
  mounted() {
    // 如果存在定位信息，就不再进行定位操作
  },
  computed: {
    ...mapGetters({
      location: 'location',
      alreadyLoc: 'alreadyLoc'
    })
  },
  methods: {
    ...mapMutations(['GET_LOCATION', 'AlREADY_GET_LOCATION']),
    getCurCity() {
      this.elAMap.getCurrentPosition((status, result) => {
        if (result && result.position) {
          // 城市信息不一定能拿到
          if (result.addressComponent) {
            // 设置当年城市
            this.GET_LOCATION({
              province: result.addressComponent.province,
              city: result.addressComponent.city,
              area: result.addressComponent.district
            })
          }
        }else {
          this.$Message.info({
            content: '定位失败。请手动输入「所在市」'
          });
        }
        // 表示已经定位过。不要再次进行定位
        self.AlREADY_GET_LOCATION(true);
      });
    }
  },
  watch: {
    '$route'(to, from) {
      // 如果存在定位信息，就不再进行定位操作
      if (!this.location.province && !this.alreadyLoc) {
        if (this.$route.path === '/credit-order-submit') {
          this.getCurCity();
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
