<template>
  <div class="header">
    <div class="header-left">
      <div class="leftcontent">
        <span style="font-size: 14px">SENSEX</span>
        <span style="color: green">52,000</span>
        <span style="color: gray">1.0%</span> <span> | </span><span>NIFTY</span>
        <span style="color: green">17,000</span>
        <span style="color: gray">1.2%</span>
      </div>
    </div>
    <div class="header-right">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/dashboard/holdings">Holdings</router-link>
      <router-link to="/dashboard/funds">Funds</router-link>
      <router-link to="/dashboard/positions">Positions</router-link>
      <router-link to="/dashboard/orders">Orders</router-link>
      <router-link to="/dashboard/apps">Apps</router-link>
    </div>
  </div>
  <div class="container">
    <div class="container-left">
       <stock-list></stock-list>
    </div>
    <div class="container-right">
       <router-view name="main"></router-view>
    </div>
  </div>
  
  
</template>

<script>
import StockList from "../components/StockList.vue";
export default {
  components: { StockList },
};
</script>

<style>
.container{
  display:flex;
  margin:0;
  
}
.container-left{
  flex:0 0 400px;
}
.container-right{
  flex:1 1 
}

.leftcontent {
  align-items: center;
  padding: 0 20px;
  margin: 0 10px;
  font-size: 14px;
}
.header {
  display: flex;
  margin: 0 auto;
  padding: 0;
}
div {
  margin: 0 auto;
}

.header-left {
  flex: 0 0 401px;
}

.header-right {
  flex: 1 1;
}
</style>
