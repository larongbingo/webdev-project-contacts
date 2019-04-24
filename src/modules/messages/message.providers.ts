import { Provider } from "@nestjs/common";

import { Message } from "./message.entity";
import { MESSAGE_REPOSITORY } from "../../constants/models";

export const messageProviders: Provider[] = [
  {
    provide: MESSAGE_REPOSITORY,
    useValue: Message,
  },
];
