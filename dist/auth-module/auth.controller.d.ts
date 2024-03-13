import { AuthService, RegistrationStatus } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(email: string, password: string, fullName: string): Promise<RegistrationStatus>;
    login(email: string, password: string): Promise<RegistrationStatus | {
        id: number;
        email: string;
    }>;
}
