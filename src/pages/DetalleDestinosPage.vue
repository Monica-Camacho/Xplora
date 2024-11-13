<template>
  <q-page
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    "
  >
    <!-- Contenedor de búsqueda centrado y con tamaño fijo -->
    <div style="width: 80%; max-width: 1000px; margin-bottom: 20px">
      <BuscarDestino />
    </div>

    <div style="display: flex; align-items: flex-start; gap: 20px; width: 100%">
      <!-- Único menú de filtro -->
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

      <!-- Contenedor de tarjetas con título -->
      <div class="tarjetas-contenedor">
        <h2 class="titulo-seccion">Conoce más del lugar</h2>

        <!-- Tarjetas de destino -->
        <TarjetaDestino
          lugar="Ciudad de México"
          titulo="Majestuosidad de Teotihuacán"
          descripcion="Uno de los sitios arqueológicos más importantes de México, conocido por sus imponentes Pirámides del Sol y la Luna. Este antiguo centro ceremonial y ciudad es un ejemplo de la grandeza de las civilizaciones mesoamericanas."
          imagen="assets/images/tarjetadestinos/destinos.jpg"
        />
        <TarjetaDestino
          lugar="Ciudad de México"
          titulo="Majestuosidad de Teotihuacán"
          descripcion="Uno de los sitios arqueológicos más importantes de México, conocido por sus imponentes Pirámides del Sol y la Luna. Este antiguo centro ceremonial y ciudad es un ejemplo de la grandeza de las civilizaciones mesoamericanas."
          imagen="assets/images/tarjetadestinos/destinos.jpg"
        />
        <TarjetaDestino
          lugar="Ciudad de México"
          titulo="Majestuosidad de Teotihuacán"
          descripcion="Uno de los sitios arqueológicos más importantes de México, conocido por sus imponentes Pirámides del Sol y la Luna. Este antiguo centro ceremonial y ciudad es un ejemplo de la grandeza de las civilizaciones mesoamericanas."
          imagen="assets/images/tarjetadestinos/destinos.jpg"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import FiltroMenu from "src/components/FiltroMenu/FiltroMenu.vue";
import TarjetaDestino from "src/components/TarjetaDestino/TarjetaDestino.vue";
import BuscarDestino from "src/components/BuscarDestino/BuscarDestino.vue"; // Asegúrate de que la ruta sea correcta
import "./DetallesDestinos.scss";
</script>
