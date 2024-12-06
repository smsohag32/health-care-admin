import axios from "axios";

const BASE_URL = "https://hc-server-xi.vercel.app/api/v1";

export const loginApi = async (credential) => {
   try {
      const response = await axios.post(`${BASE_URL}/auth/singin`, credential);
      return response;
   } catch (err) {
      console.log("loging error ", err.response.data);
      throw new Error(err?.response?.data);
   }
};
