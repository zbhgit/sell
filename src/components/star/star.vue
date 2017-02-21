<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"  track-by="$index"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  let LENGTH = 5;
  let CLS_ON = 'on';
  let CLS_HALF = 'half';
  let CLS_OFF = 'off';
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
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i += 1) {
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .star
    .star-item
      font-size: 0
      display: inline-block
      background-repeat: no-repeat
    &.star-48
      .star-item
        width: 20px
        height: 20px
        margin-right: 20px
        background-size: 20px 20px
        &:last-child
          margin-right: 0
        &.on
          big-image('star24_on')
        &.half
          big-image('star24_half')
        &.off
          big-image('star24_off')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 6px
        background-size: 15px 15px
        &:last-child
          margin-right: 0
        &.on
          big-image('star36_on')
        &.half
          big-image('star36_half')
        &.off
          big-image('star36_off')
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &:last-child
          margin-right: 0
        &.on
          big-image('star24_on')
        &.half
          big-image('star24_half')
        &.off
          big-image('star24_off')
</style>
