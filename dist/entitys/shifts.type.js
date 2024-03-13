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
exports.ShiftType = void 0;
const typeorm_1 = require("typeorm");
const user_entitiy_1 = require("./user.entitiy");
const shifts_entity_1 = require("./shifts.entity");
let ShiftType = class ShiftType {
};
exports.ShiftType = ShiftType;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ShiftType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShiftType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ShiftType.prototype, "hourlyRate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entitiy_1.MainUsers, mainUsers => mainUsers.shiftTypes),
    __metadata("design:type", user_entitiy_1.MainUsers)
], ShiftType.prototype, "mainUser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shifts_entity_1.Shifts, shifts => shifts.shiftType),
    __metadata("design:type", Array)
], ShiftType.prototype, "shifts", void 0);
exports.ShiftType = ShiftType = __decorate([
    (0, typeorm_1.Entity)()
], ShiftType);
//# sourceMappingURL=shifts.type.js.map