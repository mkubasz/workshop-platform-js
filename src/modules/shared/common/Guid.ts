import * as crypto from 'crypto';

export type Guid = ReturnType<typeof Guid>;
export const Guid = () => crypto.randomUUID();