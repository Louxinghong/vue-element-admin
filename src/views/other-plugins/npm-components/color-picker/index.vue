<template>
  <div class="container">
    <colorPicker v-model="color" />
  </div>
</template>

<script>
export default {
  name: 'NpmColorPicker',
  data () {
    return {
      color: '#ff0000'
    }
  }
}
</script>

<style></style>
