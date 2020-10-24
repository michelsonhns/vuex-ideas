import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ideas: {},
    courses: [],
    paperWork: [],
    creatives: []
  },
  mutations: {
    CREATE_IDEAS(state, payload){
      const id = Date.now();
      state.ideas[id] = payload;
      state.ideas = { ...state.ideas };
    },
    SAVE_IDEAS_ORDERING(state, payload) {
      state.ideas = { ...payload };
    },
    SAVE_COURSES_ORDERING(state, payload) {
      state.courses = [ ...payload ];
    },
    SAVE_PAPERWORK_ORDERING(state, payload) {
      state.paperWork = [ ...payload];
    },
    SAVE_CREATIVE_ORDERING(state, payload) {
      state.creatives = [...payload];
    }
  },
  actions: {
    createIdea(context, payload) {
      context.commit("CREATE_IDEAS", payload);
    },
    saveIdeasOrdering(context, payload) {
      const ideas = {} ;
      payload.map(idea => {
        ideas[idea.id] = idea;
      });
      context.commit("SAVE_IDEAS_ORDERING", ideas)
    },
    saveCoursesOrdering(context, payload) {
      context.commit("SAVE_COURSES_ORDERING", payload);
    },
    SavePaperWorkOrdering(context, payload) {
      context.commit("SAVE_PAPERWORK_ORDERING", payload);
    },
    SaveCreativeOrdering(context, payload) {
      context.commit("SAVE_CREATIVE_ORDERING", payload);
    }
  },
  getters: {
    allIdeas(state) {
      const allIdeas = Object.keys(state.ideas).map(key => {
        const idea = state.ideas[key];
        idea.id = key;
        return idea;
      });
      return allIdeas;
    },
    courses(state) {
      return state.courses;
    },
    paperWork(state) {
      return state.paperWork;
    },
    creatives(state) {
      return state.creatives;
    }
  }
})
