<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{path:'goods'}" active-class="active">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'ratings'}" active-class="active">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'seller'}" active-class="active">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';

  const ERR_OK = 0;

  export default {
    components: {
      'v-header': header
    },
    data(){
      return {
        seller: {},
        active: false
      }
    },
    created(){
      this.$http.get('./src/data.json').then((response) => {
        response = response.body;
        if(response.errno === ERR_OK){
          this.seller = response.data.seller;
        }

      });
    }
  };

</script>

<style rel="stylesheet/scss" lang="scss">
  @import "./assets/scss/common";
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    @include border-1px(rgba(7, 17, 27, 0.1));
    .tab-item {
      flex: 1;
      font-size: 14px;
      text-align: center;
      & > a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 92);
        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
</style>
