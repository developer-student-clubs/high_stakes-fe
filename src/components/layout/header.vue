<template>
  <div id="header">
  
    <v-toolbar  class="indigo darken-4"
      :extended="extended"
      :prominent="prominent"
      :dense="dense"
      :collapse="collapse"
      :flat="flat"
      :extension-height="extensionHeight"
    >
      <v-toolbar-title class="white--text  display-2">  HackStakes   </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items  class="d-none d-sm-none d-md-none d-lg-flex">
        <v-btn text ><router-link to="/"  class="white--text" >Home</router-link></v-btn>
        <v-btn text ><router-link to="/about"  class="white--text" >About</router-link></v-btn>
        <v-btn text><router-link to="/profile" class="white--text" >profile</router-link></v-btn>
         <v-btn text><router-link to="/faq" class="white--text">faq</router-link></v-btn>
          <v-btn text><router-link to="/list" class="white--text">Listof PR</router-link></v-btn>
           <v-btn text><router-link to="/PRrequest" class="white--text">PR Request</router-link></v-btn>
            <v-btn text><router-link to="/leaderboard" class="white--text">Leader Board</router-link></v-btn>
            <v-btn text><router-link to="/#" class="white--text">Login</router-link></v-btn>
        
        
       <v-btn text>   <router-link to="/tutorial" class="white--text">Tutorial</router-link></v-btn>
      </v-toolbar-items>

    <template>

  </template>
   


    </v-toolbar>
  </div>
</template>

<script>
  import {APIService} from '../../services/apiservice';
  const apiService = new APIService();

  export default {
    data: () => ({
      extended: true,
      extendedSlot:false,
      prominent: false,
      dense: false,
      collapse: false,
      flat: true,
      bg: false,
      extensionHeight: 40,
    }),
    
    methods:{
   
      getProfile(){
        apiService.getProfile().then((result)=>{
        this.profile=result;
        })
      }
    },
    mounted:function()
    {
      this.getProfile();
    }
  }
</script>
<style scoped>

</style>