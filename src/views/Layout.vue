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
          <!--  -->
           <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

      <v-list-group :value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Users"
          ></v-list-item>
        </template>

        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Admin"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :value="title"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Actions"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>
      </v-list-group>
        <!--  -->
        </v-list>
      
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Admin Panel</v-toolbar-title>
    </v-app-bar>
 
    <v-main>
         <router-view></router-view>
   
    </v-main>
     <Footer />
  </v-app>
</template>
 
 
<script>
 import Footer from "../components/Footer.vue";
export default {
  name: "Layout",
  components: { Footer },
   data: () => ({
     
       drawer: true,
       rail: false,
       menus: [
         { title: 'My Account', icon: 'mdi-account',value:'my_c', url:'my-account'},
          { title: 'Alerts', icon: 'mdi-home-city',value:'home', url:'/alerts' },
          { title: 'User Profile', icon: 'mdi-account-group-outline',value:'users',url:'user-profile' },
          { title: 'Tab', icon: 'mdi-table-row-height',value:'tab' ,url:'tab' },
        ],
        // 
      open: ['Users'],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
        
    }),
};
</script>
