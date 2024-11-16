<template>
  <q-page class="flex flex-center">
    <!-- Logo de Quasar -->
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />

    <!-- Ejemplo de icono de Bootstrap Icons -->
    <i class="bi bi-compass" style="font-size: 24px; margin-top: 20px"></i>

    <!-- Imagen adicional -->
    <q-img
      src="src/assets/images/Destinos/mexico.jpg"
      style="width: 200px; height: 200px; margin-top: 20px"
    />

    <!-- Títulos y textos de ejemplo -->
    <div style="text-align: center; margin-top: 20px">
      <h1>Este es un Título H1 usando Mulish</h1>
      <h2>Este es un Título H2 usando Mulish</h2>
      <h3>Este es un Título H3 usando Mulish</h3>
      <h4>Este es un Título H4 usando Mulish</h4>
      <h5>Este es un Título H5 usando Mulish</h5>
      <h6>Este es un Título H6 usando Mulish</h6>

      <!-- Texto de párrafo con Quicksand -->
      <p>
        Este es un párrafo de ejemplo usando la fuente Quicksand. La fuente
        Quicksand se aplica globalmente al cuerpo del texto, y Mulish se utiliza
        específicamente para los títulos.
      </p>

      <!-- Texto adicional de ejemplo -->
      <p style="font-weight: 700">
        Este es un párrafo en negrita con Quicksand (peso 700).
      </p>
      <p style="font-style: italic">
        Este es un párrafo en cursiva con Quicksand.
      </p>
    </div>

    <!-- Botones con colores personalizados -->
    <div
      style="
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
      "
    >
      <q-btn label="Color 1" class="btn-color1" />
      <q-btn label="Color 2" class="btn-color2" />
      <q-btn label="Color 3" class="btn-color3" />
      <q-btn label="Color 4" class="btn-color4" />
      <q-btn label="Color 5" class="btn-color5" />
      <q-btn label="Color 6" class="btn-color6" />
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>

<style scoped lang="scss">
@import "src/css/app.scss"; /* Importa las variables de app.scss */

/* Estilos para los botones */
.btn-color1 {
  background-color: $color1;
  color: white;
}
.btn-color2 {
  background-color: $color2;
  color: white;
}
.btn-color3 {
  background-color: $color3;
  color: white;
}
.btn-color4 {
  background-color: $color4;
  color: white;
}
.btn-color5 {
  background-color: $color5;
  color: black;
}
.btn-color6 {
  background-color: $color6;
  color: black;
}
</style>
