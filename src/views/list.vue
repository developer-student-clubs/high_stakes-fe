<template>
<v-app>


   <v-container >

       <div class="display-1 white--text text-center">Open source projects on GitHub that need your help.<br></div>

<v-row    justify="center">
     <v-col class="d-flex "  cols="12" sm="6">
        <v-select
        
          :items="items"
        
          label="Select Lang"
          dark
          dense
          outlined
          
        ></v-select>
      </v-col>
</v-row>

<v-row>
        <v-col
          v-for="n in 12"
          :key="n"
          cols="12"
          md="3"
        >
          <v-card
            class="pa-2"
          color="#26c6da"
            dark
         outlined
        shaped
         tile
        
  >
   

     <v-card-title>
      <v-icon
        large
        left
      >
        mdi-file
      </v-icon>
      <span class="title font-weight-bold">HTML</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Turns out semicolon-less style is easier and safer in TS."

    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
       

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">call_split</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1 title">Issues</span>
          
        </v-row>
      </v-list-item>
    </v-card-actions>
    
          </v-card>



        </v-col>
      </v-row>
  

</v-container>





</v-app>
</template>



<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>