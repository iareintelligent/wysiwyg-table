import { App } from "aws-cdk-lib";
import { FrontendStack } from "./stacks/FrontendStack";

const app = new App();
new FrontendStack(app, "clearwater-frontend-stack");
