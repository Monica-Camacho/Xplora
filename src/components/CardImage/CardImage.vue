<template>
  <q-card class="activity-card">
    <q-img :src="imageUrl" class="activity-image" />

    <q-card-section class="activity-content">
      <div class="activity-info">
        <div class="activity-title">{{ activityName }}</div>
        <div class="activity-details">{{ duration }}</div>
      </div>
      <div v-if="showIcon" class="activity-icon">
        <i class="bi bi-star-fill activity-star"></i>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CardImage",
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    activityName: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.activity-card {
  width: 200px; /* Ajusta el tamaño según sea necesario */
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #efedea;
}

.activity-image {
  height: 150px; /* Ajusta la altura de la imagen */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.activity-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #efedea;
}

.activity-info {
  display: flex;
  flex-direction: column;
}

.activity-title {
  font-size: 12px;
  font-weight: bold;
}

.activity-details {
  font-size: 10px;
  color: #757575;
}

.activity-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.activity-star {
  color: #ffc107; /* Color dorado para la estrella */
  font-size: 20px; /* Tamaño mayor para el icono */
}
</style>
