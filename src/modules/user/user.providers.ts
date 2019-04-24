import { Provider } from "@nestjs/common";

import { User } from "./user.entity";
import { USER_REPOSITORY } from "../../constants/models";

export const userProviders: Provider[] = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
