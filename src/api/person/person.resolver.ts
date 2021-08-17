import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Person } from "./model/person.model";
import { PersonService } from "./person.service";


@Resolver(of => Person)
export class PersonResolver {

    constructor(
        private personService: PersonService
    ){}

    @Query(returns => [Person])
    async getPersons(): Promise<Person[]> {
        return await this.personService.findAll();
    }

    @Mutation(returns => Person)
    async postPerson(@Args({ name: 'firstName', type: () => String }) firstName: string, 
                    @Args({ name: 'lastName', type: () => String }) lastName: string, 
                    @Args({ name: 'documentNumber', type: () => String }) documentNumber: string): Promise<Person>{

        const person: Person = {firstName: firstName, lastName: lastName, documentNumber: documentNumber};
        return await this.personService.save(person);
    }

}