import { HTTPMethods } from "fastify";

export const HttpMethod = {
    get: 'GET' as HTTPMethods,
    post: 'POST' as HTTPMethods,
    put: 'PUT' as HTTPMethods,
    patch: 'PATCH' as HTTPMethods,
    delete: 'DELETE' as HTTPMethods,
    head: 'HEAD' as HTTPMethods,
    options: 'OPTIONS' as HTTPMethods,
    all: 'ALL' as HTTPMethods,
}
