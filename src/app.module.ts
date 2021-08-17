import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Person } from './api/person/model/person.model';
import { PersonsModule } from './api/person/person.module';
import { PersonResolver } from './api/person/person.resolver';
import { PersonService } from './api/person/person.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root_1234',
    database: 'persons',
    entities: [Person],
    synchronize: true,
  }),GraphQLModule.forRoot({autoSchemaFile: join(process.cwd(), 'src/schema.gql'),}), PersonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
