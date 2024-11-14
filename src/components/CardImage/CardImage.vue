<template>
  <!-- Componente de tarjeta para mostrar una actividad -->
  <q-card class="activity-card">
    <!-- Imagen de la actividad, fuente configurable mediante prop -->
    <q-img :src="imageUrl" class="activity-image" />

    <!-- Sección de contenido para mostrar información de la actividad -->
    <q-card-section class="activity-content">
      <!-- Contenedor para el nombre y duración de la actividad -->
      <div class="activity-info">
        <div class="activity-title">{{ activityName }}</div>
        <!-- Nombre de la actividad -->
        <div class="activity-details">{{ duration }}</div>
        <!-- Duración de la actividad -->
      </div>

      <!-- Ícono de estrella, se muestra solo si `showIcon` es true -->
      <div v-if="showIcon" class="activity-icon">
        <i class="bi bi-star-fill activity-star"></i>
        <!-- Ícono de estrella lleno -->
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
// Configuración del componente y sus propiedades
export default {
  name: "CardImage", // Nombre del componente
  props: {
    // URL de la imagen de la actividad
    imageUrl: {
      type: String,
      required: true, // Obligatoria
    },
    // Nombre de la actividad
    activityName: {
      type: String,
      required: true, // Obligatoria
    },
    // Duración de la actividad
    duration: {
      type: String,
      required: true, // Obligatoria
    },
    // Controla la visibilidad del ícono de estrella
    showIcon: {
      type: Boolean,
      default: true, // Por defecto, muestra el ícono
    },
  },
};
</script>

<style scoped>
/* Estilos para la tarjeta de actividad */
.activity-card {
  width: 200px; /* Ancho de la tarjeta */
  border-radius: 20px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para la tarjeta */
  background-color: #efedea; /* Fondo gris claro */
}

/* Estilos para la imagen de la actividad */
.activity-image {
  height: 150px; /* Altura de la imagen */
  border-top-left-radius: 20px; /* Bordes redondeados en la parte superior */
  border-top-right-radius: 20px;
}

/* Estilos para la sección de contenido de la tarjeta */
.activity-content {
  display: flex; /* Alineación en fila */
  justify-content: space-between; /* Espacio entre título y ícono */
  align-items: center; /* Centrado vertical */
  padding: 8px; /* Espaciado interno */
  background-color: #efedea; /* Fondo gris claro */
}

/* Contenedor de información de la actividad */
.activity-info {
  display: flex;
  flex-direction: column; /* Alinea el título y los detalles en columna */
}

/* Estilos para el título de la actividad */
.activity-title {
  font-size: 12px; /* Tamaño de fuente del título */
  font-weight: bold; /* Negrita */
}

/* Estilos para los detalles de la actividad */
.activity-details {
  font-size: 10px; /* Tamaño de fuente para los detalles */
  color: #757575; /* Color gris claro */
}

/* Contenedor para el ícono de la actividad */
.activity-icon {
  display: flex;
  align-items: center;
  justify-content: center; /* Centra el ícono */
}

/* Estilos para el ícono de estrella */
.activity-star {
  color: #ffc107; /* Color dorado para la estrella */
  font-size: 20px; /* Tamaño del ícono */
}
</style>
