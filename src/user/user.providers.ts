import { User } from "./user.entity";

import { USER_REPOSITORY } from "../constants/models";

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
