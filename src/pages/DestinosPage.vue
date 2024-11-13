<template>
  <q-page>
    <!-- Contenedor completo-1 para buscar-contenedor -->
    <div class="completo-1">
      <div class="buscar-contenedor">
        <BuscarDestino />
      </div>
    </div>

    <!-- Contenedor titulo-1 para el título "Las mejores actividades" -->
    <div class="titulo-1">
      <h2 class="titulo-seccion">Las mejores Actividades</h2>
    </div>

    <div class="extra-space"></div>

    <!-- Contenedor completo-2 para CardTittle -->
    <div class="completo-2">
      <CardTittle
        nombre="Nombre del lugar"
        imagen="assets/images/tarjetadestinos/destinos.jpg"
      />
      <CardTittle
        nombre="Nombre del lugar"
        imagen="assets/images/tarjetadestinos/destinos.jpg"
      />
      <CardTittle
        nombre="Nombre del lugar"
        imagen="assets/images/tarjetadestinos/destinos.jpg"
      />
      <CardTittle
        nombre="Nombre del lugar"
        imagen="assets/images/tarjetadestinos/destinos.jpg"
      />
      <CardTittle
        nombre="Nombre del lugar"
        imagen="assets/images/tarjetadestinos/destinos.jpg"
      />
      <CardTittle
        nombre="Nombre del lugar"
        imagen="assets/images/tarjetadestinos/destinos.jpg"
      />
    </div>

    <div class="extra-space"></div>
    <div class="extra-space"></div>

    <!-- Contenedor titulo-2 para el título "Actividades recomendadas" -->
    <div class="titulo-2">
      <h2 class="titulo-seccion">Actividades recomendadas</h2>
    </div>

    <!-- Contenedor completo-3 para la barra de navegación -->
    <div class="completo-3">
      <div class="barra-navegacion">
        <barraNavegacion />
      </div>
    </div>

    <!-- Contenedor completo-4 para las tarjetas CardImage -->
    <div class="completo-4">
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
  </q-page>
</template>

<script setup>
import BuscarDestino from "src/components/BuscarDestino/BuscarDestino.vue";
import "./Destinos.scss"; /* Importa el archivo CSS externo */
import CardImage from "src/components/CardImage/CardImage.vue";
import barraNavegacion from "src/components/barraNavegacion/barraNavegacion.vue";
import CardTittle from "src/components/CardTittle/CardTittle.vue";
</script>
