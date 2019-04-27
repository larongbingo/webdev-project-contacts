import { Model, Table, Column, DataType, BeforeCreate, BeforeUpdate } from "sequelize-typescript";
import { BadRequestException } from "@nestjs/common";
import { hash } from "bcrypt";
import { Op } from "sequelize";
@Table({
  tableName: "users",
  paranoid: true,
  timestamps: true,
})
export class User extends Model<User> {
  @BeforeCreate
  @BeforeUpdate
  private static async isUsernameUnique(instance: User) {
    if (instance.username !== instance.previous("username")) {
      if (!await this.findOne({where: {username: {[Op.eq]: instance.username}}})) {
        throw new BadRequestException("Username is already taken");
      }
    }
  }

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

  @Column(DataType.STRING)
  public token: string;
}
