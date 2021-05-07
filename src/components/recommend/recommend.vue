<template>
  <div>推荐页面</div>
</template>

<script>
import { getRecommend } from "api/recommend";
export default {
  name: "recommend",
  data() {
    return {};
  },
  created() {
    this._getRecommend();
  },
  methods: {
    _getRecommend() {
      getRecommend().then((ret) => {
        console.log(ret);
      });
    },
  },
};
</script>

<style lang="stylus" scoped></style>