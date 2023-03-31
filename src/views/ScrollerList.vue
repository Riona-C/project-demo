<template>
  <div class="box" :class="lang === 'ar-sa' ? 'ar' : 'other'">
    <scroller
      v-if="list.length > 0"
      @loaddata="loadData"
      :isloading="isloading"
    >
      <div class="content">
        <ul class="record">
          <li v-for="(item, index) in list" :key="item.id" class="item">
            <div class="left">
              <div class="title">{{ item.title }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
            <div class="gems">
              <div
                class="icon"
                :style="{ backgroundImage: 'url(' + item.icon + ')' }"
              ></div>
              <span class="price">{{ item.count }}</span>
            </div>
          </li>
        </ul>
      </div>
    </scroller>
    <!-- <Empty
      v-else
      :desc="$t('luckyGift.empty')"
      :img="'https://s1.soulchillcdn.com/upload/E9/AC/E9AC0BA4-882C-916F-7E50-424760B2C82220230308_L.png'"
    /> -->
  </div>
</template>
<script>
export default {
  name: 'ScrollerList',
  data() {
    return {
      list: [], // 中奖记录
      pageInfo: {
        // 分页数据
        page: 1,
        count: 10
      },
      hasNext: true, // 是否有下一页
      isloading: false
    };
  },
  methods: {
    // 下拉分页加载
    loadData() {
      if (!this.hasNext || this.isloading) {
        return false;
      }
      this.isloading = true;
      // 数据请求业务接口
      // getRecord(this.pageInfo).then((res: any) => {
      //   this.isloading = false;
      //   this.hasNext = res.data.hasNext;
      //   const data = res.data.list.map((item: any) => {
      //     item.isShow = false;
      //     return item;
      //   });
      //   this.list = this.list.concat(data);
      //   this.pageInfo.page += 1;
      // });
    }
  },
  mounted() {
    this.pageInfo.page = 1;
    this.loadData();
  }
};
</script>
<style lang='scss' scoped>
</style>