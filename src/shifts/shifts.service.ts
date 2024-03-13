import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrationStatus } from 'src/auth-module/auth.service';
import { ShiftType } from 'src/entitys/shifts.type';
import { Repository } from 'typeorm';

@Injectable()
export class ShiftsService {
    constructor(
        @InjectRepository(ShiftType)
        private shiftRepository:Repository<ShiftType>,
    ){}
    async addShiftType(shiftType:ShiftType):Promise<RegistrationStatus>{
        try {
            await this.shiftRepository.save(shiftType);
            return { status: 'success', message: 'Shift saved successfully' };
        } catch (error) {
            return { status: 'error', message: error };
        }
    }
    async getShiftType(mainUserId: number): Promise<ShiftType[]> {
        try {
            return await this.shiftRepository.find({ where: { mainUser: { MainUserID: mainUserId } } });
        } catch (error) {
            throw new Error(`Ana kullanıcı ID'si ${mainUserId} olan vardiya tipleri bulunamadı: ${error.message}`);
        }    }
}
