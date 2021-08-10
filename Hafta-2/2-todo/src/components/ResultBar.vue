<template>
    <div>
        <small class="d-flex justify-content-end mt-2 green"
      >{{todoList.length}} adet todo var</small
    >
    </div>
</template>
<script>
export default {
    name : "ResultBar",
    props: {
        todoList: {
            required: true,
            type: Array
        }
    }
}
</script>
<style>
    
</style>