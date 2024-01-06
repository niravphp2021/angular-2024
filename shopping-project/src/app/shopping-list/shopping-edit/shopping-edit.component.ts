import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') getName!: ElementRef;
  @ViewChild('amount') getAmount!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.getName.nativeElement.value;
    const amount = this.getAmount.nativeElement.value;
    const newIng = new Ingredient(ingName,amount);
    this.ingredientAdded.emit(newIng);
  }

}
