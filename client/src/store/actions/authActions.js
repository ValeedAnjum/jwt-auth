import axios from "axios";

export const signIn = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(`/auth/signin`, body, config);
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};
