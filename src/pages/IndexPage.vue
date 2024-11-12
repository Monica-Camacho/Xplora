<template>
  <q-page class="flex flex-center">
    <div style="display: flex; flex-direction: column; align-items: center">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px; margin-bottom: 20px"
      />

      <!-- Botones amarillos -->
      <div style="display: flex; gap: 10px; margin-bottom: 20px">
        <bttnAmarillo label="Buscar" />
        <bttnAmarillo label="Enviar" />
        <bttnAmarillo label="Aceptar" />

        <h1 class="title">Título Principal Filtrar por</h1>
        <h2 class="subtitle">
          Subtítulo o Título de Menú, Tipo de Alojamiento
        </h2>
        <p class="normal-text">Tipo de Alojamiento</p>
        <p class="small-text">Este es un texto pequeño.</p>
      </div>

      <!-- Menús de filtros en columna -->
      <div
        style="
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: flex-start;
        "
      >
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

        <!-- Segundo menú de filtro -->
        <FiltroMenu
          title="Filtrar por:"
          :sections="[
            {
              title: 'Ubicación',
              options: ['Ciudad de México', 'Reforma', 'Tzacualoacan'],
            },
            {
              title: 'Categoría',
              options: [
                'Lugares icónicos',
                'Eventos y Festividades',
                'Gastronomía Auténtica',
                'Arte y Cultura',
                'Escapadas Cercanas',
                'Vida Nocturna y Entretenimiento',
              ],
            },
            {
              title: 'Idiomas',
              options: ['Español', 'Inglés', 'Francés', 'Italiano'],
            },
            {
              title: 'Mostrar resultados con',
              options: ['Entradas libres', 'Destacados'],
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

defineOptions({
  name: "IndexPage",
});
</script>
