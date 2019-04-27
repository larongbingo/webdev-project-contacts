import { Model, DataType, Column, Table } from "sequelize-typescript";

@Table({
  tableName: "messages",
  paranoid: true,
  timestamps: true,
})
export class Message extends Model<Message> {
  @Column(DataType.STRING)
  public title: string;

  @Column(DataType.STRING)
  public email: string;

  @Column(DataType.TEXT)
  public message: string;

  @Column(DataType.BOOLEAN)
  public isRead: boolean;
}
