<template>

<v-app>
    <v-container>

<v-card class="white">
  <v-container>
<v-row>


  <v-col
    v-for="(item, i) in items"
          :key="i"  
         
    md="3"
    sm="12"
    xs="12"
    
  >

  <v-img
     :src="item.image"
    alt="profile"
    ></v-img>

  <v-card-actions>
      
        <v-btn  dark x-large color="primary" text-center>View Profile

          <v-icon right  dark>   mdi-account-circle</v-icon>
        </v-btn>
  
  </v-card-actions>


  </v-col>


  
  <v-col
    v-for="(item, i) in items"
          :key="i"  
         
    md="9"
    sm="12"
    xs="12"
    
  >



  <div class="text-center">
    <v-chip
      class="ma-2"
      color="indigo"
      text-color="white"
    >
      <v-avatar left  v-text="item.Followers">
        <v-icon>mdi-account-circle</v-icon>
      </v-avatar>
      Followers
    </v-chip>


 <v-chip
      class="ma-2"
      color="orange"
      text-color="white"
    >
      <v-avatar
        left
        class="orange darken-4"
        v-text="item.Following"
      >
        
      </v-avatar>
      Following
    </v-chip>

      <v-chip
      class="ma-2"
      color="primary"
      text-color="white"
    >
      <v-avatar left  v-text="item.Publicrepos">
        <v-icon>mdi-account-circle</v-icon>
      </v-avatar>
      Public Repos
    </v-chip>


    <v-chip
      class="ma-2"
      color="green"
      text-color="white"
    >
      <v-avatar
        left
        class="green darken-4"
        v-text="item.Publicgits"
      >
        
      </v-avatar>
      Public Gits
    </v-chip>
<br><br>

      <v-list-item    class="text-left"
              no-gutters>
      
      <v-list-item-content class="spacer justify-start"
              no-gutters
            >
         <v-divider class="mx-4"></v-divider>
   
        <v-list-item-title><label class="subtitle-1" >Name:</label> <label class="title font-weight-regular" v-text="item.name"></label></v-list-item-title>
         <v-divider class="mx-4"></v-divider>
   
        <v-list-item-title><label class="subtitle-1">  Website:</label><span class="title font-weight-regular" v-text="item.website" ></span></v-list-item-title>
         <v-divider class="mx-4"></v-divider>
   
        <v-list-item-title><label class="subtitle-1"> Location: </label> <span class="title font-weight-regular" v-text="item.location"> </span></v-list-item-title>
         <v-divider class="mx-4"></v-divider>
   
        <v-list-item-title><label class="subtitle-1">Bio:</label><span class="title font-weight-regular" v-text="item.bio"></span></v-list-item-title>
         <v-divider class="mx-4"></v-divider>
   
        <v-list-item-title><label class="subtitle-1">Memeber since:</label><span class="title font-weight-regular" v-text="item.memeber" ></span></v-list-item-title>
         <v-divider class="mx-4"></v-divider>
   
      </v-list-item-content>
       
    </v-list-item>


    
     
     </div>





  </v-col>


</v-row>

    <div class="headline font-weight-medium"><br>List of Pull-Requests</div>
    <v-divider class="mx-4"></v-divider><br>

      <v-hover>

      <template v-slot="{ hover }">
        <div
          :class="`elevation-${hover ? 24 : 6}`"
          class="mx-auto pa-6 transition-swing"
        >
         
        <v-row>

        <v-col 
         v-for="(repo, i) in repos"
          :key="i" 
            col="4"
            lg="4"
            
        >
        
           <strong v-text="repo.link"></strong>  
        </v-col>


      <v-col 
      col="6"
       lg="6"  >
        <v-progress-linear
        v-model="knowledge"
        height="34"
        reactive
      >
        <strong>{{ Math.ceil(knowledge) }}%</strong>
      </v-progress-linear>
      </v-col>

      <v-col
      col="2"
      lg="2"
      
      
      >

       <v-btn color="primary">Repo Page</v-btn>

      </v-col>

        </v-row>

        </div>
      </template>


    </v-hover>

    
  </v-container>


</v-card>

    </v-container>
</v-app>
</template>

<script>
  export default {
    data: () => ({


      skill: 20,
      knowledge: 33,
      power: 78,


       items: [
       
        {
         
          website: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          name: 'Hardik Bagda',
          image:'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          bio:"HTML,CSS,Javascript ",
          memeber:2019-12-12,
          location:'vadodara',
          Followers:12,
          Following:11,
          Publicrepos:11,
          Publicgits:12,
          
      
       },
      
  ],
  
        
  repos:[

    {

      link:'https://do-community.github.io/cloud_haiku/',

    }


  ]

    }),


  }
 
</script>