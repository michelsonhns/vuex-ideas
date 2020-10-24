<template>
  <div>
    <h2>My ideas</h2>
    <ul>
       <draggable class="ideas" v-model="allIdeas" group="ideas">
          <Idea v-for="idea in allIdeas" :key="idea.id" :item="idea">{{ idea.title }}</Idea>
        </draggable>
    </ul>
    <div class="destination">
      <div>
        <h3>Creatif</h3>
        <draggable v-model="courses" group="ideas">
          <Idea v-for="course in courses" :key="course.id" :item="course" />
        </draggable>
      </div>
      <div>
        <h3>Job</h3>
        <draggable v-model="paperWork" group="ideas">
          <Idea v-for="pw in paperWork" :key="pw.id" :item="pw" />
        </draggable>
      </div>
      <div>
        <h3>Vacation</h3>
        <draggable v-model="creatives" group="ideas">
          <Idea v-for="creative in creatives" :key="creative.id" :item="creative" />
        </draggable>
      </div>
    </div>
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
      },
      courses: {
        get() {
          return this.$store.getters.courses;
        },
        set(value) {
          this.$store.dispatch("saveCoursesOrdering", value)
        }
      },
      paperWork: {
        get() {
          return this.$store.getters.paperWork;
        },
        set(value) {
          this.$store.dispatch("SavePaperWorkOrdering", value)
        }
      },
      creatives: {
        get(){
          return this.$store.getters.creatives;
        },
        set(value){
          this.$store.dispatch("SaveCreativeOrdering", value)
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