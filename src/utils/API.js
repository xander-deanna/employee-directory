// importing axios for our API call
import axios from "axios";

const exportAPI = {
  getRandomUsers: () => {
    return axios.get("https://randomuser.me/api/?nat=us&results=50");
  }
};

export default exportAPI