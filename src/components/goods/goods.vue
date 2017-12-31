<template>
  <div class="goods">
    <div class="goods-content">

      <div class="meun-wrapper">
        <div class="hide-scroll">
          <ul class="meun">
            <li v-for="item in goods">
              <!-- <span v-if="item.type>0" class="icon"></span> -->
              <p><v-icon v-if="item.type>0" :iconType="item.type" :size="1"></v-icon>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="content-wrapper">
        <ul class="content">
          <li v-for="item in goods">
            <h3>{{item.name}}</h3>
            <div v-for="food in item.foods" class="food-row">
              <div class="food-img">
                <img :src="food.icon" alt="">
              </div>
              <div class="food-info">
                <h4>{{food.name}}</h4>
                <p v-if="food.description">{{food.description}}</p>
                <p>
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </p>
                <div class="price">
                  <span class="new-price"><span>￥</span>{{food.price}}</span>
                  <span v-if="food.oldPrice" class="old-price"><span>￥</span>{{food.oldPrice}}</span>
                </div>
              </div>

              <!-- <div class="add-food">
                <button @click="foodRemove(food.name)" v-show="foodNum[food.name]"><span class="icon-remove_circle_outline"></span></button>
                <input type="text" v-show="foodNum[food.name]" v-model="foodNum[food.name]">
                <button @click="foodAdd(food.name)"><span class="icon-add_circle"></span></button>
              </div> -->
              <v-foodNum :food="food" class="food-num"></v-foodNum>

            </div>
          </li>
        </ul>
     
        
      </div>

    </div>
    
    <div class="footer">
      <div class="icon">
        <span class="icon-shopping_cart"></span>
      </div>
      <span class="total-price">￥0</span>
      <span class="delivery-price">另需配送费￥3元</span>
      <div class="min-price">￥20元起送</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import supportIcon from '../supportIcon/supportIcon';
  import foodNumCtrl from '../foodNumCtrl/foodNumCtrl';
  // import Vue from 'vue';
  
  const ERR_NUM = 0;  // 错误代码，0表示正确

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        foodNum: {}
      };
    },
    methods: {
    },
    created() {
      this.$http.get('api/goods').then((res) => {
        res = res.body;
        if (res.errno === ERR_NUM){
          this.goods = res.data;
          // console.log(this.goods);
        }
      });
    },
    components: {
      'v-icon': supportIcon,
      'v-foodNum': foodNumCtrl
    }
  };
</script>

<style lang="scss">
  @import '../../conmmon/scss/index.scss';
  
  .goods{
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    max-width: 420px;;
    // background-color: #eee;
    overflow: hidden;
    .goods-content{
      @include flex(start,start);
      height: 100%;
      .meun-wrapper{
        position: relative;
        width: 80px;
        height: 100%;
        overflow: hidden;
        background-color: #f3f5f7;
        .meun{
          width: 80px;
          & > li{
            @include flex(start);
            // display: table;
            // vertical-align: margin;
            font-size: 12px;
            line-height: 14px;
            color: #333;
            // padding: 0 12px;
            margin: 0 12px;
            width: 56px;
            height: 54px;
            border-bottom: 1px solid rgba(7,17,27,0.1);
          }
        }
      }
      .content-wrapper{
        position: relative;
        flex:1;
        vertical-align: top;
        width: 100px;
        height: 100% ;
        padding: 0;
        overflow: auto;
        margin-right: -5px;

        // background-color: #dddddd;
        .content{
          &>li{
            margin-bottom: -1px;
            h3{
              font-size: 12px;
              color: rgb(147, 153, 159);
              line-height: 26px;
              border-left: 3px solid #d9dde1;
              background-color: #f3f5f7;
            }
            .food-row{
              position: relative;
              padding: 18px 0;
              margin: 0 18px;
              border-bottom: 1px solid rgba(7,17,27,0.1);
              .food-img{
                display: table-cell;
                width: 60px;
                height: 60px;
                img{
                  width: 60px;
                  height: 60px;
                  border-radius: 2px;
                }
              }
              .food-info{
                position: relative;
                display: table-cell;
                vertical-align: top;
                width: 100%;
                padding-left: 10px;
                &>h4{
                  font-size: 14px;
                  color: rgb(7,17,27);
                  line-height: 14px;
                }
                &>p{
                  display: block;
                  font-size: 10px;
                  margin-top: 8px;
                  color: rgb(147, 153, 159);
                  &>span{
                    margin-right: 6px;
                  }
                }
                .price{
                  .new-price{
                    font-size: 14px;
                    color: rgb(240,20,20);
                    font-weight: 700;
                    padding-right: 4px;
                    line-height: 24px;
                    span{
                      font-size: 10px;
                      font-weight: normal;
                    }
                  }
                  .old-price{
                    font-size: 10px;
                    text-decoration: line-through;
                    color:rgb(147, 153, 159);
                    font-weight: 700;
                    line-height: 24px;
                    span{
                      font-weight: normal;
                      font-weight: normal;
                    }
                  }
                }
              }
              .food-num{
                position: absolute;
                bottom: 18px;
                right: 0;
              }
            }
          }
          
        }
      }
    }
    
    .footer{
      position: fixed;
      bottom: 0;
      height: 48px;
      width: 100%;
      background-color: #141d27;
      max-width: 420px;
      .icon{
        position: absolute;
        top: -12px;
        left: 12px;
        width: 44px;
        height: 44px;
        background-color: #141d27;
        border-radius: 50%;
        border: 6px solid #141d27;
        &>span{
          display: block;
          width: 44px;
          height: 44px;
          text-align: center;
          line-height: 44px;
          font-size: 24px;
          color: rgba($color: #fff, $alpha: 0.4);
          border-radius: 50%;
          background-color: rgba($color: #ffffff, $alpha: 0.4)
        }
      }
      .total-price{
        font-size: 16px;
        color: rgba($color: #fff, $alpha: 0.4);
        font-weight: 700;
        line-height: 48px;
        margin-left: 80px;
        padding-right: 12px;
        border-right: 1px solid rgba($color: #ffffff, $alpha: 0.1)
      }
      .delivery-price{
        padding: 0 12px;
        font-size: 12px;
        color: rgba($color: #ffffff, $alpha: 0.4);
        line-height: 24px;
      }
      .min-price{
        position: absolute;
        right: 0;
        top: 0;
        width: 105px;
        padding: 0 8px;
        box-sizing: border-box;
        font-size: 12px;
        font-weight: 700;
        line-height: 48px;
        text-align: center;
        color: rgba($color: #ffffff, $alpha: 0.4);
        background-color: rgba($color: #fff, $alpha: 0.1);
      }
    }
  }
  .hide-scroll{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-x:hidden;
    overflow-y: scroll;
  }
</style>