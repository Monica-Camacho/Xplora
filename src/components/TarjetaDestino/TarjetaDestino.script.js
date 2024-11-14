// components/TarjetaDestino/TarjetaDestino.script.js
import bttnAmarillo from "src/components/bttnAmarillo/bttnAmarillo.vue"; // Importa el componente de botón amarillo

export default {
  name: "TarjetaDestino", // Nombre del componente definido como "TarjetaDestino"
  components: {
    bttnAmarillo, // Registra el componente bttnAmarillo para ser utilizado dentro de TarjetaDestino
  },
  props: {
    lugar: {
      type: String, // Define la propiedad 'lugar' como tipo String
      required: true, // Hace que la propiedad 'lugar' sea obligatoria
    },
    titulo: {
      type: String, // Define la propiedad 'titulo' como tipo String
      required: true, // Hace que la propiedad 'titulo' sea obligatoria
    },
    descripcion: {
      type: String, // Define la propiedad 'descripcion' como tipo String
      required: true, // Hace que la propiedad 'descripcion' sea obligatoria
    },
    imagen: {
      type: String, // Define la propiedad 'imagen' como tipo String
      required: true, // Hace que la propiedad 'imagen' sea obligatoria
    },
  },
};
