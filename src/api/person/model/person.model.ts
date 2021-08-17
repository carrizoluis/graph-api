import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
@ObjectType()
export class Person {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id?: number;

    @Field({ nullable: true })
    @Column()
    firstName?: string;

    @Field({ nullable: true })
    @Column()
    lastName?: string;

    @Field({ nullable: true })
    @Column()
    documentNumber?: string;
    
    @Field()
    @CreateDateColumn()
    createdAt?: Date

    @Field()
    @UpdateDateColumn()
    updatedAt?: Date
    
    @Field()
    @Column({ default: true })
    isActive?: boolean
}