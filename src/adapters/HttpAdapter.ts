export class HttpAdapter {
  private readonly baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
  }

  get<T>(url: string, params: { query: object } = { query: {} }): Promise<T> {
    const query = Object.keys(params?.query || {})
      .map(
        (key) =>
          `${key}=${Object.getOwnPropertyDescriptor(params.query, key)?.value}`
      )
      .join("&");

    return fetch(this.baseUrl + url + "?" + query).then((response) =>
      response.json()
    );
  }
}
