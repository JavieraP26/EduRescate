<template>
    <div class="dashboard-layout">
      <div class="main-content">
        <div class="cards-grid">
          <CardResumen title="Clases Planificadas" value="3" />
          <CardResumen title="Reflexiones Pendientes" value="2" />
          <CardResumen title="Recursos Nuevos" value="5" />
          <CardResumen title="Tareas Pendientes" value="4" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Sidebar from '../components/Sidebar.vue'
  import Header from '../components/Header.vue'
  import CardResumen from '../components/CardResumen.vue'
  </script>
  
  <style scoped>
  .dashboard-layout {
    display: flex;
  }
  
  .main-content {
    flex: 1;
    background-color: #f9f9f9;
    padding: 20px;
  }
  
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 20px;
  }
  </style>
  