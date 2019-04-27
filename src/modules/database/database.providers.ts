import { Provider } from "@nestjs/common";

import { databaseConnection } from "./database.connection";
import { sequelizeDatabase } from "../../constants/database";

export const databaseProviders: Provider[] = [
  {
    provide: sequelizeDatabase,
    useValue: databaseConnection,
  },
];
