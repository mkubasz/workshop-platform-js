import { Example } from "../domain/Example";
import { InMemoryExampleRepository } from "../infrastructure/InMemoryExampleRepository";
import { ExampleFacade } from "./ExampleFacade";

export const ExampleConfig = () => {
    const repository = InMemoryExampleRepository({});

    const example = Example({ repository });
    const exampleFacade = ExampleFacade({
        repository,
        example
    });

};