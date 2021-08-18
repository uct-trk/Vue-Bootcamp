<template>
  <div class="form-area card p-3">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Başlık</label>
      <input
        v-model="userData.title"
        type="text"
        class="form-control"
        id="title"
        placeholder="Başlık Giriniz"
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input
        type="text"
        v-model="userData.url"
        class="form-control"
        id="url"
        placeholder="https://..."
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Açıklama</label>
      <textarea
        v-model="userData.description"
        type="text"
        class="form-control"
        id="description"
        rows="3"
        placeholder="Birşeyler Yazınız.."
      />
    </div>
    <div class="d-flex justify-content-end">
      <button
        class="btn btn-md btn-danger me-3"
        @click="$router.push({ name: 'Home' })"
      >
        İptal
      </button>
      <button class="btn btn-md btn-primary" @click="onSave">Kaydet</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      this.$appAxios.post("/bookmarks", this.userData).then((save_response) => {
        console.log(save_response);
      });
      this.resetData();
      this.$router.push("/");
    },
    resetData() {
      Object.keys(this.userData).forEach((key) => (this.userData[key] = null));
    },
  },
};
</script>

<style></style>
