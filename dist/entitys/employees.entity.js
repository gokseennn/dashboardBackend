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
exports.Employees = void 0;
const typeorm_1 = require("typeorm");
const user_entitiy_1 = require("./user.entitiy");
let Employees = class Employees {
};
exports.Employees = Employees;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Employees.prototype, "EmployeeID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Employees.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Employees.prototype, "Position", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entitiy_1.MainUsers),
    (0, typeorm_1.JoinColumn)({ name: 'MainUserID' }),
    __metadata("design:type", Number)
], Employees.prototype, "MainUserID", void 0);
exports.Employees = Employees = __decorate([
    (0, typeorm_1.Entity)('Employees')
], Employees);
//# sourceMappingURL=employees.entity.js.map