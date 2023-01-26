import { Example } from "../domain/Example";
import { ExampleRepository } from "../domain/ExampleRepository";

type ExampleFacadeProps = {
    example: Example;
    repository: ExampleRepository;
};

export type ExampleFacade = ReturnType<typeof ExampleFacade>;
export const ExampleFacade = ({
    example, repository
}: ExampleFacadeProps) => {
    return {

    };
};