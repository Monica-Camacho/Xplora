<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Encabezado principal con AppHeader y NavBar -->
    <q-header elevated>
      <AppHeader />
      <NavBar />
    </q-header>

    <!-- Contenedor de la página principal -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- FooterInfo y FooterBar en la parte inferior -->
    <footerInfo />
    <footerBar />
  </q-layout>
</template>

<script setup>
import AppHeader from "components/AppHeader/AppHeader.vue";
import NavBar from "components/navBar/NavBar.vue";
import FooterInfo from "components/footerInfo/footerInfo.vue";
import FooterBar from "components/footerBar/footerBar.vue"; // Importa FooterBar
</script>
