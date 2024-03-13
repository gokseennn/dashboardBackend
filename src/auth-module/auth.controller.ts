import { Body, Controller, Post } from '@nestjs/common';
import { AuthService, RegistrationStatus } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async registerUser(
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('fullName') fullName: string,

    ): Promise<RegistrationStatus> {
        return this.authService.registerUser(email, password, fullName);
    }
    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
    ): Promise<RegistrationStatus | { id: number; email: string }> {
        return this.authService.loginUser(email, password);
    }
}
