<template>
  <div class="home">
    <h1>Welcome to ideas.io</h1>
    <IdeasCreator/>
    <Ideas />
  </div>
</template>

<script>
import Ideas from '@/components/Ideas.vue';
import IdeasCreator from '@/components/IdeasCreator.vue';
export default {
  name: 'Home',
  components: {
    Ideas,
    IdeasCreator
  },
}
</script>
