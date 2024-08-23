import axios from "axios";

const httpUser = axios.create({
  baseURL: "https://randomuser.me/",
});

export const getUsers = () => httpUser.get("/api/?results=10");
