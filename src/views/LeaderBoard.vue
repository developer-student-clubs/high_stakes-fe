<template>

<v-container>

<div class="display-1  text-center white--text "> Leaderboard Of the week </div>
   <v-divider class="mx-4"></v-divider><br>
  <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in items"
        :key="i"
      >
        <v-expansion-panel-header> 

           <v-row>

        <v-col 
            col="4"
            lg="4"
            
        >
        
            <v-img
     max-width="60"
      max-height="60"


      :src="item.src"
    ></v-img>
        </v-col>


      <v-col 
      col="6"
       lg="6"  >

 <div class="title" v-text="item.name"></div>

      </v-col>

      <v-col
      col="2"
      lg="2"
      
      
      >

       <v-btn color="primary">Profile</v-btn>

      </v-col>

        </v-row>

          
          
          
          
          
          
          
           </v-expansion-panel-header>

        <v-expansion-panel-content>
          
             <v-col 
         v-for="(repo, i) in repos"
          :key="i" 
            col="12"
            lg="12"
            
        >
        
           <v-text>{{repo.link}}</v-text>  
        </v-col>

           </v-expansion-panel-content>

      </v-expansion-panel>

    </v-expansion-panels>
  </v-row>
</v-container>
</template>

<script>
export default {
  
 data: () => ({
      loading: false,
      selection: 1,


      items: [
       
      
         {
         
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',

          name: 'Avina Vakariya',
         
        },

         {
         
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',

          name: 'Devanshu Brahmbhatt',
         
        },
     
      {
         
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',

          name: 'Hardik Bagda',
         
        },
     
     
     
     
      ],
        repos:[

    {

      link:'https://do-community.github.io/cloud_haiku/',
      
    },

     
  ],
        

      


    }),


}
</script>


<style scoped>

</style>