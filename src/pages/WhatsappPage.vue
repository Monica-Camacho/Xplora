<template>
  <div class="WAL position-relative bg-grey-4" :style="style">
    <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
      <q-header elevated>
        <q-toolbar class="bg-grey-3 text-black">
          <!-- Botón para abrir el menú lateral con Bootstrap Icon -->
          <q-btn round flat class="WAL__drawer-open q-mr-sm" @click="toggleLeftDrawer" aria-label="Open menu">
            <i class="bi bi-arrow-left"></i> <!-- Icono de Bootstrap -->
          </q-btn>

          <q-btn round flat aria-label="Conversation Avatar">
            <q-avatar>
              <img :src="currentConversation.avatar" alt="Avatar">
            </q-avatar>
          </q-btn>

          <span class="q-subtitle-1 q-pl-md">
            {{ currentConversation.person }}
          </span>

          <q-space />

          <!-- Icono de búsqueda de Bootstrap -->
          <q-btn round flat aria-label="Search">
            <i class="bi bi-search"></i>
          </q-btn>

          <!-- Icono de adjunto de Bootstrap -->
          <q-btn round flat aria-label="Attachments">
            <i class="bi bi-paperclip rotate-135"></i>
          </q-btn>

          <!-- Icono de más opciones de Bootstrap -->
          <q-btn round flat aria-label="More options">
            <i class="bi bi-three-dots-vertical"></i>
            <q-menu auto-close :offset="[110, 0]">
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>Contact data</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Block</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Select messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Silence</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Clear messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Erase messages</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above bordered :breakpoint="690" aria-label="Navigation menu">
        <q-toolbar class="bg-grey-3">
          <q-avatar class="cursor-pointer">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" alt="Logo">
          </q-avatar>

          <q-space />

          <!-- Icono de mensaje de Bootstrap -->
          <q-btn round flat aria-label="Messages">
            <i class="bi bi-chat-dots"></i>
          </q-btn>

          <!-- Icono de más opciones de Bootstrap -->
          <q-btn round flat aria-label="More options">
            <i class="bi bi-three-dots-vertical"></i>
            <q-menu auto-close :offset="[110, 8]">
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>New group</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Profile</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Archived</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Favorites</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <!-- Icono de cerrar de Bootstrap -->
          <q-btn round flat class="WAL__drawer-close" @click="toggleLeftDrawer" aria-label="Close menu">
            <i class="bi bi-x"></i>
          </q-btn>
        </q-toolbar>

        <q-toolbar class="bg-grey-2">
          <q-input rounded outlined dense class="WAL__field full-width" bg-color="white" v-model="search" placeholder="Search or start a new conversation">
            <template v-slot:prepend>
              <i class="bi bi-search"></i> <!-- Icono de búsqueda dentro del input -->
            </template>
          </q-input>
        </q-toolbar>

        <q-scroll-area style="height: calc(100% - 100px)">
          <q-list>
            <q-item
              v-for="(conversation, index) in conversations"
              :key="conversation.id"
              clickable
              v-ripple
              @click="setCurrentConversation(index)"
              aria-label="Conversation with {{ conversation.person }}"
            >
              <q-item-section avatar>
                <q-avatar>
                  <img :src="conversation.avatar" alt="Avatar for {{ conversation.person }}">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">{{ conversation.person }}</q-item-label>
                <q-item-label class="conversation__summary" caption>
                  <i class="bi bi-check-lg" v-if="conversation.sent"></i> <!-- Icono de check de Bootstrap -->
                  <i class="bi bi-x-circle" v-if="conversation.deleted"></i> <!-- Icono de mensaje eliminado -->
                  {{ conversation.caption }}
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption>{{ conversation.time }}</q-item-label>
                <i class="bi bi-chevron-down"></i> <!-- Icono de dropdown -->
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>

      <q-footer>
        <q-toolbar class="bg-grey-3 text-black row">
          <!-- Icono de emojis de Bootstrap -->
          <q-btn round flat aria-label="Emojis">
            <i class="bi bi-emoji-smile"></i>
          </q-btn>
          <q-input rounded outlined dense class="WAL__field col-grow q-mr-sm" bg-color="white" v-model="message" placeholder="Type a message" />
          
          <!-- Icono de mensaje de voz de Bootstrap -->
          <q-btn round flat aria-label="Voice message">
            <i class="bi bi-mic"></i>
          </q-btn>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref, computed } from 'vue'

const conversations = [
  {
    id: 1,
    person: 'Gallito de Pelea',
    avatar: '/src/assets/images/foto2.jpg',
    caption: 'TE AMO MUSHOOOO',
    time: '15:00',
    sent: false
  },
  {
    id: 2,
    person: 'Mike',
    avatar: '/src/assets/images/pet1.jpg',
    caption: 'A mimir',
    time: '16:00',
    sent: true
  },
  {
    id: 3,
    person: 'Misha',
    avatar: '/src/assets/images/pet2.jpg',
    caption: 'Dame camaroooon!!!',
    time: '18:00',
    sent: true
  },
  {
    id: 4,
    person: 'Rudy',
    avatar: '/src/assets/images/pet3.jpg',
    caption: 'Pachanga el 22 de oct',
    time: '17:00',
    sent: true
  }
]

export default {
  name: 'WhatsappLayout',

  setup () {
    const $q = useQuasar()

    const leftDrawerOpen = ref(false)
    const search = ref('')
    const message = ref('')
    const currentConversationIndex = ref(0)

    const currentConversation = computed(() => {
      return conversations[currentConversationIndex.value]
    })

    const style = computed(() => ({
      height: $q.screen.height + 'px'
    }))

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    function setCurrentConversation (index) {
      currentConversationIndex.value = index
    }

    return {
      leftDrawerOpen,
      search,
      message,
      currentConversationIndex,
      conversations,
      currentConversation,
      setCurrentConversation,
      style,
      toggleLeftDrawer
    }
  }
}
</script>

<style lang="sass">
.WAL
  width: 100%
  height: 100%
  padding-top: 20px
  padding-bottom: 20px

  &:before
    content: ''
    height: 127px
    position: fixed
    top: 0
    width: 100%
    background-color: #009688

  &__layout
    margin: 0 auto
    z-index: 4000
    height: 100%
    width: 90%
    max-width: 950px
    border-radius: 5px

  &__field.q-field--outlined .q-field__control:before
    border: none

  .q-drawer--standard
    .WAL__drawer-close
      display: none

@media (max-width: 850px)
  .WAL
    padding: 0
    &__layout
      width: 100%
      border-radius: 0

@media (min-width: 691px)
  .WAL
    &__drawer-open
      display: none

.conversation__summary
  margin-top: 4px

.conversation__more
  margin-top: 0!important
  font-size: 1.4rem
</style>


