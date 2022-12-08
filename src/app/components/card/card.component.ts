import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  item: Result


  @Output()
  details = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

  onSelect(id: number): void{
    this.details.emit(id)
  }
}
