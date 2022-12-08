import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output()
  search = new EventEmitter<string>();

  searchForm = this.fb.group({
    search: [null]
  });

  searchSubscription: Subscription
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchSubscription = this.searchForm.controls.search.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((res: string)=>{
          this.search.emit(res);
    })
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
