export class LastWatchedModel {
  public title: string;
  public poster: string;
  public id: string;

  constructor(title: string, poster: string, id: string) {
    this.title = title;
    this.poster = poster === 'N/A' ? '../assets/img/film.jpg' : poster;
    this.id = id;
  }
}
