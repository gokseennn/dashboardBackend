import { MainUsers } from 'src/entitys/user.entitiy';
import { Repository } from 'typeorm';
export interface RegistrationStatus {
    status: string;
    message: string;
}
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: Repository<MainUsers>);
    registerUser(email: string, password: string, fullname: string): Promise<RegistrationStatus>;
    loginUser(email: string, password: string): Promise<{
        id: number;
        email: string;
        fullName: string;
    } | RegistrationStatus>;
}
