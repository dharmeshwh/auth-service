import { Injectable } from "@nestjs/common";
import { ILoginUser } from "./auth.interface";
import HttpResponse from "./libs/http-response";
import { getJwtToken, getUserProfile } from "./utils/utils";

@Injectable()
export class AuthService {
  async login(body: ILoginUser) {
    try {
      const { username } = body;

      const userProfile = await getUserProfile(username);

      const token = getJwtToken(userProfile.id, userProfile.type);

      return HttpResponse.success(token);
    } catch (error: any) {
      return HttpResponse.unauthorized(
        error.response.data.message ?? error.message
      );
    }
  }
}
