<template>
  <div id="app">
    <nav>
      <router-link to="/" v-if="!store.state.isLoggedIn">Home</router-link>
      <router-link to="/about" v-if="!store.state.isLoggedIn">About</router-link>
      <router-link to="/services" v-if="!store.state.isLoggedIn">Services</router-link>
      <router-link to="/signup" v-if="!store.state.isLoggedIn">Signup</router-link>
      <router-link to="/login" v-if="!store.state.isLoggedIn">Login</router-link>
      <router-link to="/dashboard" v-if="store.state.isLoggedIn">Dashboard</router-link>
      <router-link to="/profile" v-if="store.state.isLoggedIn">Profile</router-link>
      <router-link to="/statements" v-if="store.state.isLoggedIn">Statements</router-link>
      <router-link to="/logout" v-if="store.state.isLoggedIn">Logout</router-link>
    </nav>
    {{ store.state.isLoggedIn }}
    <router-view/>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()

store.commit('setIsLoggedIn')
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
