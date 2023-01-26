import { ExampleConfig } from "./modules/example/application/ExampleConfig";
import { BaseExampleRoutes } from "./modules/example/BaseExampleConfig";

export const Application = ({}) => {
    const { exampleFacade } = ExampleConfig({});
    const exampleRoutes = BaseExampleRoutes(exampleFacade);


    return { };
};
