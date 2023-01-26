import { ExampleRepository } from "./ExampleRepository";

type ExampleProps = {
    repository: ExampleRepository;
}

export type Example = ReturnType<typeof Example>;
export const Example = ({ repository }: ExampleProps) => {};