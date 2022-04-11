<template>
  <div>
    <div class="item" style="color:gray; width:380px; margin-left:12px">
             Seach Stock ex. Reliance
    </div>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>

  </div>
</template>

<script>
import ListItem from "./ListItem.vue"
export default {
   components:{
     ListItem
   }
}
</script>

<style scoped>

.item{
  width:380px;
  display:flex;
  margin:0px 0;
  padding:10px 0px;
}
</style>