<template> 
  <q-item
    clickable
    @click="navigateTo"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <!-- Reemplaza q-icon con <i> para usar los íconos de Bootstrap -->
      <i :class="icon"></i>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: '#'
  },
  icon: {
    type: String,
    default: ''
  }
})

const router = useRouter()

function navigateTo() {
  // Si el link es externo, abrir una nueva pestaña
  if (props.link.startsWith('http')) {
    window.open(props.link, '_blank')
  } else {
    // Si es interno, navegar usando el router
    router.push(props.link)
  }
}
</script>

<style scoped>
/* Ajusta el estilo del icono */
i {
  font-size: 24px; /* Tamaño del icono */
  margin-right: 8px; /* Espacio entre el icono y el texto */
}
</style>


