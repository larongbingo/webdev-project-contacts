import { Model, Table, Column, DataType, BeforeCreate, BeforeUpdate } from "sequelize-typescript";
import { hash } from "bcrypt";

@Table({
  tableName: "users",
  paranoid: true,
})
export class User extends Model<User> {
  @BeforeCreate
  @BeforeUpdate
  private static async hashPassword(instance: User) {
    if (instance.password !== instance.previous("password")) {
      instance.password = await hash(instance.password, 12);
    }
  }
  
  @Column(DataType.STRING)
  public username: string;

  @Column(DataType.STRING)
  public password: string;
}
