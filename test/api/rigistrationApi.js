import axios from "axios";
import { config } from '../../wdio.conf.js'

class RegistarationApi {
  async registerNewUser(userName,userSurname, email, password) {
    try {
      const createUser = await axios({
        method: "post",
        url: `${config.baseUrl}/api/users/registration`,
        data: {
          username: userName,
          user_surname: userSurname,
          email: email,
          password: password,
          avatarUrl: "",
          isRealtor: "false",
        },
      });
      const userId = createUser.data.user.id;
      console.log("Created user with ID", userId);
      return userId;
    } catch (error) {
      console.error("Error registering user:", error.message);
      throw error;
    }
  }
}

export default new RegistarationApi();
