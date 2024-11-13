<template>
  <q-page class="flex flex-start">
    <div class="column-center">
      <!-- Menús de filtros en columna -->
      <div class="filter-column">
        <!-- Primer menú de filtro -->
        <FiltroMenu
          title="Filtrar por:"
          :sections="[
            {
              title: 'Tipo de Alojamiento',
              options: ['Apartamentos', 'Hoteles', 'Casas'],
            },
            {
              title: 'Lugares de Interés',
              options: [
                'Museos',
                'Monumentos Históricos',
                'Parques Naturales',
                'Sitios Arqueológicos',
                'Galerías de Arte',
                'Teatros y Salas de conciertos',
                'Restaurantes',
              ],
            },
            {
              title: 'Transporte',
              options: [
                'Autobuses',
                'Metro/Trenes',
                'Taxis',
                'Bicicletas',
                'Vehículos de Alquiler',
                'Vuelos',
              ],
            },
          ]"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import bttnAmarillo from "src/components/bttnAmarillo/bttnAmarillo.vue";
import FiltroMenu from "src/components/FiltroMenu/FiltroMenu.vue";
import "./explorador.css";

defineOptions({
  name: "ExploradorPage",
});
</script>
