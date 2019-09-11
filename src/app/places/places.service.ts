import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

private _places: Place[] = [
  new Place(
    'p1',
    'gading apartmen',
    '2BR, Luas dan Cozy',
    'https://jendela360.com/gallery/apartment/gading-icon58a56de27674b.jpg',
    10000000000
  ),
  new Place(
    'p2',
    'serpong apartmen',
    'Apartmen Romantis',
    'https://jendela360.com/gallery/apartment/entrance5b7a4f3b5f501.jpg',
    12500000000
  ),
  new Place(
    'p3',
    'BSD apartmen',
    'Apartemen Murah',
    'https://image.cermati.com/f_auto,q_70/ax315stlhqly40tj2fa8',
    5000000000
  ),

];

get places(){
  return[...this._places];
}

}
