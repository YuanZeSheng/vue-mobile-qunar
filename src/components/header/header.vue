<template>
  <div class="headerContainer">
    <!-- 模版 -->
    <header>
      <div class="headerLeft">
        <div class="iconfont backIcon">&#xe63b;</div>
      </div>
      <div class="headerInput">
        <span class="iconfont">&#xe612;</span>
        输入城市/景点/游玩主题
      </div>
      <div class="headerRight">
        城市
        <span class="iconfont bottomBtn">&#xe64a;</span>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
    };
  },
  components: {},
  computed: {
    // ...mapState([''])
  },
  methods: {
    // ...mapMutations(['']),
   },
  watch: {
    
   },
  beforeCreate() {

  },
  created() {
    
  },
  beforeMount() {
    
  },
  mounted() {
  },
  beforeUpdate() {

  },
  updated() {
    
  },
  beforeDestroy() {
    
  },
  destroyed() {

  },

};
</script>

<style scoped lang="less" >
.headerContainer {
    header {
       height: 86px;
       line-height: 86px;
       display: flex;
       background: #00bcd4;
       color: #fff;
       .headerLeft {
         width: 64px;
         .backIcon {
           font-size: 40px;
           text-align: center;
         }
       }
       .headerInput {
         flex: 1;
         height: 64px;
         line-height: 64px;
         margin-top: 12px;
         margin-left: 20px;
         background: #fff;
         border-radius: .1rem;
         color: #ccc;
       }
       .headerRight {
         width: 124px;
         text-align: center;
         .bottomBtn {
           margin-top: 10px;
         }
       }
    }
}
</style>
