<template>
<v-app>
   <v-container> 
  <v-banner  class="indigo white" two-line>
     
    <div class="white--text">
        
        <br><div class="display-1">We are DSC (Developer Student Club) </div> <br>

        <p  class="subtitle-1 text-justify">Three line text string example 
        with two actions. One to two lines is preferable. Three
         lines should be considered the maximum string length on
         
        with two actions. One to two lines is preferable. Three
         lines should be considered the maximum string length on
         
        with two actions. One to two lines is preferable. Three
         lines should be considered the maximum string length on
          desktop in order to keep messages short and actionable.</p></div>

    
    
    
  </v-banner><br>
   </v-container>



   <v-container >
       <div class="display-2  text-center white--text "> Web Developers <br><br> </div>
<v-row>
        <v-col
           v-for="(item, i) in items"
          :key="i"  
          cols="12"
          md="4"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          :loading="loading"
   
  >
    <v-img
      height="250"
      :src="item.src"
    ></v-img>

    <v-card-title class="headline  primary white--text" v-text="item.name"></v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >

       
      </v-row>

      <div class="title font-weight-bold">
          Introduction
      </div>

      <div  class="subtitle-1 text-justify " v-text="item.introduction"  >
 </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
      <v-divider class="mx-4"></v-divider>
  <v-divider class="mx-4"></v-divider>
  <v-divider class="mx-4"></v-divider>
  <v-divider class="mx-4"></v-divider>


    <v-card-title class="headline">Social Media</v-card-title>

    <v-card-text>
            <v-btn class="ma-2" color="primary" href="item.linkdin" target="_blank"  dark>
              <v-icon dark left > mdi-linkedin</v-icon>
                </v-btn>

             <v-btn class="ma-2" color="primary" href="item.instagram" target="_blank" dark>
              <v-icon dark left>mdi-instagram</v-icon>
                </v-btn>

               <v-btn class="ma-2" color="primary"  href="item.facebook" target="_blank" dark>
              <v-icon dark left>mdi-facebook</v-icon>
                </v-btn>

                 <v-btn class="ma-2" color="primary" href="item.gmail" target="_blank" dark>
              <v-icon dark left>mdi-gmail</v-icon>
                </v-btn>
    </v-card-text>

   
          </v-card>
        </v-col>




  </v-row>

</v-container><br><br>



    







</v-app>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,

      items: [
       
        {
         
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          name: 'Hardik Bagda',
          introduction:"My approach is always learning and knowledge gives me satisfaction. Apart from development, I loved to write blogs on technologyand also like to do public speaking as well ",
          linkdin: "https://www.linkedin.com/in/devanshubrahmbhatt/",
          facebook: "https://www.linkedin.com/in/devanshubrahmbhatt/",
          instagram: "https://www.linkedin.com/in/devanshubrahmbhatt/",
          gmail: "https://www.linkedin.com/in/devanshubrahmbhatt/",
        },
         {
         
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          name: 'Avina Vakariya',
          introduction:"My approach is always learning and knowledge gives me satisfaction. Apart from development, I loved to write blogs on technologyand also like to do public speaking as well ",
          linkdin: "https://www.linkedin.com/in/devanshubrahmbhatt/",
          facebook: "https://www.linkedin.com/in/devanshubrahmbhatt/",
          instagram: "https://www.linkedin.com/in/devanshubrahmbhatt/",
          gmail: "https://www.linkedin.com/in/devanshubrahmbhatt/",
        },
     
      {
         
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          name: 'Devanshu Brahmbhatt',
          introduction:"My approach is always learning and knowledge gives me satisfaction. Apart from development, I loved to write blogs on technologyand also like to do public speaking as well ",
          linkdin: "https://www.linkedin.com/in/devanshubrahmbhatt/",
          facebook: "https://www.linkedin.com/in/devanshubrahmbhatt/",
          instagram: "https://www.linkedin.com/in/devanshubrahmbhatt/",
          gmail: "https://www.linkedin.com/in/devanshubrahmbhatt/",
        },
     
      ],

    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>