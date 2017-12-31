<template>
  <span class="icon" :class="sizeMap">
    <span :class="classMap[iconType]"></span>
  </span>
</template>

<script>
export default {
  props: {
    'iconType': {
      type: Number
    },
    size: {
      type: Number
    }
  },
  data() {
    return {
      classMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    };
  },
  computed: {
    sizeMap() {
      return 's-' + this.size;
    },
    created() {
      // this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    }
  }
};
</script>

<style lang="scss">
  @import '../../conmmon/scss/index.scss';
  
  .icon{
    display:inline-block;
  }
  .s-1{
    @include spt-icon(1);  
    span{
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: top;
      margin-right: 2px;
      background-size: 100% 100%;
    }
  }
  .s-2{
    @include spt-icon(2);
  }
  .s-3{
    @include spt-icon(3);
  }
 
  
  
</style>
