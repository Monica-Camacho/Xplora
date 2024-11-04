<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      arrows
    >
      <q-carousel-slide :name="1" img-src="/src/assets/images/foto1.jpg" />
      <q-carousel-slide :name="2" img-src="/src/assets/images/foto2.jpg" />
      <q-carousel-slide :name="3" img-src="/src/assets/images/foto3.jpg"/>
      <q-carousel-slide :name="4" img-src="/src/assets/images/foto4.jpg" />
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
</script>



