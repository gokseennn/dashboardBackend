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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shifts = void 0;
const typeorm_1 = require("typeorm");
const user_entitiy_1 = require("./user.entitiy");
const employees_entity_1 = require("./employees.entity");
const shifts_type_1 = require("./shifts.type");
let Shifts = class Shifts {
};
exports.Shifts = Shifts;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Shifts.prototype, "ShiftID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Shifts.prototype, "WorkDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employees_entity_1.Employees),
    (0, typeorm_1.JoinColumn)({ name: 'EmployeeID' }),
    __metadata("design:type", employees_entity_1.Employees)
], Shifts.prototype, "Employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entitiy_1.MainUsers),
    (0, typeorm_1.JoinColumn)({ name: 'MainUserID' }),
    __metadata("design:type", user_entitiy_1.MainUsers)
], Shifts.prototype, "MainUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", Date)
], Shifts.prototype, "ShiftStartTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", Date)
], Shifts.prototype, "ShiftEndTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shifts_type_1.ShiftType, shiftType => shiftType.shifts),
    __metadata("design:type", shifts_type_1.ShiftType)
], Shifts.prototype, "shiftType", void 0);
exports.Shifts = Shifts = __decorate([
    (0, typeorm_1.Entity)('Shifts')
], Shifts);
//# sourceMappingURL=shifts.entity.js.map