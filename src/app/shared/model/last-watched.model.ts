export class LastWatchedModel {
  public title: string;
  public poster: string;
  public id: string;
  public date: Date;

  constructor(title: string, poster: string, id: string, date?: string) {
    this.title = title;
    this.poster = poster === 'N/A' ? '../assets/img/film.jpg' : poster;
    this.id = id;
    if (date === null || date === undefined) {
      this.date = new Date();
    } else {
      this.date = new Date(date);
    }
  }
}
