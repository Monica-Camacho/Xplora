<template>
  <div class="buscar-destino">
    <div class="input-group">
      <i class="bi bi-search icon"></i>
      <div class="input-text">
        <span class="title">Destino</span>
        <span class="input-value">¿A dónde quieres ir?</span>
      </div>
    </div>

    <div class="separator"></div>

    <div class="input-group">
      <div class="input-text">
        <span class="title">Llegada</span>
        <span class="input-value">--/--/--</span>
      </div>
    </div>

    <div class="separator"></div>

    <div class="input-group">
      <div class="input-text">
        <span class="title">Salida</span>
        <span class="input-value">--/--/--</span>
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

.buscar-destino {
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
    align-items: flex-start;
    gap: 5px;
    flex: 1;
  }

  .separator {
    width: 1px;
    height: 30px;
    background-color: #777571;
    margin: 0 10px;
  }

  .icon {
    color: #000000;
    font-size: 18px;
    margin-top: 5px;
  }

  .input-text {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 10px;
      color: #777571;
    }

    .input-value {
      font-size: 14px;
      color: #000000;
    }
  }

  .buscar-btn {
    background-color: #f0c135;
    color: black;
    font-weight: bold;
    font-size: 14px;
  }
}
</style>
