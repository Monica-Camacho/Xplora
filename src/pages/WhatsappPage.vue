<template>
  <q-page class="flex flex-center">
    <div style="display: flex; flex-direction: column; align-items: center">
      <!-- Botón para abrir el Modal de Pago -->
      <q-btn
        label="Abrir Modal de Pago"
        @click="showModalPago = true"
        color="yellow"
        class="q-mb-md"
      />

      <!-- Botón para abrir el Modal de Efectivo -->
      <q-btn
        label="Abrir Modal de Efectivo"
        @click="showModalCash = true"
        color="green"
        class="q-mb-md"
      />

      <!-- Botón Gris -->
      <bttnGris label="Precios" />
      <bttnAmarillo label="Precios" />

      <!-- Modal de Pago -->
      <ModalPago v-model="showModalPago" />

      <!-- Modal de Efectivo -->
      <ModalCash v-model="showModalCash" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ModalPago from "src/components/ModalPago/ModalPago.vue"; // Asegúrate de que la ruta sea correcta
import ModalCash from "src/components/ModalCash/ModalCash.vue"; // Asegúrate de que la ruta sea correcta
import bttnGris from "src/components/bttnGris/bttnGris.vue"; // Asegúrate de que la ruta sea correcta
import bttnAmarillo from "src/components/bttnAmarillo/bttnAmarillo.vue"; // Asegúrate de que la ruta sea correcta

const showModalPago = ref(false); // Controla la visibilidad del modal de pago
const showModalCash = ref(false); // Controla la visibilidad del modal de efectivo
</script>
