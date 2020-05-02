<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/kanban" class="btn btn-link">KanBAN</router-link>
        </section>
        <section class="navbar-center">
          <img src="@/assets/logo.png" class="img-responsive img-logo" alt="">
        </section>
        <section class="navbar-section">
          <a href="http://twitter.com" class="btn btn-link">Twitter</a>
          <a href="http://twitter.com" class="btn btn-link">Github</a>
        </section>
      </header>
      <router-view class="pt-2" />
    </div>
  </div>
</template>
<style scoped>
.img-logo {
  max-width: 100px;
}
</style>