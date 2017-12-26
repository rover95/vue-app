<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/radtings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
  
</template>

<script>
  import header from "./components/header/header.vue";
  const ERR_NUN = 0;  // 错误代码，0表示正确

  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((res) => {
        res = res.body;
        if (res.errno === ERR_NUN) {
          this.seller = res.data;
          console.log(this.seller);
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="scss">
  @import './conmmon/scss/index.scss';
  
  .tab{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    @include border-b1(rgba(7,17,27,0.1));
    .tab-item{
      flex:1;
      text-align: center;
      height: 40px;
      line-height: 40px;
      color: rgb(77, 85, 93);
      font-size: 14px;
      &:hover a{
        color: rgb(240,20,20) 
      }
      .active{
        color: rgb(240,20,20);
      }
      a{
        display: block;
      }
    }
  }
  
  
  
  
  
  
    
  
  
</style>
