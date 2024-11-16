<template>
  <q-page>
    <div class="completo-1">
      <!-- Contenedor para los botones grises alineados horizontalmente -->
      <div class="botones-gris">
        <bttnGris label="Precio" class="boton" />
        <bttnGris label="Duración" class="boton" />
        <bttnGris label="Horario" class="boton" />
      </div>

      <!-- Contenedor para el componente de búsqueda -->
      <div class="buscar-contenedor">
        <BuscarDestino />
        <!-- Componente de búsqueda de destinos -->
      </div>
    </div>

    <!-- Contenedor titulo-1 para el título "Las Mejores Actividades" -->
    <div class="titulo-1">
      <h2 class="titulo-seccion">Las Mejores Actividades</h2>
      <!-- Título de la sección -->
    </div>

    <!-- Contenedor completo-4 para las tarjetas de imagen de actividades -->
    <div class="completo-2">
      <!-- Contenedor de tarjetas CardImage alineadas horizontalmente -->
      <div class="card-images-container">
        <!-- Tarjetas de actividades con imagen, nombre y número de visitas -->
        <CardImage
          imageUrl="assets/images/Destinos/newyork.jpg"
          activityName="New York"
          duration="200 visitas"
          :showIcon="true"
        />
        <CardImage
          imageUrl="assets/images/Destinos/vegas.jpg"
          activityName="Las Vegas"
          duration="350 visitas"
          :showIcon="true"
        />
        <CardImage
          imageUrl="assets/images/Destinos/cayo.jpg"
          activityName="Cayo Hueso"
          duration="150 visitas"
          :showIcon="false"
        />
        <CardImage
          imageUrl="assets/images/Destinos/sandiego.jpg"
          activityName="San Diego"
          duration="400 visitas"
          :showIcon="true"
        />
        <CardImage
          imageUrl="assets/images/Destinos/miami.jpg"
          activityName="Miami"
          duration="320 visitas"
          :showIcon="true"
        />
        <CardImage
          imageUrl="assets/images/Destinos/orlando.jpg"
          activityName="Orlando"
          duration="280 visitas"
          :showIcon="true"
        />
      </div>
    </div>

    <!-- Contenedor titulo-2 para el título "Encuentra un lugar para ti" -->
    <div class="titulo-2">
      <h2 class="titulo-seccion">Actividades Recomendadas</h2>
      <!-- Título de la sección -->
    </div>

    <div class="contenido-principal">
      <!-- Contenedor de tarjetas -->
      <div class="tarjetas-contenedor">
        <TarjetaDestino
          lugar="Londres"
          titulo="Entrada al London Eye"
          descripcion="Con esta entrada, podrás subir al emblemático London Eye para dar un paseo de 30 minutos sobre la ciudad."
          imagen="assets/images/Turismo/londoneye.jpg"
        />
        <TarjetaDestino
          lugar="Ciudad de México"
          titulo="Tour por las pirámides de Teotihuacán "
          descripcion="Visitarás el santuario nacional de México y las ruinas de una antigua ciudad mesoamericana."
          imagen="assets/images/Turismo/piramide.jpg"
        />
        <TarjetaDestino
          lugar="París"
          titulo="Crucero por el Sena con almuerzo"
          descripcion="Embarcarás junto a la Torre Eiffel, y desde el moderno barco con techo de cristal podrás contemplar las vistas y los monumentos a través de la cubierta panorámica."
          imagen="assets/images/Turismo/sena.jpg"
        />
        <TarjetaDestino
          lugar="Barcelona"
          titulo="Entrada a la Sagrada Familia con audioguía"
          descripcion="Este recorrido por la Sagrada Familia ofrecerá acceso y una audioguía que brinda información sobre la obra maestra de Gaudí."
          imagen="assets/images/Turismo/sagradafamilia.jpg"
        />
        <TarjetaDestino
          lugar="Ámsterdam"
          titulo="Entrada al Rijksmuseum"
          descripcion="Durante la visita, podrás ver obras maestras de destacados artistas holandeses como Rembrandt, Frans Hals y Johannes Vermeer."
          imagen="assets/images/Turismo/Rijksmuseum.jpg"
        />
        <TarjetaDestino
          lugar="Tokyo"
          titulo="Entrada al Tokyo Skytree"
          descripcion="Uno de los sitios arqueológicos más importantes de México, conocido por sus imponentes Pirámides del Sol y la Luna. Este antiguo centro ceremonial y ciudad es un ejemplo de la grandeza de las civilizaciones mesoamericanas."
          imagen="assets/images/Turismo/Tokyo.jpg"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import TarjetaDestino from "src/components/TarjetaActividades/TarjetaActividades.vue";
import bttnGris from "src/components/bttnGris/bttnGris.vue";
import BuscarDestino from "src/components/BuscarDestino/BuscarDestino.vue";
import "./Turismo.scss";
import CardImage from "src/components/CardImage/CardImage.vue";
</script>
