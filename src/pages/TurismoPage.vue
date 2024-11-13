<template>
  <q-page
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    "
  >
    <!-- Contenedor para los botones y el campo de búsqueda, alineados horizontalmente y centrados verticalmente -->
    <div class="buscar-y-botones">
      <!-- Botones alineados horizontalmente -->
      <div class="botones-gris">
        <bttnGris label="Precio" class="boton" />
        <bttnGris label="Duración" class="boton" />
        <bttnGris label="Horario" class="boton" />
      </div>

      <!-- Componente de búsqueda -->
      <div class="buscar-contenedor">
        <BuscarDestino />
      </div>
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

    <div class="contenido-principal">
      <!-- Contenedor de tarjetas -->
      <div class="tarjetas-contenedor">
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
import TarjetaDestino from "src/components/TarjetaActividades/TarjetaActividades.vue";
import bttnGris from "src/components/bttnGris/bttnGris.vue";
import BuscarDestino from "src/components/BuscarDestino/BuscarDestino.vue";
import "./Turismo.scss";
import CardImage from "src/components/CardImage/CardImage.vue";
</script>
