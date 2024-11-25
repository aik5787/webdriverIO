import axios from "axios";
import { config } from '../../wdio.conf.js'

class LoginApi {
  async login (email, password) {
    try {
      const login = await axios({
        method: "post",
        url: `${config.baseUrl}/api/users/login`,
        data: {
            "email": email,
            "password": password
          },
      });
      console.log("tokenAPI", login.data.accessToken);
      return login.data.accessToken;
    } catch (error) {
      console.error("Error logging in:", error.message);
      throw error;
    }
  }
}

export default new LoginApi();
