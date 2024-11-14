<template>
  <!-- Modal de revisión y pago -->
  <q-dialog v-model="internalValue">
    <div class="modal-pago">
      <h2 class="modal-title">Revisión y Pago</h2>

      <!-- Contenedor principal en dos columnas -->
      <div class="modal-content">
        <!-- Columna izquierda -->
        <div class="columna-izquierda">
          <h3 class="subtitle">¿Cómo quieres pagar?</h3>

          <!-- Opciones de pago -->
          <div class="payment-options">
            <!-- Opción de pago con tarjeta -->
            <div class="payment-option">
              <div class="checkbox-icon-container">
                <input type="checkbox" class="checkbox" />
                <!-- Checkbox para seleccionar tarjeta -->
                <i class="bi bi-credit-card-2-front icon"></i>
                <!-- Icono de tarjeta de crédito -->
              </div>
              <p class="payment-text">Nueva Tarjeta</p>
              <!-- Texto descriptivo de la opción -->
            </div>

            <!-- Opción de pago en efectivo -->
            <div class="payment-option">
              <div class="checkbox-icon-container">
                <input type="checkbox" class="checkbox" />
                <!-- Checkbox para seleccionar efectivo -->
                <i class="bi bi-cash-coin icon"></i>
                <!-- Icono de pago en efectivo -->
              </div>
              <p class="payment-text">Pago en efectivo</p>
              <!-- Texto descriptivo de la opción -->
            </div>
          </div>

          <!-- Espaciadores adicionales debajo de las opciones de pago -->
          <div class="extra-space"></div>
          <div class="extra-space"></div>
          <div class="extra-space"></div>
          <div class="extra-space"></div>

          <!-- Sección para seleccionar el punto de pago, debajo de las opciones -->
          <div class="select-payment-point">
            <h3 class="subtitle">Selecciona el punto de pago</h3>
            <!-- Botón gris (bttnGris) para seleccionar el punto de pago -->
            <bttnGris label="Seleccionar" class="select-button" />
          </div>
        </div>

        <!-- Columna derecha centrada -->
        <div class="columna-derecha">
          <!-- Contenedor de Detalles del Pago -->
          <div class="detalle-pago-contenedor">
            <h2 class="detalle-title">Detalles del pago</h2>
            <!-- Detalles del pasajero -->
            <div class="detalle">
              <span>Pasajero: 1 adulto</span>
              <span>MXN $5900</span>
            </div>
            <!-- Detalles del vuelo -->
            <div class="detalle">
              <span>Vuelo</span>
              <span>MXN $3900</span>
            </div>
            <!-- Detalles de impuestos y cargos -->
            <div class="detalle">
              <span>Impuestos y cargos</span>
              <span>MXN $2900</span>
            </div>
            <!-- Total del pago -->
            <div class="total">
              <span>Total de pago</span>
              <span>MXN $12700</span>
            </div>
            <!-- Espaciadores adicionales debajo de los detalles del pago -->
            <div class="extra-space"></div>
            <div class="extra-space"></div>
            <div class="extra-space"></div>
            <div class="extra-space"></div>
          </div>

          <!-- Botón de Pagar alineado debajo del contenedor de detalles -->
          <bttnAmarillo label="Pagar" class="pay-button" />
        </div>
      </div>

      <!-- Términos y condiciones -->
      <p class="terms">
        Al hacer clic en "Pagar", aceptas los términos y condiciones de
        Xplora.com, y su política de privacidad.
      </p>
    </div>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from "vue"; // Importa funciones de reactividad y observación de Vue
import bttnAmarillo from "src/components/bttnAmarillo/bttnAmarillo.vue"; // Componente de botón amarillo
import bttnGris from "src/components/bttnGris/bttnGris.vue"; // Componente de botón gris

// Definición de propiedades del componente
const props = defineProps({
  modelValue: Boolean, // Propiedad para controlar la visibilidad del modal
});
const emit = defineEmits(["update:modelValue"]); // Define un evento de actualización para comunicar cambios al padre

// Valor interno de la visibilidad del modal
const internalValue = ref(props.modelValue);

// Observa los cambios en modelValue y actualiza internalValue
watch(
  () => props.modelValue,
  (newVal) => {
    internalValue.value = newVal;
  }
);

