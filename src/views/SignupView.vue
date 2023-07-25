<template>
  <div class="signup-form">
    <h2>Signup</h2>
    <form action="">
      <div class="form-input">
        <input class="input-field" type="text" placeholder="Enter username" v-model="username">
      </div>

      <div class="form-input">
        <input class="input-field" type="email" placeholder="Enter email" v-model="email">
      </div>

      <div class="form-input">
        <input class="input-field" type="password" placeholder="Enter password" v-model="password">
      </div>

      <div class="form-input">
        <button @click.prevent="signup" class="signup-button">Signup</button>
      </div>
    </form>
    <h4>Username: {{ username }}</h4>
    <h4>Email: {{ email }}</h4>
    <h4>Password: {{ password }}</h4>

    <!-- Router link to VerifyView.vue -->
    <router-link to="/verify" class="verify-link">Verify Email</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');

    async function signup() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/signup', {
          username: username.value,
          email: email.value,
          password: password.value,
        });

        // Handle the API response here (You can add success messages if needed)
        console.log(response.data);

        // Show the email verification code to the user
        alert('Your email verification code is: ' + response.data.message);
      } catch (error) {
        // Handle the API error here
        alert('Signup failed. Please try again later.');
      }
    }

    return { username, email, password, signup };
  },
};
</script>

<style scoped>
.signup-form {
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

.signup-button {
  width: 45%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #0056b3;
}

.verify-link {
  display: block;
  margin-top: 10px;
  text-align: right;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}
</style>
