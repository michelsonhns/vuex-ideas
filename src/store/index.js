import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ideas: {},
  },
  mutations: {
    CREATE_IDEAS(state, payload){
      const id = Date.now();
      state.ideas[id] = payload;
      state.ideas = { ...state.ideas };
    },
    SAVE_IDEAS_ORDERING(state, payload) {
      state.ideas = { ...payload };
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
    }
  }
})
