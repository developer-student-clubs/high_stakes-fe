<template>

<v-container>
           <div class="display-1 white--text text-center">Put your PR link here<br><br></div>

  <v-form
  
   
    ref="form"
    v-model="valid"
    lazy-validation
  >
  
    <v-text-field  
    
      v-model="name"
     
      :rules="nameRules"
    
    label="PR Link"
    color="success"

    placeholder="PR_link"
      required
       outlined
       dark
    ></v-text-field>

    
    
    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="validate"
    >
      Upload
    </v-btn>

    </v-form>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      dense: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ]
       }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>

.v-form{

margin-bottom: 249px;

}
</style>