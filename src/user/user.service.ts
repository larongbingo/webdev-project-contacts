import { Injectable, Inject } from "@nestjs/common";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";

import { USER_REPOSITORY } from "../constants/models";

import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly USER: typeof User,
  ) {}

  public async create(values: FilteredModelAttributes<User>, options?: ICreateOptions) {
    return this.USER.create(values, options);
  }

  public async findOne(options?: IFindOptions<User>) {
    return this.USER.findOne(options);
  }

  public async findAll(options?: IFindOptions<User>) {
    return this.USER.findAll(options);
  }
}
