<template>
  <q-page>
    <!-- Contenedor completo-1 para el buscador de destinos -->
    <div class="completo-1">
      <div class="buscar-contenedor">
        <BuscarDestino />
        <!-- Componente de búsqueda de destinos -->
      </div>
    </div>

    <!-- Contenedor titulo-1 para el título "Destinos Cercanos" -->
    <div class="titulo-1">
      <h2 class="titulo-seccion">Destinos Cercanos</h2>
      <!-- Título de la sección -->
    </div>

    <div class="extra-space"></div>
    <!-- Espacio adicional para separación visual -->

    <!-- Contenedor completo-2 que contiene las tarjetas de destinos cercanos -->
    <div class="completo-2">
      <!-- Cada tarjeta representa un destino cercano -->
      <CardTittle
        nombre="Ciudad de México"
        imagen="assets/images/Destinos/mexico.jpg"
      />
      <CardTittle
        nombre="Guadalajara"
        imagen="assets/images/Destinos/guadalajara.jpg"
      />
      <CardTittle nombre="Mérida" imagen="assets/images/Destinos/merida.jpg" />
      <CardTittle nombre="Tulum" imagen="assets/images/Destinos/tulum.jpg" />
      <CardTittle
        nombre="San José del Cabo"
        imagen="assets/images/Destinos/cabo.jpg"
      />
      <CardTittle
        nombre="Santa Cruz - Huatulco"
        imagen="assets/images/Destinos/santa.jpg"
      />
    </div>

    <div class="extra-space"></div>
    <!-- Más espacio para separación visual -->
    <div class="extra-space"></div>

    <!-- Contenedor titulo-2 para el título "Encuentra un lugar para ti" -->
    <div class="titulo-2">
      <h2 class="titulo-seccion">Encuentra un lugar para ti</h2>
      <!-- Título de la sección -->
    </div>

    <!-- Contenedor completo-3 para la barra de navegación -->
    <div class="completo-3">
      <div class="barra-navegacion">
        <barraNavegacion />
        <!-- Componente de barra de navegación para filtrar actividades -->
      </div>
    </div>

    <!-- Contenedor completo-4 para las tarjetas de imagen de actividades -->
    <div class="completo-4">
      <!-- Contenedor de tarjetas CardImage alineadas horizontalmente -->
      <div class="card-images-container">
        <!-- Tarjetas de actividades con imagen, nombre y número de visitas -->
        <CardImage
          imageUrl="assets/images/destinos/newyork.jpg"
          activityName="New York"
          duration="200 visitas"
          :showIcon="true"
        />
        <CardImage
          imageUrl="assets/images/destinos/vegas.jpg"
          activityName="Las Vegas"
          duration="350 visitas"
          :showIcon="true"
        />
        <CardImage
          imageUrl="assets/images/destinos/cayo.jpg"
          activityName="Cayo Hueso"
          duration="150 visitas"
          :showIcon="false"
        />
        <CardImage
          imageUrl="assets/images/destinos/sandiego.jpg"
          activityName="San Diego"
          duration="400 visitas"
          :showIcon="true"
        />
        <CardImage
          imageUrl="assets/images/destinos/miami.jpg"
          activityName="Miami"
          duration="320 visitas"
          :showIcon="true"
        />
        <CardImage
          imageUrl="assets/images/destinos/orlando.jpg"
          activityName="Orlando"
          duration="280 visitas"
          :showIcon="true"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import BuscarDestino from "src/components/BuscarDestino/BuscarDestino.vue"; // Componente para la búsqueda de destinos
import "./Destinos.scss"; /* Importa el archivo de estilos específico para la página */
import CardImage from "src/components/CardImage/CardImage.vue"; // Componente para mostrar cada actividad con imagen
import barraNavegacion from "src/components/barraNavegacion/barraNavegacion.vue"; // Barra de navegación para filtrado de actividades
import CardTittle from "src/components/CardTittle/CardTittle.vue"; // Componente de tarjeta para mostrar el título e imagen del destino
</script>
