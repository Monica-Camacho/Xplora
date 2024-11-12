<template> 
  <q-layout view="lHh Lpr lFf">
    <!-- Encabezado principal con NavBar incluido -->
    <q-header elevated>
      <NavBar />
    </q-header>

    <!-- Contenedor de la página principal -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import NavBar from 'components/navBar/NavBar.vue';
</script>

