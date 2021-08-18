<template>
  <div>
    <div class="d-flex justify-content-end">
      <button
        class="btn btn-primary btn-sm"
        @click="$router.push({ name: 'NewPerson' })"
      >
        + Yeni Ekle
      </button>
    </div>
    <div>
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Başlık</th>
            <th scope="col">URL</th>
            <th scope="col">Sil</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bookMark, index) in bookMarksList" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ bookMark.title }}</td>
            <td>{{ bookMark.url }}</td>
            <td>
              <button
                class="btn btn-sm btn-danger"
                @click="deleteItem(bookMark)"
              >
                Sil
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookMarksList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then((bookmarks_response) => {
      console.log(bookmarks_response.data);
      this.bookMarksList = bookmarks_response.data || [];
    });
  },
  methods: {
    deleteItem(bookMark) {
      this.$appAxios.delete(`/bookmarks/${bookMark.id}`).then((delete_res) => {
        console.log(delete_res);
        if (delete_res.status === 200) {
          this.bookMarksList = this.bookMarksList.filter(
            (item) => item.id !== bookMark.id
          );
        }
      });
    },
  },
};
</script>

<style></style>
