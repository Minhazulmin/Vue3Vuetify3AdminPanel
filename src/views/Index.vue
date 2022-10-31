<template>
  <div class="ml-6 mr-6">
      <v-row class="mt-10">
        <v-col cols="12" md="4" xl="3" lg="4" sm="6" xs="12"  v-for="(dashboard,index) in dashboards" :key="index">
          <v-card  :prepend-icon="dashboard.icon" >
            <template v-slot:title>
              {{dashboard.title}}
            </template>

            <v-card-text class="ml-3">
             ৳ {{dashboard.number}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>
<script>
export default {
  data:()=>({
    dashboards:[
      {title:'Laravel', icon:'mdi-laravel ', number:'123456'},
      {title:'Vue Js', icon:'mdi-vuejs ', number:'123456'},
      {title:'PHP', icon:'mdi-language-php ', number:'123456'},
      {title:'Nuxt Js', icon:'mdi-nuxt ', number:'123456'},
      {title:'Vuetify', icon:'mdi-vuetify ', number:'123456'},
      {title:'Node Js', icon:'mdi-nodejs ', number:'123456'},
    ]
  })

}
</script>