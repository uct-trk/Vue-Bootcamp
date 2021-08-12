<template>
  <div>
    <Modal>
      <template #title>
        <h3>Slot ile gelen title bilgisi</h3>
      </template>
      <template #content>
        <p class="text-green">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis,
          quo tempora deleniti ex ab maxime numquam praesentium recusandae illo
          eligendi magnam sint nobis quia eveniet, ipsam reiciendis dolore.
          Debitis.
        </p>
      </template>
      <template #default>
        <div>
          Default olarak gösterilecek
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { Modal },
};
</script>

<style></style>
