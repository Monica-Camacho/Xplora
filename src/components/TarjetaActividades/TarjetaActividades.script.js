// components/TarjetaDestino/TarjetaDestino.script.js
import bttnAmarillo from "src/components/bttnAmarillo/bttnAmarillo.vue"; // Importa el componente de botón amarillo

export default {
  name: "TarjetaActividades", // Nombre del componente
  components: {
    bttnAmarillo, // Declara el botón amarillo como un subcomponente de TarjetaDestino
  },
  props: {
    lugar: {
      type: String, // Propiedad tipo String para el lugar
      required: true, // Es requerida
    },
    titulo: {
      type: String, // Propiedad tipo String para el título
      required: true, // Es requerida
    },
    descripcion: {
      type: String, // Propiedad tipo String para la descripción
      required: true, // Es requerida
    },
    imagen: {
      type: String, // Propiedad tipo String para la imagen
      required: true, // Es requerida
    },
  },
};
