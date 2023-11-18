import { Body, Controller, Post } from "@nestjs/common";
import { Public } from "src/decorators/public.decorator";
import { TokenDTO } from "src/dtos/auth/token.dto";
import { EnfermeiroDTO } from "src/dtos/enfermeiro/authEnfermeiro.dto";
import { AuthService } from "src/services/auth.service";

@Controller("/api/auths")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post("/login")
  async login(@Body() req: EnfermeiroDTO) {
    return this.authService.enfermeiroLogin(req);
  }

  @Public()
  @Post("/verify/token")
  async verify(@Body() payload: TokenDTO) {
    return this.authService.decodeJWT(payload.token);
  }
}
