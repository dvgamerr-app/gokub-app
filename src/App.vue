<script async setup lang="ts">
// import { ref } from 'vue'
// import { useRouter } from 'vue-router'
// import { ipcRenderer } from 'electron'
// import { version } from '../package.json'

// const router = useRouter()

// ipcRenderer.invoke('MUBU-TOKEN-GET').then(foundClient => {
//   if (!foundClient) return router.replace('/setup')
// })

// import UIDropdownItem from './components/ui/DropdownItem.vue'

// const resizable = ref('16em')
</script>

<template>
  <header class="title">
    <div class="bar d-flex position-relative align-items-stretch px-2">
      <div class="logo d-flex align-items-center flex-fill" style="column-gap: 0.4em; padding:0 .5em">
        <img src="./assets/icon.png" height="20" width="20" alt="GOKub App" />
        <span class="text">GOKub App</span>
      </div>
    </div>
  </header>
  <main class="container-fluid">
    <section class="hero">
      <RouterView />
    </section>
    <!-- <aside class="pane pane1">

    </aside>
    <section class="resizer" role="presentation" />
    <section class="pane pane2 container-fluid">
      <RouterView />
    </section> -->
  </main>
</template>

<style lang="scss">

#app {
  > .title {
    grid-area: title;
    user-select: none;
    z-index: 99999;

    .bar {
      -webkit-app-region: drag;
      gap: 4px;
      margin: -8px 0 0 -8px;
      width: 100%;
      height: 31px;

      > .logo > .text {
        font-size: 0.75rem;
        font-family: Mulish;
        font-weight: 700;
      }

      > a {
        -webkit-app-region: no-drag !important;
        border: none;

        *,
        ::after,
        ::before {
          animation: none !important;
        }

        &.menu {
          width: 45px;
          cursor: default;

          &:hover {
            background-color: #ffffff1f;
          }
        }
      }
    }
  }
}

body {
  overflow: hidden;
}

main {
  position: relative;

  section {
    &.hero {
      position: relative;

      @keyframes moveUp {
        from {
          transform: rotate(35deg);
        }
        to {
          transform: translateY(10px) translateX(-7px) rotate(35deg);
        }
      }

      &::before {
        animation: moveUp 1s linear;
        animation-iteration-count: infinite;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFxJREFUeNpiYBgFwx8w4pVddD8ASPYDsQJU5AEQFzLEKW4g3UCIYetxyAbiMpQJj/v6yZHDZ6ACOXJM1I4UfAY+IEcOn4GF5MjhNhASi4FornmAL4ZHwUgBAAEGAMpZEc92tasSAAAAAElFTkSuQmCC);
        background-size: .45em;
        content: '';
        height: 4000px;
        opacity: .65;
        position: absolute;
        right: -2800px;
        transform: rotate(35deg);
        top: 0;
        width: 4000px;
      }
    }
  }
}

</style>
