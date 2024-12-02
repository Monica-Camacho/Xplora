<template>
  <q-page class="error-page flex flex-center text-center">
    <div style="display: flex; flex-direction: column; align-items: center">
      <!-- Icono brush de Bootstrap Icons, ahora más grande y en negro -->
      <i class="bi bi-brush icon"></i>

      <div class="main-text">Página en Mantenimiento</div>
      <div class="sub-text">Hospedaje</div>

      <q-btn
        class="q-mt-xl"
        :color="'white'"
        :text-color="'var(--color-text)'"
        unelevated
        to="/"
        label="Pagina Principal"
        no-caps
      />
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "ErrorNotFound",
});
</script>

<style scoped lang="scss">
@import "src/css/app.scss"; /* Asegúrate de que la ruta sea correcta */

// Estilos específicos para la página de error
.error-page {
  background-color: $color5; /* Fondo de la página */
  height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
  color: $color-text; /* Color del texto en negro */
}

.icon {
  font-size: 100px; /* Tamaño grande para el ícono */
  color: $color-text; /* Ícono en negro */
  margin-bottom: 20px;
}

.main-text {
  font-family: "Mulish", sans-serif; /* Fuente de título */
  font-size: 32px; /* Tamaño de título mayor */
  font-weight: $font-weight-bold;
  color: $color-text; /* Texto en negro */
  margin-bottom: 10px;
}

.sub-text {
  font-family: "Quicksand", sans-serif; /* Fuente de texto */
  font-size: 24px; /* Tamaño de texto menor */
  font-weight: $font-weight-normal;
  color: $color-text; /* Texto en negro */
  opacity: 0.8;
  margin-bottom: 20px;
}
</style>
