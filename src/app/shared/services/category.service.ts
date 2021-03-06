import {AngularFireDatabase,FirebaseListObservable} from "angularfire2/database";
import { Injectable } from '@angular/core';


@Injectable()
export class CategoryService {
  private categoryCollection:string;
  constructor(private angularFireDatabase:AngularFireDatabase) {
    this.categoryCollection = "/Categories/";
   }

  getAllCategoriesFromDatabase():FirebaseListObservable<any[]> {
    return this.angularFireDatabase.list(this.categoryCollection,{
      query:{ // this is just to sort the category names alphabetically.
        orderByChild:"name"
      }
    });
  }
}
