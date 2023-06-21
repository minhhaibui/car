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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const role_entity_1 = require("./role.entity");
let User = class User extends typeorm_1.BaseEntity {
    id;
    username;
    password;
    email;
    async hashPassword() {
        this.password = await bcryptjs_1.default.hash(this.password, 10);
    }
    // @BeforeInsert()
    // setDefaultValues() {
    //   if (!this.role) this.role = Roles.;
    // }
    role;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Roles, (role) => role.user, { eager: true, nullable: false }),
    (0, typeorm_1.JoinColumn)({
        name: "roleId",
        referencedColumnName: "id",
    })
    // @BeforeInsert()
    // setDefaultValues() {
    //   if (!this.role) this.role = Roles.;
    // }
    ,
    __metadata("design:type", role_entity_1.Roles)
], User.prototype, "role", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
