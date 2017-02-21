<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(2,$event)" class="block positive" :class="{'active':selectType===2 }">{{desc.all}}
        <span
        class="count">{{ratings.length}}</span></span>
      <span @click="select(0,$event)" :class="{'active':selectType===0 }" class="block positive">{{desc.positive}}
      <span class="count">{{positive.length}}</span>
      </span>
      <span @click="select(1,$event)" :class="{'active':selectType===1 }" class="block negative">{{desc.negative}}
      <span class="count">{{negative.length}}</span>
      </span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on': onlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;
  export default {
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          };
        }
      }
    },
    methods: {
      select(type, event) {
        if (!event._constructed) {
          return;
        }
        this.selectType = type;
        this.$dispatch('ratingtype.select', type);
      },
      toggleContent(event) {
        if (!event._constructed) {
          return;
        }
        this.onlyContent = !this.onlyContent;
        console.log(this.onlyContent);
        this.$dispatch('content.toggleContent', this.onlyContent);
      }
    },
    computed: {
      positive() {
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE;
        });
      },
      negative() {
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGATIVE;
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .ratingselect
    .rating-type
      padding: 18px
      margin: 0 18px
      font-size: 0
      border-1px(rgba(7, 17, 27, 0.1))
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        border-radius: 1px
        line-height: 16px
        font-size: 12px
        color: rgb(77, 85, 93)
        &.active
          color: #fff
        .count
          line-height: 16px
          margin-left: 4px
          font-size: 10px
        &.positive
          background-color: rgba(0, 160, 220, 0.2)
          &.active
            background-color: rgb(0, 160, 220)
        &.negative
          background-color: rgba(77, 85, 93, 0.2)
          &.active
            background-color: rgb(77, 85, 93)
    .switch
      padding: 12px 18px
      line-height: 24px
      color: rgb(147, 153, 159)
      font-size: 0
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      &.on
        .icon-check_circle
          color: #00c850
      .icon-check_circle
        display: inline-block
        vertical-align top
        font-size: 24px
        margin-right: 4px
      .text
        display: inline-block
        vertical-align top
        font-size: 10px

</style>
