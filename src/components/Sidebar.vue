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
  
 <style src="../styles/Sidebar.css"></style>
  