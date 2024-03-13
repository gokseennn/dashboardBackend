"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entitiy_1 = require("../entitys/user.entitiy");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async registerUser(email, password, fullname) {
        try {
            const existingUser = await this.usersRepository.findOne({
                where: { email },
            });
            if (existingUser) {
                throw new common_1.HttpException({
                    status: 'error',
                    message: 'A user with this email already exists',
                }, common_1.HttpStatus.BAD_REQUEST);
            }
            const user = new user_entitiy_1.MainUsers();
            user.email = email;
            user.password = password;
            user.fullname = fullname;
            await this.usersRepository.save(user);
            return { status: 'success', message: 'User registered successfully' };
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                throw new common_1.HttpException({
                    status: 'error',
                    message: error,
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async loginUser(email, password) {
        const user = await this.usersRepository.findOne({ where: { email } });
        if (!user) {
            return { status: 'error', message: 'Wrogn Email or Password' };
        }
        if (user.password === password) {
            return { id: user.MainUserID, email: user.email, fullName: user.fullname };
        }
        else {
            return { status: 'error', message: 'Wrogn Email or Password' };
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entitiy_1.MainUsers)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map