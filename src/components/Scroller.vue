<template>
  <div class="scroll-mod">
    <div @touchstart="touchstart" @touchmove="touchmove">
      <div v-if="isloading && slideType === 1" class="loading-img">
        <img
          src="https://g2.soulchill.live/w/u/others/custom/soulchill/loadingnew.gif"
          alt
        />
      </div>
      <slot></slot>
      <div v-if="isloading && slideType === 2" class="loading-img">
        <img
          src="https://g2.soulchill.live/w/u/others/custom/soulchill/loadingnew.gif"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scroller',
  props: {
    isloading: Boolean
  },
  data() {
    return {
      startY: 0,
      canFetch: true,
      slideType: 0
    };
  },
  created() {},
  methods: {
    touchmove(e) {
      const currentY = e.targetTouches[0].clientY;
      const span = currentY - this.startY;
      console.log('span尺寸：', span);
      if (span > 100 && this.canFetch) {
        this.slideType = 1;
        this.$emit('fetchdata');
        this.canFetch = false;
      }
      if (span < -100 && this.canFetch) {
        this.slideType = 2;
        this.$emit('loaddata');
        this.canFetch = false;
      }
    },

    touchstart(e) {
      this.canFetch = true;
      if (e.type !== 'touchstart') {
        return;
      }
      this.startY = e.targetTouches[0].clientY;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.scroll-mod {
  padding-bottom: 80px;
  .loading-img {
    text-align: center;
    img {
      width: 60px;
    }
  }
}
</style>
