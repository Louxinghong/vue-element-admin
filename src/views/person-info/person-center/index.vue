<template>
  <div class="person-center">
    <div>
      <img :src="avatarUrl" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonInfoPersonCenter',
  data () {
    return {
      avatarUrl: require('../../../images/avatar.jpg'),
      size: 'medium'
    }
  }
}
</script>

<style>
</style>