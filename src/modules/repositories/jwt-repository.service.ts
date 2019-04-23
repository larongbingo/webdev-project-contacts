import { Injectable } from "@nestjs/common";
import { sign, verify, SignOptions, VerifyOptions } from "jsonwebtoken";

@Injectable()
export class JsonWebTokenRepositoryService {
  public sign(payload: any, secretOrPrivateKey: string, options?: SignOptions) {
    return sign(payload, secretOrPrivateKey, options);
  }

  public verify(token: string, secretOrPrivateKey: string, options?: VerifyOptions) {
    return verify(token, secretOrPrivateKey, options);
  }
}
