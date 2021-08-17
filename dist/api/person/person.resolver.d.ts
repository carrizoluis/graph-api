import { Person } from "./model/person.model";
import { PersonService } from "./person.service";
export declare class PersonResolver {
    private personService;
    constructor(personService: PersonService);
    getPersons(): Promise<Person[]>;
    postPerson(firstName: string, lastName: string, documentNumber: string): Promise<Person>;
}
