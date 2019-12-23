<template>
<v-app>
  <v-container>
    <div class="display-1 white--text  text-center ">  <kbd>Here you will learn how to do pull request.</kbd></div><br><br>


  <v-stepper v-model="e6" vertical>

    
    <v-stepper-step :complete="e6 > 1" step="1">
      Step-1
     </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-12" height="150px">
        
         <v-card-title>First open your github Account
         
         <v-card-actions><v-btn class="primary  white--text">Open</v-btn>
     </v-card-actions>
     </v-card-title>
         </v-card>
      <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
     
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Step-2</v-stepper-step>

    <v-stepper-content step="2">
 <v-card color="grey lighten-1" class="mb-12" height="100px">
        
         <v-card-title>Select an open source project and clone that project to your local machine
     </v-card-title>
         </v-card>
      
      <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Step-3</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-12" height="100px">
        
         <v-card-title>Apply your creativity to the project then do pull request
     </v-card-title>
         </v-card>
      <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      </v-stepper-content>

    <v-stepper-step step="4">Step-4</v-stepper-step>
    <v-stepper-content step="4">
     <v-card color="grey lighten-1" class="mb-12" height="100px">
        
         <v-card-title>Open github and merge with the project
     </v-card-title>
         </v-card>
      <v-btn color="primary" @click="e6 = 1">Revise</v-btn>
      </v-stepper-content>


    

  </v-stepper>

  <br><br>
    </v-container>
</v-app>
</template>

<script>
  export default {
    data () {
      return {
        e6: 1,
      }
    },
  }
</script>
<style scoped>
kbd{
background:#1976d2;

}
h1{
  color: white;
}


</style>