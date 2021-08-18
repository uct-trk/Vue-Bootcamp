<template>
  <div>
    <div>
      details
    </div>
    <p>
      {{ $route.params.userID }}
    </p>
    <p>{{ $route.query.ugurcan }}</p>
    <button @click="$router.push('/')">Geri dön</button>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
};
</script>

<style></style>
