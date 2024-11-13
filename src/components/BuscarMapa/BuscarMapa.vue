<template>
  <div class="buscar-mapa">
    <div class="input-group">
      <i class="bi bi-search icon"></i>
      <div class="input-text">
        <span class="input-value">Buscar en el mapa</span>
      </div>
    </div>

    <bttnAmarillo label="Buscar" />
  </div>
</template>

<script setup>
import bttnAmarillo from "src/components/bttnAmarillo/bttnAmarillo.vue";
</script>

<style scoped lang="scss">
@import "src/css/app.scss";

.buscar-mapa {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #efedea;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 886px;

  .input-group {
    display: flex;
    align-items: center; /* Centra los elementos verticalmente */
    gap: 10px;
    flex: 1;
  }

  .icon {
    color: #000000;
    font-size: 18px;
  }

  .input-text {
    display: flex;
    align-items: center; /* Centra verticalmente el texto */
  }

  .input-value {
    font-size: 14px;
    color: #000000;
  }

  .buscar-btn {
    background-color: #f0c135;
    color: black;
    font-weight: bold;
    font-size: 14px;
  }
}
</style>
