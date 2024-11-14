<template>
  <!-- Contenedor principal para la búsqueda en el mapa -->
  <div class="buscar-mapa">
    <!-- Grupo de entrada para la búsqueda -->
    <div class="input-group">
      <i class="bi bi-search icon"></i>
      <!-- Ícono de búsqueda de Bootstrap Icons -->
      <div class="input-text">
        <span class="input-value">Buscar en el mapa</span>
        <!-- Texto de placeholder para la búsqueda -->
      </div>
    </div>

    <!-- Componente de botón amarillo personalizado con el texto 'Buscar' -->
    <bttnAmarillo label="Buscar" />
  </div>
</template>

<script setup>
import bttnAmarillo from "src/components/bttnAmarillo/bttnAmarillo.vue"; // Importa el componente de botón amarillo desde su ubicación
</script>

<style scoped lang="scss">
@import "src/css/app.scss"; // Importa estilos globales desde app.scss

/* Estilos para el contenedor principal de búsqueda en el mapa */
.buscar-mapa {
  display: flex; // Usamos flexbox para alinear elementos en fila
  align-items: center; // Centra verticalmente los elementos dentro del contenedor
  gap: 10px; // Espacio entre los elementos
  background-color: #efedea; // Color de fondo gris claro
  padding: 10px 20px; // Espaciado interno
  border-radius: 8px; // Bordes redondeados
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Sombra suave para el contenedor
  max-width: 886px; // Ancho máximo del contenedor

  .input-group {
    display: flex; // Flexbox para alinear el ícono y el texto
    align-items: center; // Centra verticalmente el ícono y el texto
    gap: 10px; // Espacio entre el ícono y el texto
    flex: 1; // Permite que el grupo de entrada ocupe el espacio restante
  }

  .icon {
    color: #000000; // Color negro para el ícono de búsqueda
    font-size: 18px; // Tamaño de fuente para el ícono
  }

  .input-text {
    display: flex; // Flexbox para alinear el texto dentro del grupo de entrada
    align-items: center; // Centra verticalmente el texto
  }

  .input-value {
    font-size: 14px; // Tamaño de fuente para el texto de entrada
    color: #000000; // Color negro para el texto
  }

  .buscar-btn {
    background-color: #f0c135; // Color amarillo para el botón (si se usa esta clase en lugar de `bttnAmarillo`)
    color: black; // Color del texto en el botón
    font-weight: bold; // Texto en negrita
    font-size: 14px; // Tamaño de la fuente del botón
  }
}
</style>
