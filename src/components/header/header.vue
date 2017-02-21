<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description}}/{{ seller.deliveryTime}}分钟到达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description}}</span>
        </div>
      </div>
      <div @click="showDetail" v-if="seller.supports" class="supports-count">
        <span class="count">{{ seller.supports.length }}个 </span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>

    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div v-show="detailShow" class="detail" transition="fade">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{ seller.name }}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="item in seller.supports">
              <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
              <span class="text">{{ seller.supports[$index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">
              {{ seller.bulletin }}
            </p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="hideDetail">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  import star from 'components/star/star.vue';
  export default {
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      hideDetail() {
        this.detailShow = false;
      }
    },
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {
      star
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    position: relative
    overflow: hidden
    color: #fff
    background-color: rgba(7, 17, 27, 0.5)
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius; 2px
      .content
        display: inline-block
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            big-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight: bold
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              big-image('decrease_1')
            &.discount
              big-image('discount_1')
            &.guarantee
              big-image('guarantee_1')
            &.invoice
              big-image('invoice_1')
            &.special
              big-image('special_1')
          .text
            line-height: 12px
            font-size: 10px
      .supports-count
        position: absolute
        right: 12px
        bottom: 18px
        padding: 0 8px
        height: 24px
        border-radius: 14px
        line-height: 24px
        font-size: 10px
        background-color: rgba(0, 0, 0, .2)
        text-align: center
        .count
          margin-left: 8px
          vertical-align: top
          font-size: 10px
        .icon-keyboard_arrow_right
          line-height: 24px
          margin-left: 2px
          font-size: 10px

    .bulletin-wrapper
      position: relative
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background-color: rgba(07, 17, 27, 0.2)
      .bulletin-title
        display: inline-block
        vertical-align: top
        margin-top: 7px
        width: 22px
        height: 12px
        big-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        vertical-align: top
        margin: 0 4px
        line-height: 28px
        font-size: 10px
      .icon-keyboard_arrow_right
        position: absolute
        top: 9px
        right: 12px
        font-size: 10px


    .background
      position: absolute
      top: 0
      left: 0;
      width: 100%
      height: 100%
      z-index: -1

      filter: blur(10px)
    .detail
      position: fixed
      top: 0
      left: 0
      z-index: 300
      width: 100%
      height: 100%
      overflow: auto
      transition: all 0.5s
      backdrop-filter: blur(10px)
      &.fade-transition
        opacity: 1
        background-color: rgba(7, 17, 27, 0.8)
      &.fade-enter,&.fade-leave
        opacity: 0
        background-color: rgba(7, 17, 27, 0.0)
      .detail-wrapper
        width: 100%
        min-height: 100%
        .detail-main
          margin-top: 64px
          padding-bottom: 64px
          font-size: 0
          .name
            line-height: 16px
            text-align: center
            font-size: 16px
            font-weight: 700
          .star-wrapper
            margin-top: 16px
            margin-right: 6px
            padding: 2px 0
            text-align: center
          .title
            display: flex
            width: 80%
            margin: 28px auto 24px
            .line
              flex: 1
              position: relative;
              top: -14px
              border-bottom: 1px solid rgba(255, 255, 255, 0.2)
            .text
              padding: 0 12px
              font-size: 14px
              font-weight: 700
              line-height: 28px;
          .supports
            width: 80%
            margin: 0 auto
            .support-item
              padding: 0 12px
              margin-bottom: 12px
              font-size: 0
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                width: 16px
                height: 16px
                vertical-align: top
                margin-right: 6px
                background-size: 16px 16px
                background-repeat: no-repeat
                &.decrease
                  big-image('decrease_2')
                &.discount
                  big-image('discount_2')
                &.guarantee
                  big-image('guarantee_2')
                &.invoice
                  big-image('invoice_2')
                &.special
                  big-image('special_2')
              .text
                font-size: 12px
                line-height: 16px

          .bulletin
            width: 80%
            margin: 0 auto
            padding: 0 12px
            .content
              line-height: 24px
              font-size: 12px

      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto 0 auto
        clear: both
        font-size: 32px

</style>
