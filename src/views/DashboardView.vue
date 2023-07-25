<template>
    <div class="dashboard">
      <h1>Welcome!</h1>
    </div>
  </template>
  
  <!-- <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      username: String,
      email: String,
      accountType: String,
    },
    setup() {
      // Dummy data for recent activity
      const recentActivity = ref([
        'You added a new item to your cart',
        'You purchased a product',
        'You updated your profile information',
      ]);
  
      return { recentActivity };
    },
  };
  </script> -->
  
  <style scoped>
  .dashboard {
    margin: 30px auto;
    max-width: 800px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .user-info {
    margin-bottom: 20px;
  }
  
  .user-info p {
    margin: 5px 0;
  }
  
  .user-activity {
    margin-top: 30px;
  }
  
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
  }
  
  </style>
  