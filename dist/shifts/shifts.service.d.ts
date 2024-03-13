import { RegistrationStatus } from 'src/auth-module/auth.service';
import { ShiftType } from 'src/entitys/shifts.type';
import { Repository } from 'typeorm';
export declare class ShiftsService {
    private shiftRepository;
    constructor(shiftRepository: Repository<ShiftType>);
    addShiftType(shiftType: ShiftType): Promise<RegistrationStatus>;
    getShiftType(mainUserId: number): Promise<ShiftType[]>;
}
