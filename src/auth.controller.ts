import { Body, Controller, Post } from "@nestjs/common";
import { loginContract } from "./auth.contract";
import { ILoginUser } from "./auth.interface";
import { AuthService } from "./auth.service";
import { handleHTTPResponse } from "./libs/http-response";
import Vp from "./utils/joi-validation";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  login(@Body(Vp.for(loginContract)) body: ILoginUser) {
    const res = this.authService.login(body);
    return handleHTTPResponse(res);
  }
}
