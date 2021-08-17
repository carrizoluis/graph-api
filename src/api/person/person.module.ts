import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Person } from "./model/person.model";
import { PersonResolver } from "./person.resolver";
import { PersonService } from "./person.service";

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    providers: [PersonService,PersonResolver],
    exports: [TypeOrmModule,PersonService,PersonResolver],
    controllers: [],
  })

export class PersonsModule {}