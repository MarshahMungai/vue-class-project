<template>
  <div class="home">
    <h1>Welcome home</h1>
    <h1>Counter App</h1>
   <div class="counter">
    <button v-on:click.prevent="increment">Increment</button>
    <button v-on:click.prevent="decrement">Decrement</button>
   </div>
    <p>Count:{{ count }} </p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default{

  // Options API
  // data(){
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //    increment(){
  //     this.count++
  //   },
  //   decrement(){
  //     this.count--
  //   }
  // }

  // Composition API
  setup(){
    const count = ref(0)

    function increment(){
      count.value++
    }

    function decrement(){
      count.value--
    }

    return {count, increment, decrement}
  }
}
</script>

<style scoped>
  .counter button{
    margin-right: 5px;
    padding: 1em;
    border-radius: 5px;
    background-color: green;
    color: white;
    border: none;
  }
</style>







<!-- Options API -->

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
</style> -->


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
</script>

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
</style> -->
