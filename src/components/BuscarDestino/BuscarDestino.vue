<template>
  <!-- Contenedor principal para el formulario de búsqueda de destino -->
  <div class="buscar-destino">
    <!-- Grupo de entrada para el destino -->
    <div class="input-group">
      <i class="bi bi-search icon"></i>
      <!-- Ícono de búsqueda -->
      <div class="input-text">
        <span class="title">Destino</span>
        <!-- Etiqueta para el campo de destino -->
        <span class="input-value">¿A dónde quieres ir?</span>
        <!-- Valor por defecto para el destino -->
      </div>
    </div>

    <div class="separator"></div>
    <!-- Separador entre los grupos de entrada -->

    <!-- Grupo de entrada para la fecha de llegada -->
    <div class="input-group">
      <div class="input-text">
        <span class="title">Llegada</span>
        <!-- Etiqueta para el campo de llegada -->
        <span class="input-value">--/--/--</span>
        <!-- Valor por defecto para la fecha de llegada -->
      </div>
    </div>

    <div class="separator"></div>
    <!-- Otro separador entre los grupos de entrada -->

    <!-- Grupo de entrada para la fecha de salida -->
    <div class="input-group">
      <div class="input-text">
        <span class="title">Salida</span>
        <!-- Etiqueta para el campo de salida -->
        <span class="input-value">--/--/--</span>
        <!-- Valor por defecto para la fecha de salida -->
      </div>
    </div>

    <!-- Componente de botón para realizar la búsqueda -->
    <bttnAmarillo label="Buscar" />
  </div>
</template>

<script setup>
// Importa el componente de botón amarillo desde su ruta específica
import bttnAmarillo from "src/components/bttnAmarillo/bttnAmarillo.vue";
</script>

<style scoped lang="scss">
@import "src/css/app.scss"; // Importa los estilos globales

.buscar-destino {
  display: flex; // Estilo de flexbox para alinear los elementos en fila
  align-items: center; // Centra verticalmente los elementos
  gap: 10px; // Espacio entre los elementos
  background-color: #efedea; // Fondo gris claro para el contenedor principal
  padding: 10px 20px; // Espacio interno alrededor del contenedor
  border-radius: 8px; // Bordes redondeados
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Sombra suave debajo del contenedor
  max-width: 886px; // Ancho máximo del contenedor

  .input-group {
    display: flex; // Flexbox para alinear ícono y texto en fila
    align-items: flex-start; // Alinea al inicio verticalmente
    gap: 5px; // Espacio entre el ícono y el texto
    flex: 1; // Distribuye el ancho entre los grupos de entrada
  }

  .separator {
    width: 1px; // Ancho del separador
    height: 30px; // Alto del separador
    background-color: #777571; // Color gris oscuro para el separador
    margin: 0 10px; // Margen horizontal alrededor del separador
  }

  .icon {
    color: #000000; // Color negro para el ícono
    font-size: 18px; // Tamaño del ícono
    margin-top: 5px; // Ajuste de margen superior
  }

  .input-text {
    display: flex; // Flexbox para organizar el título y el valor en columna
    flex-direction: column;

    .title {
      font-size: 10px; // Tamaño de la fuente para la etiqueta
      color: #777571; // Color gris para la etiqueta
    }

    .input-value {
      font-size: 14px; // Tamaño de la fuente para el valor de entrada
      color: #000000; // Color negro para el valor de entrada
    }
  }

  .buscar-btn {
    background-color: #f0c135; // Fondo amarillo para el botón (si se usa esta clase en lugar de `bttnAmarillo`)
    color: black; // Texto en color negro
    font-weight: bold; // Texto en negrita
    font-size: 14px; // Tamaño de la fuente del botón
  }
}
</style>
