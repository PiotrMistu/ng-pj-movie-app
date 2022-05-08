export class DropDownOptionModel {

  public value: number | string | boolean | null;
  public text: string;

  constructor(value: number | string | boolean, text: string) {
    this.value = value;
    this.text = text ?? `No data ${value}`;
  }
}
