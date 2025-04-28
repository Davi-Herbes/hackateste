import { useGlobalStore } from "../../../../store/page-store/state";
import { useUserStore } from "../../../../store/user-store/state";
import { axios } from "../../../axios";
import { UserDataSchema } from "./schemas/user_data.schema";

export class UserConfirmer {
  async confirmUser(code: number): Promise<boolean> {
    try {
      const response = await axios.post(
        "/auth/confirm",
        {
          code,
        },
        {
          withCredentials: true,
        },
      );

      const userData = response.data.userData;

      const parsedUserData = UserDataSchema.parse(userData);

      useUserStore.getState().setUser(parsedUserData);
      useGlobalStore.getState().toggleIsLoggedIn(true);

      console.log(response);

      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
