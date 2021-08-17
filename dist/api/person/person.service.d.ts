import { Repository } from "typeorm";
import { Person } from "./model/person.model";
export declare class PersonService {
    private personRepository;
    constructor(personRepository: Repository<Person>);
    findAll(): Promise<Person[]>;
    findById(dbId: number): Promise<Person>;
    save(person: Person): Promise<Person>;
}
