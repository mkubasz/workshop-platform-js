import { Example } from "../domain/Example";
import { ExampleRepositoryImpl } from "../infrastructure/ExampleRepositoryImpl";
import { ExampleFacade } from "./ExampleFacade";

export const ExampleConfig = ({}) => {
    const repository = ExampleRepositoryImpl({});

    const example = Example({ repository });
    const exampleFacade = ExampleFacade({
        repository,
        example
    });
    return { exampleFacade };
};