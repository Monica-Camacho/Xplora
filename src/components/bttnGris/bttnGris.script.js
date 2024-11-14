export default {
  // Define el nombre del componente
  name: "bttnGris",

  // Define las propiedades (props) que este componente acepta
  props: {
    // La propiedad 'label' permite personalizar el texto del botón
    label: {
      type: String, // Especifica que 'label' debe ser de tipo string
      default: "Precio", // Valor por defecto "Precio" si no se proporciona otro valor
    },
  },
};
