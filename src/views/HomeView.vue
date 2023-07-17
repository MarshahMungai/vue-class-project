<!-- Options API -->

<template>
  <div class="home">
    <button @click="incrementCount" class="in-button">
      Increment Count: {{ countIncrement }}
    </button>
    <button @click="decrementCount" class="de-button">
      Decrement Count: {{ countDecrement }}
    </button>
  </div>
</template>

<style scoped>
.home{
  margin-top: 50px;
}
.in-button {
  background-color: #42b983;
  color: white;
  padding: 10px;
  border-radius: 20px;
  margin-right: 50px;
}
.de-button {
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 20px;
}
</style>

<script>
export default {
   data() {
     return {
       countIncrement: 0,
       countDecrement: 0,
     };
   },
  
   methods: {
     incrementCount() {
       this.countIncrement++;
     },
    
     decrementCount() {
       this.countDecrement--;
     }
   }
}
</script> 




<!-- Compositions API -->

<!-- <template>
  <div class="home">
    <button @click="incrementCount" class="in-button">
      Increment Count: {{ countIncrement }}
    </button>
    <button @click="decrementCount" class="de-button">
      Decrement Count: {{ countDecrement }}
    </button>
  </div>
</template>

<style scoped>
.home {
  margin-top: 50px;
}
.in-button {
  background-color: #42b983;
  color: white;
  padding: 10px;
  border-radius: 20px;
  margin-right: 50px;
}
.de-button {
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 20px;
}
</style>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const countIncrement = ref(0);
    const countDecrement = ref(0);

    const incrementCount = () => {
      countIncrement.value++;
    };

    const decrementCount = () => {
      countDecrement.value--;
    };

    return {
      countIncrement,
      countDecrement,
      incrementCount,
      decrementCount,
    };
  },
};
</script> -->
