<template>
  <div class="ldk-toast-wrapper" v-if="isShowing">
    <div class="text" v-html="content"></div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  data() {
    return {
      isShowing: false,
      hideToastTimer: '',
      content: ''
    };
  },
  methods: {
    show(content, duration = 2000, callback?: () => null | void) {
      this.content = content;
      this.isShowing = true;
      clearTimeout(this.hideToastTimer);
      this.hideToastTimer = setTimeout(() => {
        this.isShowing = false;
        if (typeof callback === 'function') {
          callback();
        }
      }, duration);
    }
  }
};
</script>
<style lang='scss' scoped>
.ldk-toast-wrapper {
  position: fixed;
  z-index: 10002;
  top: 50%;
  left: 50%;

  display: block;

  max-width: 80%;

  padding: 24px 40px;

  transform: translate(-50%, -50%);
  text-align: center;

  color: #ffffff;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.6);

  .text {
    font-size: 30px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 38px;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
}
</style>