import axios from "axios";
import { config } from '../../wdio.conf.js'

class DeleteUserApi {
    async deleteUser(userId, adminAccessToken) {
      try {
        await axios.delete(`${config.baseUrl}/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${adminAccessToken}`,
          },
        });
        console.log(`Deleted user with ID ${userId}`);
      } catch (error) {
        console.error(`Error deleting user with ID ${id}:`, error.message);
      }
    }
  }
  
  export default new DeleteUserApi();