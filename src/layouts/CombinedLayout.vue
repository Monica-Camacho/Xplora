<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Encabezado principal con AppHeader y NavBar -->
    <q-header elevated>
      <AppHeader /> <!-- Componente Header en la parte superior -->
      <NavBar />    <!-- NavBar debajo del Header -->
    </q-header>

    <!-- Contenedor de la página principal -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import AppHeader from 'components/AppHeader/AppHeader.vue'; 
import NavBar from 'components/navBar/NavBar.vue';
</script>


