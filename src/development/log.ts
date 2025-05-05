import { ENVIRONMENT, Environments } from "./env";

export function log(...args: unknown[]) {
  switch (ENVIRONMENT) {
    case Environments.DEVELOPMENT:
      console.log(...args);
    case Environments.PRODUCTION:
    //
  }
}
