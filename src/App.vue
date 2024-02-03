<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Find events in and around...</h1>
      <nav>
        <RouterLink to="/EventFinder/">Stuttgart</RouterLink>
        <RouterLink to="/EventFinder/offenburg">Offenburg</RouterLink>
        <RouterLink to="/EventFinder/berlin">Berlin</RouterLink>
      </nav>
    </div>
  </header>
  <hr />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
h1 {
  color: white;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: white;
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  min-width: 100px;
  padding: .75rem 1.25rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  nav {
    text-align: center;
    font-size: 1rem;

    padding: 1rem 0 0 0;
    margin-top: 1rem;
  }
}
</style>
