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
      <q-tab name="overview" label="Vista General" class="tab-item" />
      <q-tab name="info-prices" label="Info y precios" class="tab-item" />
      <q-tab name="services" label="Servicios" class="tab-item" />
      <q-tab
        name="important-info"
        label="Información Importante"
        class="tab-item"
      />
      <q-tab name="policies" label="Políticas" class="tab-item" />
      <q-tab
        name="customer-experiences"
        label="Experiencias de los clientes"
        class="tab-item"
        @click="openDrawer"
      />
    </q-tabs>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: "overview", // Tab seleccionada por defecto
    };
  },
  methods: {
    openDrawer() {
      console.log("Drawer de experiencias abierto");
    },
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
}

/* Línea naranja debajo de la pestaña activa */
.q-tabs__indicator {
  height: 3px;
  background-color: #f06d35;
  border-radius: 2px;
  bottom: 0;
}

.tab-item.q-tab--active {
  color: #f06d35; /* Color para el texto de la pestaña activa */
}

.tab-item:hover {
  color: #f06d35;
}
</style>
