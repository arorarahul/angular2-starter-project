import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipe: Recipe[];

	recipe = new Recipe("Dummy","Dummy description","http://i.ebayimg.com/00/s/NjUwWDY1MA==/z/HEIAAOSwhkRWb8jw/$_58.JPG")

  constructor() { }

  ngOnInit() {
  }



}
