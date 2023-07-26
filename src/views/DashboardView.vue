<template>
  <div class="dashboard">
    <h2>Welcome to your dashboard</h2>

    <!-- <h2>Welcome, {{ user.username }}</h2>
    <p>Email: {{ user.email }}</p>
    <p>Role: {{ user.role }}</p> -->
  </div>
</template>

<script>
// import { ref, onMounted } from 'vue';
// import axios from 'axios';

// export default {
//   setup() {
//     const user = ref(null);

//     // Fetch user data from the backend on component mount
//     onMounted(async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/user'); 
//         user.value = response.data.user;
//       } catch (error) {
//         console.error('Failed to fetch user data:', error);
//       }
//     });

//     return { user };
//   },
// };
</script>

<style>
.dashboard {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>