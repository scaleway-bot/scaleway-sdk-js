/** Scaleway Request. */
export interface ScwRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: string
  headers?: Record<string, string>
  body?: string
  urlParams?: URLSearchParams
  responseType?: 'json' | 'text' | 'blob'
}

/**
 * A factory to unmarshal a response.
 *
 * @param obj - The input object.
 * @returns The output object
 */
export type ResponseUnmarshaller<T> = (obj: unknown) => T
