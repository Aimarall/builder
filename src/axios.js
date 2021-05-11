import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder2-97915-default-rtdb.firebaseio.com";

export default instance;