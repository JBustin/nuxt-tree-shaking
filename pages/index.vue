<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage',
  async mounted () {
    await this.$moduleLoader.moduleA()
  }
}
</script>
