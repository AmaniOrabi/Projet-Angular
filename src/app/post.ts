export class Post {
  poster_id: string = '';
  status: boolean = false;
  posted_at: Date = new Date();
  closed_at: Date = new Date();
  departs_at: Date = new Date();
  start: string = '';
  destination: string = '';
  price: number = 0;
  place_count: number = 0;
}
