import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Product } from "../../product/entity/Product";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

   

   @ManyToMany(()=>Product,product=>product.categories)

   products!:Product[];
}











