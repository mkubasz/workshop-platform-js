import { ExampleController } from "./api/ExampleController";
import { ExampleRoutes } from "./api/ExampleValidation";
import { ExampleFacade } from "./application/ExampleFacade";

export const BaseExampleRoutes = (exampleFacade: ExampleFacade) => {
    return ExampleRoutes(ExampleController(exampleFacade));
};