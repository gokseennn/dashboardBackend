import { ShiftsService } from './shifts.service';
import { ShiftType } from 'src/entitys/shifts.type';
import { RegistrationStatus } from 'src/auth-module/auth.service';
export declare class ShiftsController {
    private readonly shiftService;
    constructor(shiftService: ShiftsService);
    addShiftType(name: string, hourlyRate: number, mainUserId: number): Promise<RegistrationStatus>;
    getShiftType(mainUserId: number): Promise<ShiftType[]>;
}
