<template>
  <div class="ml-6 mr-6">
    <v-row>
        <!--start alert one -->
        <v-col cols="12" md="6" xl="6" lg="6" sm="6" xs="12" >
          <v-card class="pa-5 mt-10" >
              <v-alert type="success">I'm a success alert.</v-alert><br>
              <v-alert type="info">I'm an info alert.</v-alert><br>
              <v-alert type="warning">I'm a warning alert.</v-alert><br>
              <v-alert type="error">I'm an error alert.</v-alert>
          </v-card>
        </v-col>
        <!--end alert one -->

        <!--start alert two -->
        <v-col cols="12" md="6" xl="6" lg="6" sm="6" xs="12" >
          <v-card class="pa-5 mt-10">
            <v-alert density="compact" type="info">I'm a compact alert with a <strong>type</strong> of info</v-alert><br>
            <v-alert  density="comfortable" type="success" variant="tonal"> I'm a comfortable alert with the <strong>text</strong> prop and a <strong>type</strong> of success</v-alert><br>
            <v-alert border="start" density="default" type="warning"> I'm a default alert with the <strong>border</strong> prop and a <strong>type</strong> of warning</v-alert><br>
            <v-alert prominent type="error" variant="outlined">I'm a default alert with the <strong>prominent</strong> prop and a <strong>type</strong> of error</v-alert>
          </v-card>
        </v-col>
        <!--end alert two -->
        
        <!--start alert 3 -->
        <v-col cols="12" md="6" xl="6" lg="6" sm="6" xs="12" >
          <v-card class="pa-5 mt-5 mb-5" >
            <div>
              <v-alert border="start" border-color="deep-purple accent-4" elevation="2">Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi.Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.</v-alert><br>
              <v-alert border="top" border-color="success" elevation="2">Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.</v-alert><br>
              <v-alert border="bottom" border-color="warning" elevation="2">Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</v-alert><br>
              <v-alert border="end" border-color="error" elevation="2"> Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate arcu.</v-alert>
            </div>
          </v-card>
        </v-col>
        <!--end alert 3 -->

        <!--start alert 4 -->
        <v-col cols="12" md="6" xl="6" lg="6" sm="6" xs="12" >
          <v-card class="pa-5 mt-5 mb-5">
              <v-alert color="purple" variant="outlined"><template v-slot:title>Outlined Alert</template>Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.</v-alert><br>
              <v-alert type="success" variant="outlined">Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis. Vestibulum ullamcorper mauris at ligula.</v-alert><br>
              <v-alert variant="outlined" type="warning" prominent border="top">Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor.</v-alert>
          </v-card>
        </v-col>
        <!--end alert 4-->
    </v-row>
  </div>
</template>