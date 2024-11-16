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

    <!-- Contenedor de buscar-mapa y la imagen al lado derecho -->
    <div class="image-container">
      <BuscarMapa />
      <img src="src/assets/images/Mapa.jpg" alt="Mapa" />
    </div>
  </q-page>
</template>

<script setup>
import FiltroMenu from "src/components/FiltroMenu/FiltroMenu.vue";
import BuscarMapa from "src/components/BuscarMapa/BuscarMapa.vue";
import "./Explorador.scss";

defineOptions({
  name: "ExploradorPage",
});
</script>
