<template>
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
            <div class="payment-option">
              <div class="checkbox-icon-container">
                <input type="checkbox" class="checkbox" />
                <i class="bi bi-credit-card-2-front icon"></i>
              </div>
              <p class="payment-text">Nueva Tarjeta</p>
            </div>

            <div class="payment-option">
              <div class="checkbox-icon-container">
                <input type="checkbox" class="checkbox" />
                <i class="bi bi-cash-coin icon"></i>
              </div>
              <p class="payment-text">Pago en efectivo</p>
            </div>
          </div>
        </div>

        <!-- Columna derecha centrada -->
        <div class="columna-derecha">
          <!-- Contenedor de Detalles del Pago -->
          <div class="detalle-pago-contenedor">
            <h2 class="detalle-title">Detalles del pago</h2>
            <div class="detalle">
              <span>Pasajero: 1 adulto</span>
              <span>MXN $5900</span>
            </div>
            <div class="detalle">
              <span>Vuelo</span>
              <span>MXN $3900</span>
            </div>
            <div class="detalle">
              <span>Impuestos y cargos</span>
              <span>MXN $2900</span>
            </div>
            <div class="total">
              <span>Total de pago</span>
              <span>MXN $12700</span>
            </div>
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
import { ref, watch } from "vue";
import bttnAmarillo from "src/components/bttnAmarillo/bttnAmarillo.vue";

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const internalValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    internalValue.value = newVal;
  }
);

watch(internalValue, (newVal) => {
  emit("update:modelValue", newVal);
});

function closeModal() {
  internalValue.value = false;
}
</script>

<style scoped lang="scss">
.modal-pago {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .modal-title,
  .detalle-title {
    font-size: 16px;
    color: #ff5a00;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .modal-content {
    display: flex;
    gap: 20px;
    width: 100%;

    .columna-izquierda {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .subtitle {
        font-size: 14px;
        margin-top: -15px;
      }
    }

    .columna-derecha {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;

      .detalle-pago-contenedor {
        background-color: #f5f5f5;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .detalle,
        .total {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin: 3px 0;
        }

        .total {
          font-weight: bold;
        }
      }

      .pay-button {
        margin-top: 20px;
        width: 100%;
      }
    }
  }

  .payment-options {
    display: flex;
    gap: 25px;

    .payment-option {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #efedea;
      padding: 10px;
      border-radius: 8px;
      width: 120px;
      height: 100px;

      .checkbox-icon-container {
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .checkbox {
        transform: scale(1.2);
        accent-color: #000;
      }

      .icon {
        font-size: 40px;
        color: #000;
      }

      .payment-text {
        margin-top: 5px;
        font-size: 10px;
        text-align: center;
        color: #000;
      }
    }
  }

  .terms {
    font-size: 12px;
    text-align: center;
    color: #000;
    margin-top: 40px;
  }
}
</style>
