import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DropDownOptionModel } from '../../../../shared/model/dropDown.model';
import { FormGroup } from '@angular/forms';
import { MoviesFormEnum } from '../../services/movies.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() data: Observable<DropDownOptionModel[]> | undefined;
  @Input() formGroup!: FormGroup;
  @Output() valueChange = new EventEmitter<string>();
  @Output() clean = new EventEmitter();

  public MOVIE_ENUM = MoviesFormEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  public valueChangeHandler(selectedId: string): void {
    this.valueChange.emit(selectedId);
  }

  public cleanClicked(): void {
    this.clean.emit();
  }
}
