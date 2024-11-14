<template>
  <!-- Contenedor principal para la tarjeta con título e imagen -->
  <div class="card-tittle">
    <!-- Sección que muestra el nombre del lugar -->
    <div class="card-tittle__nombre">{{ nombre }}</div>

    <!-- Imagen del lugar, configurable mediante la prop 'imagen' -->
    <img :src="imagen" alt="Imagen del lugar" class="card-tittle__imagen" />
  </div>
</template>

<script>
export default {
  // Nombre del componente
  name: "CardTittle",

  // Definición de propiedades (props) que el componente acepta
  props: {
    // Propiedad 'nombre' para el título del lugar, requerida
    nombre: {
      type: String,
      required: true, // Obligatorio
    },
    // Propiedad 'imagen' para la URL de la imagen del lugar, requerida
    imagen: {
      type: String,
      required: true, // Obligatorio
    },
  },
};
</script>
