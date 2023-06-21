import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  EntitySchema,
  OneToMany,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Categories } from "./categories.entity";
import { DetailsProduct } from "./detail_productsordered.entity";
@Entity()
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tenxe: string;

  @Column()
  hangxe: string;

  @Column()
  giaban: number;

  @Column()
  nhienlieu: string;
  @Column()
  socho: string;

  @Column()
  hopso: string;

  @Column()
  mausac: string;
  @Column()
  kieudang: string;

  @Column()
  tinhtrang: string;

  @Column()
  namsanxuat: string;

  @Column()
  img: string;

  @ManyToOne(() => Categories, (category) => category.product, {
    onUpdate: "CASCADE",
  })
  categories: Categories;

  @OneToMany(() => DetailsProduct, (detailsProduct) => detailsProduct.product)
  details: DetailsProduct[];
}
