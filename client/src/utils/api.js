import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getWords: function() {
      return axios.get("/api/words");
    }
  };
  