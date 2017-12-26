<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>  
  </div>  
</template>

<script>
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size;
    },
    itemClasses() {
      let res = [];
      let score = this.score;
      for (let i = 1; i <= 5; i++) {
        if (i <= score) {
          res.push('on');
        } else if (i - 0.5 <= score) {
          res.push('half');
        } else {
          res.push('off');
        }
      }
      return res;
    }
  }
};
</script>

<style lang="scss">
  @import '../../conmmon/scss/index.scss';

  .star{
    font-size: 0;
    text-align: center;
    margin-top: 16px;
    .star-item{
      display: inline-block;
      background-repeat: no-repeat;
    } 
  }
  .star-48{
    .star-item{   
      width: 20px;
      height: 20px;
      margin: 0 10px;
      background-size: 20px 20px;
    }   
    .on{
      @include bg-img('star48_on');
    }
    .half{
      @include bg-img('star48_half');
    }
    .off{
      @include bg-img('star48_off');
    }
  }
  .star-36{
    .star-item{
      width: 15px;
      height: 15px;
      margin: 0 3px;
      background-size: 15px 15px;
    }
    .on{
      @include bg-img('star36_on');
    }
   .half{
      @include bg-img('star36_half');
    }
    .off{
      @include bg-img('star36_off');
    }
  }
  .star-24{
    .star-item{
      width: 10px;
      height: 10px;
      margin: 0 1.5px;
      background-size: 10px 10px;
    }
    .on{
      @include bg-img('star24_on');
    }
    .half{
      @include bg-img('star24_half');
    }
    .off{
      @include bg-img('star24_off');
    }
  }
</style>
