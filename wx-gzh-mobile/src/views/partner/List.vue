<template>
  <div class="layout-content-main">
    <div id="icp">
      <img src="../../assets/images/partner/pa_top.jpg" alt="">
      <div class="content">
      	<div class="pa-list">
            <div class="pa-it"><img src="../../assets/images/partner/pa_1.jpg" alt=""></div>     
                 <div class="pa-it"><img src="../../assets/images/partner/pa_2.jpg" alt=""></div>     
                 <div class="pa-it"><img src="../../assets/images/partner/pa_3.jpg" alt=""></div>     
                 <div class="pa-it"><img src="../../assets/images/partner/pa_4.jpg" alt=""></div>     
                 <div class="pa-it"><img src="../../assets/images/partner/pa_5.jpg" alt=""></div>     
                 <div class="pa-it"><img src="../../assets/images/partner/pa_6.jpg" alt=""></div>     
                 <div class="pa-it"><img src="../../assets/images/partner/pa_7.jpg" alt=""></div>     
                 <div class="pa-it"><img src="../../assets/images/partner/pa_8.jpg" alt=""></div>     
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'partner',
}
</script>

<style lang="scss">
@import '../../assets/libs/const.scss';
#icp {
	font-size: 0.8rem;
	table {
		text-align: center;
	}
      .red-txt {
            color: red;
      }
      .txt-line {
            text-decoration: underline;
      }
	.yellow {
		background: #FFFF00;
	}
	.content {
		padding: 0.8rem 0.6rem;
		b {
			display: block;
			font-size: 1rem;
			margin: 0.3rem 0;
		}
	}
	.item {
		padding-left: 1.3rem;
		position: relative;
		line-height: 1.6rem;
		.sign {
			position: absolute;
			left:0;
			top: 0px;
		}
	}
      .pa-list {
            @include dis_flex();
            align-items: bottom;
            .pa-it {
                  width: 48%;
                  margin-bottom: 0.4rem;
            }
      }
}
</style>
