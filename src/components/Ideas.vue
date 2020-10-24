<template>
  <div>
    <h2>My ideas</h2>
    <ul>
       <draggable class="ideas" v-model="allIdeas">
          <Idea v-for="idea in allIdeas" :key="idea.id" :item="idea">{{ idea.title }}</Idea>
        </draggable>
    </ul>
   
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import Idea from '@/components/Idea.vue'

  export default {
    components: {
        draggable,
        Idea
    },
    computed: {
      // allIdeas() {
      //   return this.$store.getters.allIdeas; 
      // }
      allIdeas: {
        get() {
        return this.$store.getters.allIdeas; 
        },
        set(value) {
          this.$store.dispatch("saveIdeasOrdering", value)
        }
      }
    },
  }
</script>

<style scoped>
.ideas {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  height: 30vh;
}

.destination {
  display: flex;
  justify-content: space-evenly;
}
</style>