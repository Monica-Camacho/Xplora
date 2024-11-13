<template>
  <q-page
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    "
  >
    <div class="buscar-contenedor">
      <BuscarDestino />
    </div>

    <div>
      <barraNavegacion />
      <!-- Otros elementos de la página -->
    </div>

    <div class="contenido-principal">
      <!-- Contenedor de tarjetas con título -->
      <h2 class="titulo-seccion">Las mejores Actividades</h2>
    </div>

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

    <div class="contenido-principal">
      <!-- Contenedor de tarjetas con título -->
      <h2 class="titulo-seccion">Actividades recomendadas</h2>
    </div>
  </q-page>
</template>

<script setup>
import TarjetaDestino from "src/components/TarjetaActividades/TarjetaActividades.vue";
import bttnGris from "src/components/bttnGris/bttnGris.vue";
import BuscarDestino from "src/components/BuscarDestino/BuscarDestino.vue";
import "./Destinos.scss";
import CardImage from "src/components/CardImage/CardImage.vue";
import barraNavegacion from "components/barraNavegacion/barraNavegacion.vue";
</script>
