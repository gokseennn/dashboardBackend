import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MainUsers } from 'src/entitys/user.entitiy';
import { Repository } from 'typeorm';
export interface RegistrationStatus {
    status: string;
    message: string;
}

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(MainUsers)
        private usersRepository: Repository<MainUsers>,
    ) { }
    async registerUser(
        email: string,
        password: string,
        fullname: string
    ): Promise<RegistrationStatus> {
        try {
            const existingUser = await this.usersRepository.findOne({
                where: { email },
            });

            if (existingUser) {
                throw new HttpException(
                    {
                        status: 'error',
                        message: 'A user with this email already exists',
                    },
                    HttpStatus.BAD_REQUEST,
                );
            }

            const user = new MainUsers();
            user.email = email;
            user.password = password;
            user.fullname = fullname;

            await this.usersRepository.save(user);

            return { status: 'success', message: 'User registered successfully' };
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            } else {
                throw new HttpException(
                    {
                        status: 'error',
                        message: error,
                    },
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
        }
    }
    async loginUser(
        email: string,
        password: string,
    ): Promise<{ id: number; email: string ,fullName :string} | RegistrationStatus> {
        const user = await this.usersRepository.findOne({ where: { email } });

        if (!user) {
            return { status: 'error', message: 'Wrogn Email or Password' };
        }
        if (user.password === password) {
            return { id: user.MainUserID, email: user.email ,fullName:user.fullname };
        } else {
            return { status: 'error', message: 'Wrogn Email or Password' };
        }
    }
}
