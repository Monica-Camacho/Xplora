import { ref } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    // Define el estado del tab activo
    const activeTab = ref('Destinos'); // Nombre del tab activo inicialmente

    // Lista de tabs con íconos y rutas
    const linksList = [
      { title: 'Destinos', icon: 'bi bi-compass', link: '/' },
      { title: 'Hospedaje', icon: 'bi bi-house-door', link: '/pruebas' },
      { title: 'Transporte', icon: 'bi bi-airplane', link: '/' },
      { title: 'Turismo', icon: 'bi bi-map', link: '/pruebas' },
      { title: 'Experiencias', icon: 'bi bi-journals', link: '/' },
      { title: 'Inicio de sesión', icon: 'bi bi-person', link: '/pruebas' }
    ];

    // Función para manejar el clic en un tab
    const setActiveTab = (tabTitle) => {
      activeTab.value = tabTitle;
    };

    return { linksList, activeTab, setActiveTab };
  }
};




