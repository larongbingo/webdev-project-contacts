import { Message } from "./message.entity";

import { MESSAGE_REPOSITORY } from "../../constants/models";

export const messageProviders = [
  {
    provide: MESSAGE_REPOSITORY,
    useValue: Message,
  },
];
