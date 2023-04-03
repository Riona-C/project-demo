<template>
  <div class="square">
    <div class="box-rem">rem</div>
    <div class="box-vw">vw</div>
    <div class="box-persent">
      <div class="box-content">百分比+padding</div>
    </div>
    <div class="box-aspect-ratio">aspect-ratio宽高比</div>
  </div>
</template>

<script>
export default {
  name: 'AdaptiveSquare',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* rem实现正方形自适应 */
/* 优点：在适配了rem的项目中，可以直接使用rem设置盒子宽高，即自适应正方形 */
/* 缺点：在未设置rem的项目中，单独为了实现自适应正方形有点大材小用 */
body {
  font-size: 16px;
}
.box-rem {
  width: 10rem;
  height: 10rem;
  background: #ccc;
}
@media only screen and (max-width: 1200px) {
  body {
    font-size: 12px;
  }
}

/* vw实现 */
/* 优点：vw为内置视口单位，可直接使用。 */
/* 缺点：在实际的业务场景中，将设计稿的尺寸转化为vw相对麻烦 */
.box-vw {
  width: 10vw;
  height: 10vw;
  background: yellow;
}

/* 百分比+padding */
/* 优点：无需其他配置，设置灵活，扩展性强。 */
/* 缺点：需要额外嵌套一层内容盒 */
.box-persent {
  position: relative;
  width: 20%;
  padding-top: 20%;
}

.box-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: burlywood;
}

/* aspect-ratio */
/* 优点：属性通俗易懂，无需其他配置，无需嵌套内容盒。 */
/* 缺点：兼容性 */
.box-aspect-ratio {
  aspect-ratio: 1 / 1;
  /* aspect-ratio: 1; 可简写 */
  width: 20%;
  background: chocolate;
}
</style>
