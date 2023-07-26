<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-input">
        <input class="input-field" type="email" placeholder="Enter email" v-model="email">
      </div>

      <div class="form-input">
        <input class="input-field" type="password" placeholder="Enter password" v-model="password">
      </div>

      <div class="form-input">
        <button type="submit" class="login-button">Login</button>
      </div>
    </form>
    <h4>Email: {{ email }}</h4>
    <h4>Password: {{ password }}</h4>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import router from '../router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    async function login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: email.value,
          password: password.value,
        });

        // Handle the API response here (You can add success messages if needed)
        console.log(response.data);

        // Store the token in local storage
        const token = response.data.token;
        localStorage.setItem('authToken', token);

        // Redirect to the DashboardView.vue after successful login
        router.push('/dashboard');
      } catch (error) {
        // Handle the API error here
        alert('Login failed. Please check your email and password.');
      }
    }

    return { email, password, login };
  },
};
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-input {
  margin-bottom: 10px;
  margin-right: 10px;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
