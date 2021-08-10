<template>
<header>
  <div>Header</div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
    header{
        background-color: rebeccapurple;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        border-bottom: 2px solid black;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
