<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="head-img">
        <img width="64" height="64" alt="" :src="seller.avatar">
      </div>
      <div class="head-info">
        <div class="name"><span class="brand"></span>{{seller.name}}</div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
          <button @click="showCover" class="btn-support">{{seller.supports.length}}个<span class="icon-keyboard_arrow_right"></span></button>
        </div>
      </div>
    </div>
    <div @click="showCover" class="bulletin-wrapper">
      <span class="icon"></span
      ><span class="text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="head-bg">
      <img :src="seller.avatar" width="100%">
    </div>
    <transition name="fade">
    <div v-show="coverShow" class="head-cover">
      <!-- <div class="cover-bg"></div> -->
      <div class="seller-complete-info">
        <h3>{{seller.name}}</h3>
        <v-star :size="48" :score="seller.score"></v-star>  
        <div class="info-box">        
          <h3>优惠信息</h3>
          <div v-if="seller.supports">
            <div v-for="support in seller.supports" class="info-row">
              <span class="icon" :class="classMap[support.type]"></span>
              <span class="text">{{support.description}}</span>
            </div>
            
          </div>
        </div>
        <div class="info-box">
          <h3>商家公告</h3>
          <p>{{seller.bulletin}}</p>
        </div>
        <div @click="hideShow" class="close"><span class="icon-close"></span></div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
  import star from '../star/star';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        coverShow: false
      };
    },
    methods: {
      showCover () {
        this.coverShow = true;
      },
      hideShow () {
        this.coverShow = false;
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    },
    components: {
      'v-star': star
    }
  };
</script>

<style lang="scss">
  @import '../../conmmon/scss/index.scss';

  .header{
    position: relative;
    background: rgba(7,17,27,0.2);
    overflow: hidden;
    .decrease{
      @include bg-img('decrease_1');
    }
    .discount{
      @include bg-img('discount_1');
    }
    .guarantee{
      @include bg-img('guarantee_1');
    }
    .invoice{
      @include bg-img('invoice_1');
    }
    .special{
      @include bg-img('special_1');
    }
  }
  .content-wrapper{
    // @include flex(flex-start, center);
    font-size: 0;
    padding:24px 0 18px 24px;
    .head-img{
      display: table-cell;
      vertical-align: middle;
      flex:0;
      padding-right: 16px;
      & > img{
        border-radius: 2px;
      }
    }
    .head-info{
      display: table-cell;
      vertical-align: middle;
      width: 100%;
      color: #fff;
      flex:1;
      .name{
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: bold;
        line-height: 18px;
        color: #fff;
        & > .brand{
          display: inline-block;
          vertical-align:top;
          margin-right: 6px;
          width: 30px;
          height: 18px;
          @include bg-img('brand');
          background-size: 100% 100%;
        }
      }
      .description{
        margin-bottom: 10px;
        font-size: 12px;
        line-height: 12px;
      }
      .support{
        position: relative;
        font-size: 0px;  //如果把font-size vertical-align放到下面的 .text 中手机端显示垂直居中，PC端偏高，反之也是
        line-height: 12px;
        .text{
          font-size: 10px;
          color: #fff;
          vertical-align:middle;
        }
        & > .icon{
          width: 12px;
          height: 12px;
          display: inline-block;
          vertical-align:middle;
          margin-right: 4px;
          background-size: 100% 100%;
        }
        .btn-support{
          position: absolute;
          height: 24px;
          padding: 7px 8px;
          right: 12px;
          top: -6px;
          border-radius: 12px;
          font-size: 10px;
          color: #fff;
          background-color:rgba($color: #000000, $alpha: 0.2);
          font-weight: 200;
          line-height: 12px;
          
        }
      }
    }
    
  }
  .bulletin-wrapper{
    @include flex(flex-start,center);
    font-size: 0;
    color: #fff;
    padding: 0 12px;
    background-color: rgba(7,17,27,0.2);
    font-size: 10px;
    line-height: 28px;
    // vertical-align:text-top;
    .icon{
      display: table-cell;
      // vertical-align:text-top;
      margin-right: 6px;
      width: 24px;
      height: 12px;
      @include bg-img('bulletin');
      background-size: 100% 100%;
    }
    .text{
      display: table-cell;
      width: 100%;
      text-overflow:ellipsis;
      overflow:hidden;
      white-space:nowrap;
    }
    .icon-keyboard_arrow_right{
      font-size: 10px;
      margin-left: 2px;
    }
  }
  .head-bg{
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    img{
      filter: blur(10px);
    }

  }
  .head-cover{
    position: fixed;
    z-index: 99;
    top: 0;
    left: 50%;
    transform: translateX(-50%);   
    background: rgba(7,17,27,0.8);
    backdrop-filter: blur(10px);
    width: 100%;
    max-width: 420px;
    height: 100%;
    overflow: auto;
    &.fade-enter, .fade-leave{
      &-active{
        transition: all 2s;
      }
      opacity: 0;
    }
    &.fade-leave-to{
      opacity: 0;
    }
    .cover-bg{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7,17,27,0.8);
      filter: blur(100px);
      z-index: -1;
    }
    .seller-complete-info{
      position: relative;
      padding-top: 64px;
      padding-bottom: 100px;
      box-sizing: border-box;
      color: #fff;
      font-size: 0;
      min-height: 100%;
      &>h3{
        font-size: 16px;
        font-weight: 700;
        line-height: 32px;
        text-align: center;
      }
      .close{
        position: absolute;
        bottom: 0;
        text-align: center;
        font-size: 32px;
        width: 100%;
        padding-bottom: 32px;
      }
      .info-box{
        margin-top: 28px;
        padding: 0 36px;
        &>h3{
          @include flex(center, center);
          width: 100%;
          font-size: 14px;
          font-weight: 700;
          line-height: 14px;
          text-align: center; 
          margin-bottom: 24px;
          &::before{
            content:'';
            display: inline-block;
            width: 100%;
            flex:1;
            
            height: 2px;
            margin-right: 12px;
            vertical-align: middle;
            background-color: rgba($color: #fff, $alpha: 0.2);
          }
          &::after{
            content:'';
            display: inline-block;
            width: 100%;
            flex:1;
            height: 2px;
            margin-left: 12px;
            vertical-align: middle;
            background-color: rgba($color: #fff, $alpha: 0.2);
          }
        }
        &>p{
          font-size: 12px;
          line-height: 23px;
        }
      }
      .info-row{
        margin-bottom: 12px;
        .icon{
          display: inline-block;
          width: 16px;
          height: 16px;
          padding-right: 6px;
          background-size: contain;
          vertical-align: middle;
        }
        .text{
          font-size: 12px;
          vertical-align: middle;
        }
      }
    }
  }
  
  
</style>
