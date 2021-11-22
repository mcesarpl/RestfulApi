import { Title as TitleInterface } from '../interfaces';

export class Title implements TitleInterface {
  title: string;
  price: Number;
  writer: string;
  createdAt: Date;
  rating: string;
  ranking: Number;

  constructor (instance) {
    this.title = instance.title;
    this.price = instance.price;
    this.writer = instance.writer;
    this.createdAt = instance.createdAt;
    this.rating = instance.rating;
    this.ranking = instance.ranking;
  }
}