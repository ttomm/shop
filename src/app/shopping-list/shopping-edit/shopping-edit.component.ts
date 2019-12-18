import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.less']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAdded() {
    this.ingredientAdded.emit(new Ingredient(this.nameInput.nativeElement.value, +this.amountInput.nativeElement.value));
  }

}
