import axios from "axios";
const DEFAULT_URL = "http://localhost:3002/api/";
class HttpService {
  login = (email, password) => {
    return axios
      .post(`${DEFAULT_URL}login`, {
        username: email,
        password: password,
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  getMangas = () => {
    return axios
      .get(`${DEFAULT_URL}Mangas`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  getEvents = () => {
    return axios
      .get(`${DEFAULT_URL}Events`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
}
export default new HttpService();
