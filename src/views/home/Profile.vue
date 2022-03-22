<template>
  <h1>{{ name }} - {{ email }}</h1>
</template>
<script>
export default {
  data() {
    return {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
    };
  },
};
</script>