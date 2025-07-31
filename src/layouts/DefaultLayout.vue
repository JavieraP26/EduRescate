<template>
  <div class="layout">
    <Sidebar />
    <div class="main-content">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
</script>

<style>
.layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f7f6;  /* Color de fondo claro */
}
</style>
