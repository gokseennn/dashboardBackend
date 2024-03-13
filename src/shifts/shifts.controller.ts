import { Body, Controller, Post } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { ShiftType } from 'src/entitys/shifts.type';
import { RegistrationStatus } from 'src/auth-module/auth.service';
import { MainUsers } from 'src/entitys/user.entitiy';

@Controller('shifts')
export class ShiftsController {
    constructor(private readonly shiftService: ShiftsService) { }

    @Post('addShiftType')
    async addShiftType(
        @Body('name') name: string,
        @Body('hourlyRate') hourlyRate: number,
        @Body('mainUserId') mainUserId: number,


    ): Promise<RegistrationStatus> {
        const shiftType = new ShiftType()
        shiftType.hourlyRate= hourlyRate
        shiftType.name = name
        shiftType.mainUser = { MainUserID: mainUserId } as MainUsers; // Doğru MainUser nesnesini oluşturun
        return this.shiftService.addShiftType(shiftType)
    }
    @Post('getShiftType')
    async getShiftType(
        @Body('mainUserId') mainUserId: number,

    ): Promise<ShiftType[]> {
        return this.shiftService.getShiftType(mainUserId)
    }
}
