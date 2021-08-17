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
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const person_model_1 = require("./model/person.model");
let PersonService = class PersonService {
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async findAll() {
        return this.personRepository.find({ where: { isActive: true } });
    }
    async findById(dbId) {
        return await this.personRepository.findOne({ where: { id: dbId } });
    }
    async save(person) {
        this.personRepository.save(person);
        return person;
    }
};
PersonService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(person_model_1.Person)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map