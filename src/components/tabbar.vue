<template>
  <div class="tabbar">
    <router-link to="/Home" activeClass="myactive" class="tabbar-item">
      <img v-if="isShow" src="../assets/images/home.png" alt="">
      <img v-else src="../assets/images/home1.png" alt="">
      <div>首页</div>
    </router-link>
    <router-link to="/More" activeClass="myactive" class="tabbar-item">
      <img src="../assets/images/more.png" alt="">
      <div>分类</div>
    </router-link>
    <div class="tabbar-item">
      <img src="../assets/images/shopcart.png" alt="">
      <div>购物车</div>
    </div>
    <div class="tabbar-item">
      <img src="../assets/images/mine.png" alt="">
      <div>我的</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShow:false
    }
  }
};
</script>

<style scoped>
.myactive{
  color: red;
}
.tabbar{
  /* 本身的样式 */
  background-color: #f6f6f6;
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150,150,150,.08);

  /* 定位相关 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 利用flex进行布局 */
  display: flex;
  text-align: center;
}
.tabbar-item{
  flex:1;
  font-size: 12px;
  color: #333;
  list-style: none;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
  margin-top: 5px;
}
</style>