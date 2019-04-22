import { Injectable } from "@nestjs/common";
import { Op } from "sequelize";

import { UserService } from "../user/user.service";
import { User } from "../user/user.entity";
import { BcryptRepositoryService } from "../repositories/bcrypt-repository.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly bcryptRepositoryService: BcryptRepositoryService,
  ) {}

  public async validateUser(token: string): Promise<User> {
    return await this.userService.findOneByToken(token);
  }

  public async validateCredentials(username: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({where: {username: {[Op.eq]: username}}});
    if (!user || !await this.bcryptRepositoryService.compare(password, password)) {
      return null;
    }
    return user;
  }
}
