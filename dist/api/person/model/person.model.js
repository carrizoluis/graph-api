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
exports.Person = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Person = class Person {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    graphql_1.Field(type => graphql_1.Int),
    __metadata("design:type", Number)
], Person.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "firstName", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "lastName", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "documentNumber", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Person.prototype, "createdAt", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Person.prototype, "updatedAt", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], Person.prototype, "isActive", void 0);
Person = __decorate([
    typeorm_1.Entity(),
    graphql_1.ObjectType()
], Person);
exports.Person = Person;
//# sourceMappingURL=person.model.js.map