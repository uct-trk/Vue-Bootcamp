<template>
  <div class="container">
    <h3>Alınacaklar Listesi</h3>
    <div class="my-2">
      <input
        type="text"
        placeholder="Alınacaklar Listesi"
        @keydown.enter="onSave"
      />
    </div>
    <ul v-if="itemList.length > 0">
      <li
        v-for="item in itemList"
        :key="item.id"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ item.title }}</span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <div class="bg-blue text-white" v-else>Yapılacak birşey yoktur</div>
    <small class="text-blue d-flex justify-content-end align-items-center mt-2"
      >{{ itemCount }} adet yapılacak şey vardır</small
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      itemList: [],
    };
  },
  components: {},
  mounted() {
    axios
      .get("http://localhost:3000/items")
      .then((items_response) => {
        console.log(items_response);
        this.itemList = items_response.data || [];
        console.log("ıtemList" + this.itemList);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    onSave(event) {
      const saveObject = {
        title: event.target.value,
        created_at: new Date(),
        completed: false,
      };
      axios
        .post("http://localhost:3000/items", saveObject)
        
        .then((save_response) => {
          this.itemList.push(save_response.data)
          console.log(save_response)
        });
      event.target.value = "";
    },
    onDelete(item){
      axios.delete(`http://localhost:3000/items/${item.id}`)
      .then(delete_item => {
        console.log(delete_item)
        this.itemList = this.itemList.filter(i => i.id !== item.id)
      })
    }
  },
  computed: {
    itemCount() {
      return this.itemList.length || 0;
    },
  },
};
</script>

<style></style>
