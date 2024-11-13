<template>
  <q-page padding>
    <q-tabs
      class="tab-menu"
      v-model="selectedTab"
      shrink
      align="left"
      active-color="#F06D35"
      indicator-color="#F06D35"
    >
      <q-tab name="north-america" label="América del Norte" class="tab-item" />
      <q-tab name="south-america" label="América del Sur" class="tab-item" />
      <q-tab name="central-america" label="América Central" class="tab-item" />
      <q-tab name="europe" label="Europa" class="tab-item" />
      <q-tab name="asia" label="Asia" class="tab-item" />
      <q-tab name="africa" label="África" class="tab-item" />
      <q-tab name="oceania" label="Oceanía" class="tab-item" />
    </q-tabs>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: "north-america",
    };
  },
};
</script>

<style scoped>
/* Contenedor de la barra de pestañas */
.tab-menu {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 15px auto;
  padding: 0 20px;
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 1px solid #d9d9d9; /* Línea gris debajo de todas las pestañas */
}

/* Estilo para cada pestaña */
.tab-item {
  background: none;
  border: none;
  outline: none;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  padding: 10px 15px;
  position: relative;
  text-transform: capitalize; /* Hace que solo la primera letra de cada palabra sea mayúscula */
}

/* Línea naranja debajo de la pestaña activa */
.q-tabs__indicator {
  height: 3px;
  background-color: #f06d35;
  border-radius: 2px;
  width: 100px; /* Ajusta el ancho del indicador si es necesario */
  margin: 0 auto; /* Centra el indicador debajo de la pestaña activa */
}

.tab-item.q-tab--active {
  color: #f06d35; /* Color para el texto de la pestaña activa */
}

.tab-item:hover {
  color: #f06d35;
}
</style>
