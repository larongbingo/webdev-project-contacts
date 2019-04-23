import { Injectable, Scope, Inject } from "@nestjs/common";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";

import { MESSAGE_REPOSITORY } from "../../constants/models";
import { Message } from "./message.entity";

@Injectable()
export class MessageService {
  constructor(
    @Inject(MESSAGE_REPOSITORY) private readonly MESSAGE: typeof Message,
  ) {}
  
  public async create(values?: FilteredModelAttributes<Message>, options?: ICreateOptions) {
    return this.MESSAGE.create({...values, isRead: false}, options);
  }

  public async findAll(options?: IFindOptions<Message>) {
    return this.MESSAGE.findAll(options);
  }

  public async findOne(options?: IFindOptions<Message>) {
    return this.MESSAGE.findOne(options);
  }
}
