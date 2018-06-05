export class Tickets {
  constructor(
    public email: string,
    public payeer: string,
    public win: boolean = false,
    public id?: number
  ) {
  }
}
