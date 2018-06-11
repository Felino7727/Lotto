export class Tickets {
  constructor(
    public email: string,
    public payeer: string,
    public win: boolean = false,
    public date_buy: any = Date.now(),
    public date_game: any = Date.now(),
    public id?: number
  ) {
  }
}
