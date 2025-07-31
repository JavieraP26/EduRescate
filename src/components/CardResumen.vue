<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <p>{{ value }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    value: String
  })
  </script>
  
  <style scoped>
  .card {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    text-align: center;
  }
  h3 {
    margin-bottom: 10px;
    color: #2B7064;
  }
  p {
    font-size: 24px;
    font-weight: bold;
    color: #2B7064;
  }
  </style>
  