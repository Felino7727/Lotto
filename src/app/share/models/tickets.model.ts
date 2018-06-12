export class Tickets {
  constructor(
    public email: string,
    public payeer: string,
    public win: boolean = false,
    public date_buy: any = new Date(2018, 6, 12),
    public date_game: any = new Date(2018, 6, 12),
    public id?: number
  ) {
  }
}
