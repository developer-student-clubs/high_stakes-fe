<template>

<v-app>
  <core-header />

<v-card
    class="d-lg-none d-xl-flex d-xl-none indigo darken-4"
  >
<v-btn text ><router-link to="/"  class="white--text" >Home</router-link></v-btn>
        <v-btn text ><router-link to="/about"  class="white--text" >About</router-link></v-btn>
        <v-btn text><router-link to="/profile" class="white--text" >profile</router-link></v-btn>
         <v-btn text><router-link to="/faq" class="white--text">faq</router-link></v-btn>
          <v-btn text><router-link to="/list" class="white--text">Listof PR</router-link></v-btn>
           <v-btn text><router-link to="/PRrequest" class="white--text">PR Request</router-link></v-btn>
            <v-btn text><router-link to="/leaderboard" class="white--text">Leader Board</router-link></v-btn>
             <v-btn text><router-link to="/#" class="white--text">Login</router-link></v-btn>
         <v-btn text><router-link to="/tutorial" class="white--text">Tutorial</router-link></v-btn>

  </v-card>


<router-view/>
  
 <core-footer />
</v-app>

</template>


<script>

export default {
  name:"app",
  components:{

    
    CoreHeader: () => import('@/components/layout/header'),
     CoreFooter: () => import('@/components/layout/footer'),
  },
data () {
      return {
      
      }
}

}
</script>

<style lang="scss">
#app {
 font-family: 'Space Mono', monospace;
  font-size: 20px;
  background:  #1A237E;
 
}


</style>
