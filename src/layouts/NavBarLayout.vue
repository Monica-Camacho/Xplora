<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <!-- Incluye el componente NavBar -->
      <NavBar />
    </q-header>

    <!-- Drawer lateral -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>Barra de Navegación</q-item-label>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <!-- Contenedor de la página principal -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import NavBar from 'components/navBar/NavBar.vue';
import EssentialLink from 'components/EssentialLink.vue';
import { ref } from 'vue';

const leftDrawerOpen = ref(false);
</script>
