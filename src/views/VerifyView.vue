<template>
  <div class="verify-form">
    <h2>Email Verification</h2>
    <form @submit.prevent="verify">
      <div class="form-input">
        <input class="input-field" type="email" placeholder="Enter email" v-model="email">
      </div>

      <div class="form-input">
        <input class="input-field" type="text" placeholder="Enter verification code" v-model="verificationCode">
      </div>

      <div class="form-input">
        <button type="submit" class="verify-button">Verify</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import router from '../router';

export default {
  setup() {
    const email = ref('');
    const verificationCode = ref('');

    async function verify() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/verify-email', {
          email: email.value,
          token: verificationCode.value, // Change 'verificationCode' to 'token' to match backend
        });

        // Handle the API response here
        console.log(response.data);

        // Show a success message to the user
        alert('Email verification successful!');

        // Redirect the user to LoginView.vue
         router.push({ name: 'login' });

      } catch (error) {
        // Handle the API error here
        alert('Email verification failed. Please check your email and verification code.');
      }
    }

    return { email, verificationCode, verify };
  },
};
</script>
  
<style scoped>
  .verify-form {
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
  
  .verify-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .verify-button:hover {
    background-color: #0056b3;
  }
  </style>
  