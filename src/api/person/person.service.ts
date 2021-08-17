import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Person } from "./model/person.model";

@Injectable()
export class PersonService {

    constructor(
        @InjectRepository(Person)
        private personRepository: Repository<Person>,
      ) {}

    async findAll() : Promise<Person[]> {
        return this.personRepository.find({ where: { isActive: true } })
    }

    async findById(dbId: number) : Promise<Person> {
        return await this.personRepository.findOne({ where: { id: dbId } });
    }

    async save(person: Person): Promise<Person>{
        this.personRepository.save(person);
        return person;
    }

}