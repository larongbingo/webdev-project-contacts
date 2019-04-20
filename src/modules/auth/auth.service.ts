import { Injectable } from "@nestjs/common";

import { UserService } from "../user/user.service";
import { User } from "../user/user.entity";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
  ) {}

  public async validateUser(token: string): Promise<User> {
    return await this.userService.findOneByToken(token);
  }
}
