export class FetchUsersError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FetchUsersError";

    Object.setPrototypeOf(this, FetchUsersError.prototype);
  }
}
