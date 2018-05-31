export class Tickets {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public payeer: string,
    public win: boolean = false,
    public number_ticket: string,
    public id?: number
  ) {
  }
}
