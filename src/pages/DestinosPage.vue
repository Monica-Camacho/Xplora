<template>
  <q-page class="pagina-destinos">
    <div class="buscar-contenedor">
      <BuscarDestino />
    </div>

    <CardTittle
      nombre="Nombre del lugar"
      imagen="assets/images/tarjetadestinos/destinos.jpg"
    />

    <div class="barra-navegacion">
      <barraNavegacion />
    </div>

    <div class="contenido-principal">
      <h2 class="titulo-seccion">Las mejores Actividades</h2>

      <!-- Contenedor para las tarjetas CardImage alineadas horizontalmente -->
      <div class="card-images-container">
        <CardImage
          imageUrl="assets/images/tarjetadestinos/destinos.jpg"
          activityName="Tour por la Ciudad"
          duration="3.5 Horas - Grupo"
          :showIcon="true"
        />
        <CardImage
          imageUrl="assets/images/tarjetadestinos/destinos.jpg"
          activityName="Tour por la Ciudad"
          duration="3.5 Horas - Grupo"
          :showIcon="false"
        />
        <CardImage
          imageUrl="assets/images/tarjetadestinos/destinos.jpg"
          activityName="Tour por la Ciudad"
          duration="3.5 Horas - Grupo"
          :showIcon="true"
        />
        <CardImage
          imageUrl="assets/images/tarjetadestinos/destinos.jpg"
          activityName="Tour por la Ciudad"
          duration="3.5 Horas - Grupo"
          :showIcon="true"
        />
        <CardImage
          imageUrl="assets/images/tarjetadestinos/destinos.jpg"
          activityName="Tour por la Ciudad"
          duration="3.5 Horas - Grupo"
          :showIcon="true"
        />
      </div>
    </div>

    <div class="contenido-principal">
      <h2 class="titulo-seccion">Actividades recomendadas</h2>
      <!-- Agrega aquí contenido adicional para actividades recomendadas si es necesario -->
    </div>
  </q-page>
</template>

<script setup>
import TarjetaDestino from "src/components/TarjetaActividades/TarjetaActividades.vue";
import bttnGris from "src/components/bttnGris/bttnGris.vue";
import BuscarDestino from "src/components/BuscarDestino/BuscarDestino.vue";
import "./Destinos.scss"; /* Importa el archivo CSS externo */
import CardImage from "src/components/CardImage/CardImage.vue";
import barraNavegacion from "src/components/barraNavegacion/barraNavegacion.vue";
import CardTittle from "src/components/CardTittle/CardTittle.vue";
</script>
