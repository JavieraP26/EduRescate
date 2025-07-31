  <template>
    <aside class="sidebar">
      <div class="logo">EduRescate</div>
      <nav class="menu">
        <RouterLink to="/" class="menu-item">Dashboard</RouterLink>
        <RouterLink to="/planificacion" class="menu-item">Planificación</RouterLink>
        <RouterLink to="/bitacora" class="menu-item">Bitácora</RouterLink>
        <RouterLink to="/banco" class="menu-item">Banco de Recursos</RouterLink>
        <RouterLink to="/ia" class="menu-item">IA Asistente</RouterLink>
      </nav>
    </aside>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>
  
  <style scoped>
  .sidebar {
    width: 240px;
    height: 100vh;
    background-color: #E7F0ED;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
    color: #2B7064;
  }
  .menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .menu-item {
    text-decoration: none;
    color: #2B7064;
    font-weight: 500;
  }
  .menu-item:hover {
    text-decoration: underline;
  }
  </style>
  