import { Column, Entity, Index, OneToMany } from "typeorm";

@Index("username_UNIQUE", ["username"], { unique: true })
@Entity("user", { schema: "myapp" })
export class User {
  @Column("varchar", { primary: true, name: "id", length: 30 })
  id: string;

  @Column("varchar", { name: "username", unique: true, length: 20 })
  username: string;

  @Column("varchar", { name: "password", length: 100 })
  password: string;

  @Column("datetime", {
    name: "created_dt",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdDt: Date;

  @Column("datetime", {
    name: "updated_dt",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedDt: Date;
}