// Observa cambios en internalValue y emite el nuevo valor al padre
watch(internalValue, (newVal) => {
  emit("update:modelValue", newVal);
});

// Función para cerrar el modal
function closeModal() {
  internalValue.value = false; // Cambia el valor interno para ocultar el modal
}
</script>

<style scoped lang="scss">
.modal-pago {
  background-color: #ffffff; // Fondo blanco del modal
  padding: 20px; // Espaciado interno del modal
  border-radius: 10px; // Bordes redondeados del modal
  max-width: 700px; // Ancho máximo del modal
  display: flex; // Configura flexbox para organizar el contenido
  flex-direction: column; // Disposición en columna
  align-items: center; // Centra los elementos horizontalmente

  .modal-title,
  .detalle-title {
    font-size: 16px; // Tamaño de fuente para el título
    color: #ff5a00; // Color del texto del título
    font-weight: bold; // Texto en negrita
    margin-bottom: 8px; // Espacio inferior para el título
  }

  .modal-content {
    display: flex; // Flexbox para organizar columnas
    gap: 20px; // Espacio entre columnas
    width: 100%; // Ancho completo

    .columna-izquierda {
      flex: 1; // Ocupa la mitad del ancho disponible
      display: flex; // Flexbox para disposición en columna
      flex-direction: column; // Disposición en columna
      gap: 10px; // Espacio entre elementos

      .subtitle {
        font-size: 14px; // Tamaño de fuente del subtítulo
        margin-top: -15px; // Ajuste de margen superior
      }
    }

    .columna-derecha {
      flex: 1; // Ocupa la otra mitad del ancho disponible
      display: flex; // Flexbox para disposición en columna
      flex-direction: column; // Disposición en columna
      justify-content: center; // Centrado vertical de elementos
      gap: 10px; // Espacio entre elementos

      .detalle-pago-contenedor {
        background-color: #f5f5f5; // Fondo gris claro para detalles del pago
        padding: 10px; // Espaciado interno
        border-radius: 8px; // Bordes redondeados
        display: flex; // Flexbox para disposición en columna
        flex-direction: column; // Disposición en columna
        gap: 10px; // Espacio entre detalles

        .detalle,
        .total {
          display: flex; // Flexbox para alinear texto y precio
          justify-content: space-between; // Justifica espacio entre elementos
          font-size: 12px; // Tamaño de fuente
          margin: 3px 0; // Margen vertical entre elementos
        }

        .total {
          font-weight: bold; // Texto en negrita para el total
        }
      }

      .pay-button {
        margin-top: 20px; // Espacio superior para separación
        width: 100%; // Ancho completo para el botón
      }
    }
  }

  .payment-options {
    display: flex; // Flexbox para alinear opciones de pago
    gap: 25px; // Espacio entre opciones

    .payment-option {
      display: flex; // Flexbox para disposición en columna
      flex-direction: column; // Disposición en columna
      align-items: center; // Centra elementos horizontalmente
      background-color: #efedea; // Fondo gris claro para opciones
      padding: 10px; // Espaciado interno
      border-radius: 8px; // Bordes redondeados
      width: 120px; // Ancho fijo para opciones de pago
      height: 100px; // Altura fija para opciones de pago

      .checkbox-icon-container {
        display: flex; // Flexbox para alinear checkbox e ícono
        align-items: center; // Centra verticalmente
        gap: 15px; // Espacio entre checkbox e ícono
      }

      .checkbox {
        transform: scale(1.2); // Escala el checkbox para mayor tamaño
        accent-color: #000; // Color del checkbox
      }

      .icon {
        font-size: 40px; // Tamaño del ícono
        color: #000; // Color del ícono
      }

      .payment-text {
        margin-top: 5px; // Espacio superior
        font-size: 10px; // Tamaño de fuente para el texto
        text-align: center; // Centra el texto
        color: #000; // Color del texto
      }
    }
  }

  .terms {
    font-size: 12px; // Tamaño de fuente para los términos
    text-align: center; // Centra el texto
    color: #000; // Color del texto
    margin-top: 40px; // Margen superior para separación
  }
}
</style>
