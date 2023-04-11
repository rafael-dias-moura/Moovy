import axios from "axios";

const apiMoovy = axios.create({
  baseURL: "http://localhost:5000",
});

const apiOmdb = axios.create({
  baseURL: "http://www.omdbapi.com",
});

export { apiMoovy };
