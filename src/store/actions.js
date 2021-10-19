import axios from "axios";
export default {
  getList({ commit }, listData) {
    const link = "https://jsonplaceholder.typicode.com/posts";
    axios
    .get(link)
    .then(function(response) {
      commit("addList", response.data);
    })
    .catch(function(error) {
      console.log(error);
    })
    .then(function() {});
  },
};
