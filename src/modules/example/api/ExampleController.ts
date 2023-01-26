import { ExampleFacade } from "../application/ExampleFacade";

export type ExampleController = ReturnType<typeof ExampleController>;
export const ExampleController = (exampleFacade: ExampleFacade) => {
    return {

    };
};