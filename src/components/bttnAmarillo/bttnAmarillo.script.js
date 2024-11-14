export default {
  // Define el nombre del componente
  name: "bttnAmarillo",

  // Define las propiedades (props) que este componente acepta
  props: {
    // La propiedad 'label' permite personalizar el texto del botón
    label: {
      type: String, // Especifica que 'label' debe ser un string
      default: "Buscar", // Valor por defecto 'Buscar' si no se proporciona otro valor
    },
  },
};
