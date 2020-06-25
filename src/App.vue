<template>
  <div id="app">
    <b-navbar toggleable="lg" small id="nav">
      <b-navbar-brand to="/">Home</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/issues/open">Open issues</b-nav-item>
          <b-nav-item to="/issues/done">Done issues</b-nav-item>
          <b-nav-item to="/issues/trashed">Trashed issues</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container class="main-container">
      <router-view/>
    </b-container>
    <footer>

    </footer>
  </div>
</template>

<style>
  footer {
    background-color: #1a535c;
    padding: 15px;
    min-height: 5%;
  }

  #app {
    font-family: 'Open Sans', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    background-color: #1a535c;
  }

  #nav a {
    font-weight: bold;
    color: #f7fff7;
  }

  #nav a.router-link-exact-active {
    color: #4ecdc4;
  }

  .main-container {
    max-width: 764px;
    min-height: 85vh;
  }
</style>
