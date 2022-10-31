<template>
   <v-app id="inspire">
    <v-navigation-drawer  
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false">
    
        <v-list-item
          prepend-avatar="https://media-exp1.licdn.com/dms/image/D5603AQHAMEYszd3Tzg/profile-displayphoto-shrink_200_200/0/1665855267593?e=1672272000&v=beta&t=31XH-zJ6OMKp_2c1xNr2Rx2y5A7vv27Immz6KuGSfHw"
          title="Minhazul Min"
          nav
          class="pa-2"
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item link :to="menu.url" :prepend-icon="menu.icon" :title="menu.title" :value="menu.value" v-for="(menu,index) in menus" :key="index"></v-list-item>
         
        </v-list>
      
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Laravel Documents</v-toolbar-title>
    </v-app-bar>

    <v-main>
         <router-view></router-view>
   
    </v-main>
     <Footer />
  </v-app>
</template>
 
 
<script>
 
export default {
  name: "Layout",
 
   data: () => ({
     
       drawer: true,
       rail: false,
       menus: [
          { title: 'Home', icon: 'mdi-home-city',value:'home', url:'/' },
          { title: 'My Account', icon: 'mdi-account',value:'my_c', url:'/laravel/my-account'},
          { title: 'Users', icon: 'mdi-account-group-outline',value:'users',url:'laravel/user' },
          { title: 'Tab', icon: 'mdi-table-row-height',value:'tab' ,url:'/laravel/tab' },
        ],
        
    }),
};
</script>
