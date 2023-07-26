<template>
  <div id="app">
    <nav>
      <router-link to="/" v-if="!isLoggedIn">Home</router-link>
      <router-link to="/about" v-if="!isLoggedIn">About</router-link>
      <router-link to="/services" v-if="!isLoggedIn">Services</router-link>
      <router-link to="/signup" v-if="!isLoggedIn">Signup</router-link>
      <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
      <router-link to="/dashboard" v-if="isLoggedIn">Dashboard</router-link>
      <router-link to="#" v-if="isLoggedIn">Profile</router-link>
      <router-link to="#" v-if="isLoggedIn">Statements</router-link>
      <router-link to="#" v-if="isLoggedIn">Reports</router-link>
      <router-link to="/logout" v-if="isLoggedIn">Logout</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      const authToken = localStorage.getItem('authToken');
      return !!authToken;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 14px 28px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
