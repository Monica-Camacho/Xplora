<template>
  <q-page class="page-container">
    <!-- Contenedor de filtros a la izquierda -->
    <div class="column-center">
      <!-- Menús de filtros en columna -->
      <div class="filter-column">
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

    <!-- Contenedor de la imagen al lado derecho -->
    <div class="image-container">
      <img src="assets/images/Mapa.jpg" alt="Destinos" />
    </div>
  </q-page>
</template>

<script setup>
import bttnAmarillo from "src/components/bttnAmarillo/bttnAmarillo.vue";
import FiltroMenu from "src/components/FiltroMenu/FiltroMenu.vue";
import "./Explorador.scss";

defineOptions({
  name: "ExploradorPage",
});
</script>
