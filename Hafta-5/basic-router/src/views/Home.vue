<template>
  <div>
    <h1>
      Home
    </h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci alias
      deleniti, nesciunt temporibus nobis molestiae quas quibusdam corporis
      fugiat iusto dolor magni ad, libero doloribus animi harum eaque sint
      optio?
    </p>
    <input type="text" @keydown.enter="goToDetails" />
  </div>
</template>

<script>
export default {
  methods: {
    goToDetails(e) {
      e.target.value;
      // this.$router.push(`/detail/${e.target.value}`)
      this.$router.push({
          name: "details",
          params: {
              userID: e.target.value
          },
          query: {
              type: "DetailAuth",
              user: "ugurcan"
          }
      })
    },
  },
};
</script>

<style></style>
