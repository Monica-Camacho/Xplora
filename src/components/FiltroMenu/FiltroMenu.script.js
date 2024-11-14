export default {
  // Nombre del componente
  name: "FiltroMenu",

  // Definición de propiedades (props) que el componente acepta
  props: {
    // Título del menú de filtro, con valor por defecto 'Filtrar por:'
    title: {
      type: String,
      default: "Filtrar por:", // Valor por defecto
    },
    // Array de secciones que contiene las opciones de filtro, requerido
    sections: {
      type: Array,
      required: true, // Obligatorio
    },
  },

  // Definición de datos locales del componente
  data() {
    const selectedFilters = {}; // Objeto para almacenar el estado de selección de cada filtro

    // Inicializa cada opción de filtro en `false` para indicar que no están seleccionadas al inicio
    this.sections.forEach((section) => {
      section.options.forEach((option) => {
        selectedFilters[option] = false; // Marca cada opción como no seleccionada
      });
    });

    return {
      selectedFilters, // Devuelve el objeto con todas las opciones de filtro inicializadas
    };
  },
};
