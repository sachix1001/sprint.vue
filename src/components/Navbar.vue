<template>
  <div class="navbar">
    <button class="switch-button" @click="$emit('all')">Switch View</button>
    <button class="refresh-button" @click="$emit('get-photo')">Refresh</button>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.navbar {
  background-color: #82f5bb;
  height: 2rem;
}
button {
  margin-top: 10px;
}
</style>
