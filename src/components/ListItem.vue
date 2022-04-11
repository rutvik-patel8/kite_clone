<template>
  <div class="item">
    <div class="sname">INFOSYS</div>
    <div class="price green" >$1,500</div>
    <span>^</span>
    <div class="percentage red">1.2%</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.item{
  width:380px;
  display:flex;
  margin:0px 0;
  padding:10px 0px;
  border-bottom: 1px solid rgb(235, 227, 227);
}

.sname{
    flex:0 0 210px;
    margin-left: 12px;
}
.price{
    flex:0 0 60px;
}

span{
    flex:0 0 30px;
}

.green{
    color:rgb(17, 136, 17)
}

.red{
    color:rgb(235, 16, 16)
}
</style>