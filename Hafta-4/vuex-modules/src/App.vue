<template>
  <div>
    <p>
      {{ $store.state.mainName }}
    </p>
    <p>{{ $store.state.contact.contactName }}</p>
    <pre>
      {{musteriADI}}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {},
  created() {
    console.log(this.$store.getters["contact/_contactName"]);
  },
  computed: {
    ...mapGetters({
      musteriADI: "contact/_contactName",
    }),
  },
};
</script>

<style></style>
