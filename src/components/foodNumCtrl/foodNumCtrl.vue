<template>
  <div class="add-food">
    <button @click="foodRemove(food.name)" v-show="foodNum[food.name]"><span class="icon-remove_circle_outline"></span></button>
    <span v-show="foodNum[food.name]">{{foodNum[food.name]}}</span>
    <button @click="foodAdd(food.name)"><span class="icon-add_circle"></span></button>
  </div> 
</template>

<script>
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        foodNum: {}
      };
    },
    methods: {
      foodAdd: function(n) {
        if (!this.foodNum[n]) {
          Vue.set(this.foodNum, n, 1);
          // this.foodNum[n] = 1;
        } else {
          this.foodNum[n] += 1;
        }
      },
      foodRemove: function(n) {
        if (this.foodNum[n] > 1) {
          this.foodNum[n] -= 1;
        } else {
          this.foodNum[n] = 0;
        }
      }
    }
  };
</script>

<style lang="scss">
  @import '../../conmmon/scss/index.scss';

  .add-food{
    &>span{
      display: inline-block;
      width: 24px;
      font-size: 10px;
      color: rgb(147, 153, 159);
      line-height: 24px;
      vertical-align: middle;
      text-align: center;
    }
    &>button{
      margin: 0;
      padding: 0;
      font-size: 24px;
      line-height: 24px;
      vertical-align: middle;
      color: rgb(0,160,220);
      background-color: rgba($color: #000000, $alpha: 0);
    }
  }
</style>
