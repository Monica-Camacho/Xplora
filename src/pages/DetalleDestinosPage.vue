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
    <div class="buscar-contenedor">
      <BuscarDestino />
    </div>

    <div class="contenido-principal">
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
          lugar="París"
          titulo="La Ciudad del Amor"
          descripcion="Descubre los encantos de París, hogar de la icónica Torre Eiffel, el romántico Sena y el arte sin igual del Louvre. Una ciudad donde cada esquina cuenta una historia."
          imagen="src/assets/images/tarjetadestinos/paris.jpg"
        />
        <TarjetaDestino
          lugar="Londres"
          titulo="Historia y Modernidad"
          descripcion="Explora la vibrante Londres, con su emblemático Big Ben, el majestuoso Palacio de Buckingham y el moderno London Eye. Una ciudad donde lo clásico y lo contemporáneo se mezclan."
          imagen="src/assets/images/tarjetadestinos/londres.jpg"
        />
        <TarjetaDestino
          lugar="Roma"
          titulo="La Ciudad Eterna"
          descripcion="Vive la historia en Roma, cuna del Imperio Romano, con maravillas como el Coliseo, la Fontana di Trevi y la Ciudad del Vaticano. Una mezcla única de cultura, gastronomía y arte."
          imagen="src/assets/images/tarjetadestinos/roma.jpg"
        />
        <TarjetaDestino
          lugar="Ciudad de México"
          titulo="Corazón de Mesoamérica"
          descripcion="Sumérgete en la Ciudad de México, una urbe vibrante con una rica herencia cultural. Desde las pirámides de Teotihuacán hasta el icónico Zócalo, la historia y modernidad se encuentran aquí."
          imagen="src/assets/images/tarjetadestinos/cdmx.jpg"
        />
        <TarjetaDestino
          lugar="Dubái"
          titulo="El Lujo del Futuro"
          descripcion="Déjate sorprender por Dubái, con sus rascacielos futuristas, mercados tradicionales y lujosos hoteles. Vive la mezcla única de modernidad y tradición árabe."
          imagen="src/assets/images/tarjetadestinos/dubai.jpg"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import FiltroMenu from "src/components/FiltroMenu/FiltroMenu.vue";
import TarjetaDestino from "src/components/TarjetaDestino/TarjetaDestino.vue";
import BuscarDestino from "src/components/BuscarDestino/BuscarDestino.vue"; // Asegúrate de que la ruta sea correcta
import "./DetalleDestinos.scss";
</script>
