<template>
  <base-card>
    <h2>Register</h2>
    <img src="../assets/logo.svg" alt="logo">
    
    <form>
    <div style="margin-left:110px;">
      <label for="InputEmail1">Email :</label>
      <input type="email" id="InputEmail1" aria-describedby="emailHelp" />
    </div>
    <div style="margin-left:82px;">
      <label for="InputPassword1">Password :</label>
      <input type="password" id="InputPassword1" />
    </div>
     <button style="margin-left:253px;"><router-link to="/dashboard">Register</router-link></button>
     <p>Alread have an account ? <router-link to="/login">Login</router-link></p>
     
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

p>a {
  color: #000000;
  background-color: transparent;
  
}
p{
  text-align: center;
}
button{
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
  margin-bottom: 20px;;

}
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


.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}
img{
  height:80px;
  margin:15px;
}

h2{
  text-align:center;
  margin:15px opx;
}

input{
  padding:4px;
  margin:10px;
}
</style>
