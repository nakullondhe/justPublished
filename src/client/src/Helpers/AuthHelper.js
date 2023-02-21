import axios from "axios";

const token = () => localStorage.getItem("jptoken");

export const registerUsingEmail = (user) => axios.post("/auth/register", user).then((res) => {
  if (res.success) {
    return res;
  }
});

export const loginWithEmail = async (user) => axios.post("/auth/login", user).then((res) => {
  if (res.success && res.token) {
    return res;
  }
});
