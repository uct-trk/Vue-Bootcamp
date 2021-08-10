<template>
  <div>
    <div class="container">
      <Header />
      <h3>Bu benim ilk Vue CLI Uygulamam</h3>
      <p>Bugün component ve Vue CLI konularını görüyoruz..</p>
    </div>
    <Counter />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Header,
    Counter,
  },
};
</script>

<style></style>
