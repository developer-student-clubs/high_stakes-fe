<template>
<v-app>
    <v-container>





        <template>


<v-container>

    <v-row>

        <v-col
        lg="4"

        
        >
<div class="display-2 font-weight-bold white--text">Welcome to  Home <span class="yellow--text">Pullrequest </span> </div>
        </v-col>


        <v-col
        lg="8"
        >
     <v-img
          src="../assets/git.jpg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>
        </v-col>

    </v-row>

    <v-row>

<v-col
  cols="12"
    lg="4"
    sm="12"
    
>
    <v-card class="indigo darken-4">
        <br><v-icon x-large dark class="group"> emoji_people</v-icon>
        
        <v-card-title class="white--text">Importance</v-card-title>
        <v-card-text class="white--text">You’ve been benefiting from the use of open
             source projects all year. Now is the time to say thanks
              to the maintainers of those projects, and a little birdy
               tells me that they love receiving contributions!</v-card-text>

    </v-card>
</v-col>


<v-col
  cols="12"
    lg="4"
    sm="12"
    
>
    <v-card class="indigo darken-4">
  <br><v-icon x-large dark class="group"> account_tree</v-icon>
        <v-card-title class="white--text">GET INVOLVED</v-card-title>
        <v-card-text class="white--text">There are lots of ways to get
             involved in an open source project: improving docs, designs
              or existing code, supporting other users, fixing, replicating
               or triaging issues and bugs, or adding missing features.</v-card-text>

    </v-card>
</v-col>

<v-col
  cols="12"
    lg="4"
    sm="12"
    
>
    <v-card class="indigo darken-4">
  <br><v-icon x-large dark class="group"> assignment</v-icon>
        <v-card-title class="white--text">BUILD YOUR PROFILE</v-card-title>
        <v-card-text class="white--text">Contributing to open source projects is
             also a great way to build your profile in the community and improve 
             your CV.It’s really easy to get started. Even small contributions can be
              really valuable to a project.</v-card-text>

    </v-card>
</v-col>


    </v-row>

</v-container>











  <v-container>

      <div class="display-2 font-weight-medium  white--text ">  Global stats</div>
      <v-divider class="mx-4 white" dark></v-divider><br>
    <v-row justify="space-around">
    <v-col
        cols="12"
        md="4"
      >
        <v-sheet
          class="pa-12"
          color="primary"
        >
         
          <div class="display-3 font-weight-bold white--text">122</div>
            <div class="title  white--text">PARTICIPATING REPOSITORI<br><br>  </div>          
         
        </v-sheet>
      </v-col>
        <v-col
        cols="12"
        md="4"
      >
        <v-sheet
          class="pa-12"
          color="primary"
        >
         
          <div class="display-3 font-weight-bold white--text">1729</div>
            <div class="title  white--text">PULL REQUESTS OPENED<br><br></div>          
         
        </v-sheet>
      </v-col>

        <v-col
        cols="12"
        md="4"
      >
        <v-sheet
          class="pa-12"
          color="primary"
        >
         
          <div class="display-3 font-weight-bold white--text">122</div>
            <div class="title  white--text">CHALLENGE COMPLETIONS<br><br></div>          
         
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template><br><br>
















  <v-card
    class="mx-auto text-center"
    color="indigo darken-1"
    dark
   >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">PULL REQUESTS OPENED
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">Sales Last 24h</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn block text>Go to Report</v-btn>
    </v-card-actions>
  </v-card>




    </v-container>
</v-app>
</template>
<script>
  export default {
    data: () => ({
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],

       elevations: [6, 12, 18],
    }),
  }
</script>

<style scoped>

.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}

</style>