import axios from "axios";

export const sendUserData = () =>
  axios
    .get("https://api.freegeoip.app/json/?apikey=38ceddc0-85de-11ec-9c74-d7dbe11d9622")
    .then(({ data }) => axios.post("https://61fb905c87801d0017a2c5b6.mockapi.io/users", data));
