import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

recipes: Recipe[] = [
  {
    id: 'r1',
    title: 'Gado-Gado',
    imageUrl:
    'https://i1.wp.com/resepkoki.id/wp-content/uploads/2016/12/Resep-Gado-Gado.jpg?zoom=1.25&resize=860%2C380&ssl=1',
    ingredients: ['lontong','sawi','Bumbu Kecap','tauge']
  },

  {
    id: 'r2',
    title: 'Ayam Goreng',
    imageUrl:
    'https://i1.wp.com/resepkoki.id/wp-content/uploads/2016/12/Resep-Gado-Gado.jpg?zoom=1.25&resize=860%2C380&ssl=1',
    ingredients: ['ayam','minyak']
  },

  {
    id: 'r3',
    title: 'Pizza Margaritha',
    imageUrl:
    'https://i1.wp.com/resepkoki.id/wp-content/uploads/2016/12/Resep-Gado-Gado.jpg?zoom=1.25&resize=860%2C380&ssl=1',
    ingredients: ['lontong','sawi','Bumbu Kecap','tauge']
  },

];

}
