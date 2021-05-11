import { InjectionToken, ValueProvider } from '@angular/core';

interface Disposable {
  /** Dispose of the instance and clear up resources. */
  dispose: () => void | Promise<void>;
}

interface ClientOptions {
  url: string | (() => Promise<string> | string);
}

interface SubscribePayload {
  readonly operationName?: string | null;
  readonly query: string;
  readonly variables?: Record<string, unknown> | null;
}

interface Sink<T = unknown> {
  /** Next value arriving. */
  next(value: T): void;
  /**
   * An error that has occured. Calling this function "closes" the sink.
   * Besides the errors being `Error` and `readonly GraphQLError[]`, it
   * can also be a `CloseEvent`, but to avoid bundling DOM typings because
   * the client can run in Node env too, you should assert the close event
   * type during implementation.
   */
  error(error: unknown): void;
  /** The sink has completed. This function "closes" the sink. */
  complete(): void;
}

interface Client {
  subscribe<T = unknown>(payload: SubscribePayload, sink: Sink<T>): () => void;
}

interface IGraphQLWS {
  createClient: (options: ClientOptions) => Client;
}

const GraphQLWS: InjectionToken<IGraphQLWS> = new InjectionToken<IGraphQLWS>('graphqlWs');
// tslint:disable-next-line: no-string-literal
const GraphQLWSProvider: ValueProvider = { provide: GraphQLWS, useValue: window['graphqlWs']};

export { IGraphQLWS, GraphQLWS, GraphQLWSProvider, Client };
