import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "users",
  paranoid: true,
})
export class User extends Model<User> {
  @Column(DataType.STRING)
  public username: string;

  @Column(DataType.STRING)
  public password: string;
}
