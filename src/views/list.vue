<template>
<v-app>


   <v-container >

       <div class="display-1 white--text text-center">Open source projects on GitHub that need your help.<br></div>

<v-row    justify="center">
     <v-col class="d-flex "  cols="12" sm="6">
        <v-select
        
          :select="select"
        
          label="Select Lang"
          dark
          dense
          outlined
          
        ></v-select>
      </v-col>
</v-row>

<v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
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
      <span class="title font-weight-bold" v-text="item.title"></span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold" v-text="item.definition">
    

    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
       

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">call_split</v-icon>
          <span class="subheading mr-2" v-text="item.issue"></span>
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


      select: ['Foo', 'Bar', 'Fizz', 'Buzz'],

        items: [
        {
          
          title:'HTML',
          definition:' Flutter makes it easy and fast to build beautiful mobile apps.',
          issue:1729,
          
          },
        {
          title: 'Flutter',
          definition:' Flutter makes it easy and fast to build beautiful mobile apps.',
          issue:1729,
         
           },
            {
          title: 'Flutter',
          definition:' Flutter makes it easy and fast to build beautiful mobile apps.',
          issue:1729,
         
           },
     
      {
          title: 'Flutter',
          definition:' Flutter makes it easy and fast to build beautiful mobile apps.',
          issue:1729,
         
           },
     
      {
          title: 'Flutter',
          definition:' Flutter makes it easy and fast to build beautiful mobile apps.',
          issue:1729,
         
           },
      {
          title: 'Flutter',
          definition:' Flutter makes it easy and fast to build beautiful mobile apps.',
          issue:1729,
         
           },
      {
          title: 'Flutter',
          definition:' Flutter makes it easy and fast to build beautiful mobile apps.',
          issue:1729,
         
           },
      {
          title: 'Flutter',
          definition:' Flutter makes it easy and fast to build beautiful mobile apps.',
          issue:1729,
         
           },
     
      ],
    }),
  }
</script>