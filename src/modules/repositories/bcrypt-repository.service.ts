import { Injectable } from "@nestjs/common";
import { compare } from "bcrypt";

@Injectable()
export class BcryptRepositoryService {
  public async compare(data: any, encrypted: string) {
    return await compare(data, encrypted);
  }
}
