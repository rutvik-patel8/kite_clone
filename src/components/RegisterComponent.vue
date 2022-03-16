<template>
  <base-card>
    <form>
    <div class="mb-3">
      <label for="exampleInputEmail1">Email address :</label>
      <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1">Email Password :</label>
      <input type="password" id="exampleInputPassword1" />
    </div>
     <button><router-link to="/dashboard">Register</router-link></button>
    </form>
  </base-card>
</template>

<script>
import BaseCard from "./ui/BaseCard.vue"

export default {
 
 components:{
   BaseCard,
   
 }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button,
a {
  text-decoration: none;
  padding: 5px 10px; 
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

</style>
