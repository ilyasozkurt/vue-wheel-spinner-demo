<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
<HelloWorld />
  <main class="container" style="background-image: url(https://play.tailwindcss.com/img/grid.svg); 
  background-color: transparent; margin-top: -40px;" >
    <RouterView />
  </main>
</template>


<style>
.modalx {
  padding: 0px;
  padding-top: 0%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.836);
  z-index: 13;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Default state (hidden) */
  opacity: 0;
  visibility: hidden;
  transform: scale(0.9);

  /* Animation setup */
  animation: showModal 0.1s ease-in-out 1.5s forwards;
  /* 2s delay */
}

@keyframes showModal {
  to {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
}

.bd-radi {
  border-radius: 1rem;
}

.spin-button {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  aspect-ratio: 1 / 1;
  font-size: 20px;
  cursor: pointer;
  background: #eb4d4b;
  border-radius: 50%;
  transition: all 150ms;
  border: 10px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white !important;
  box-shadow: inset -3px -3px 2px 2px rgba(0, 0, 0, 0.19), 3px 3px 2px 2px rgba(0, 0, 0, 0.19);
  z-index: 11;
  position: relative;
  user-select: none;

  &:hover {
    box-shadow: inset -15px -15px 2px 2px rgba(0, 0, 0, 0.19), 3px 3px 2px 2px rgba(0, 0, 0, 0.19);
    scale: 1;
  }

  &:active {
    box-shadow: inset 3px 3px 2px 2px rgba(0, 0, 0, 0.19), 3px 3px 2px 2px rgba(0, 0, 0, 0.19);
  }

  &:disabled {
    background: #1e254c;
    cursor: not-allowed;
    pointer-events: none;
  }

}

.cursor-img {
  width: 50px;
  aspect-ratio: 1 / 1;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.19));
}

@keyframes bounce {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(5deg);
  }

  20% {
    transform: rotate(10deg);
  }

  50% {
    transform: rotate(0deg);
  }

  80% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@keyframes stop {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.bounce {
  animation: bounce 0.3s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  /* Fungsi timing halus */
}

.stop {
  animation: stop 1s forwards;
  /* Animasi berhenti dengan fade out */
}
</style>

