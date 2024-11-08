<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          @click="toggleLeftDrawer"
        >
          <i class="bi bi-list"></i> <!-- Icono de Bootstrap colocado dentro del botón -->
        </q-btn>

        <q-toolbar-title>
          Proyecto Base
        </q-toolbar-title>

        <div>Monica Camacho</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Barra de Navegación
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Home',
    caption: 'Página de Inicio',
    icon: "bi bi-compass", // Clases de Bootstrap Icons
    link: '/'  
  },
  {
    title: 'PruebasPage',
    caption: 'Página de Pruebas',
    icon: 'bi bi-book', // Ejemplo de otro icono de Bootstrap
    link: '/pruebas'  
  },
  {
    title: 'NombrePage',
    caption: 'Nueva Página',
    icon: 'bi bi-person', 
    link: '/Nombre'  
  },
  {
    title: 'Whatsapp',
    caption: 'Simulacion',
    icon: 'bi bi-camera-video', // Icono de video
    link: '/Whatsapp'  
  },
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'bi bi-file-earmark-text', // Icono de documento
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'bi bi-github', // Icono de GitHub
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'bi bi-facebook', // Icono de Facebook
    link: 'https://facebook.quasar.dev'
  },
];


const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
