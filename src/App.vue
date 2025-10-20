<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">
        <header>
          <h2>Proyecto Vue CLI</h2>
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
              <div class="navbar-nav">
                <router-link to="/formulario" class="nav-link">Formulario</router-link>
                <router-link to="/http" class="nav-link">Usuarios API</router-link>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div class="card-body">
        <main>
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
.card-header {
  background-color: green;
  color: white;
}
</style>
