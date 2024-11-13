<template>
  <div class="card-tittle">
    <div class="card-tittle__nombre">{{ nombre }}</div>
    <img :src="imagen" alt="Imagen del lugar" class="card-tittle__imagen" />
  </div>
</template>

<script>
export default {
  name: "CardTittle",
  props: {
    nombre: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: true,
    },
  },
};
</script>
