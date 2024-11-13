import { ref } from "vue";

export default {
  name: "NavBar",
  setup() {
    // Define el estado del tab activo
    const activeTab = ref("Destinos"); // Nombre del tab activo inicialmente

    // Lista de tabs con íconos y rutas
    const linksList = [
      { title: "Destinos", icon: "bi bi-compass", link: "/destinos" },
      {
        title: "Hospedaje",
        icon: "bi bi-house-door",
        link: "/detalledestinos",
      },
      { title: "Transporte", icon: "bi bi-airplane", link: "/explorador" },
      { title: "Turismo", icon: "bi bi-map", link: "/turismo" },
      { title: "Experiencias", icon: "bi bi-journals", link: "/" },
      {
        title: "Inicio de sesión",
        icon: "bi bi-person",
        link: "/mantenimiento",
      },
    ];

    // Función para manejar el clic en un tab
    const setActiveTab = (tabTitle) => {
      activeTab.value = tabTitle;
    };

    return { linksList, activeTab, setActiveTab };
  },
};
