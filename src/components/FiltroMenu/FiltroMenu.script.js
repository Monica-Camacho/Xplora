export default {
  name: 'FiltroMenu',
  props: {
    title: {
      type: String,
      default: 'Filtrar por:'
    },
    sections: {
      type: Array,
      required: true
    }
  },
  data() {
    const selectedFilters = {};

    // Inicializamos cada opción en false
    this.sections.forEach(section => {
      section.options.forEach(option => {
        selectedFilters[option] = false;
      });
    });

    return {
      selectedFilters
    };
  }
};

