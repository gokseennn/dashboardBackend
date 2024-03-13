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
exports.EmployeesController = void 0;
const common_1 = require("@nestjs/common");
const employees_entity_1 = require("../entitys/employees.entity");
const employees_service_1 = require("./employees.service");
let EmployeesController = class EmployeesController {
    constructor(employeesService) {
        this.employeesService = employeesService;
    }
    async addEmployee(name, position, MainUserID) {
        const employee = new employees_entity_1.Employees();
        employee.Name = name;
        employee.Position = position;
        employee.MainUserID = MainUserID;
        return this.employeesService.addEmployee(employee);
    }
    async getEmployees(MainUserId) {
        return this.employeesService.getEmployees(MainUserId);
    }
};
exports.EmployeesController = EmployeesController;
__decorate([
    (0, common_1.Post)('addEmployee'),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('position')),
    __param(2, (0, common_1.Body)('MainUserId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "addEmployee", null);
__decorate([
    (0, common_1.Post)('getEmployees'),
    __param(0, (0, common_1.Body)('MainUserId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "getEmployees", null);
exports.EmployeesController = EmployeesController = __decorate([
    (0, common_1.Controller)('employees'),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService])
], EmployeesController);
//# sourceMappingURL=employees.controller.js.map