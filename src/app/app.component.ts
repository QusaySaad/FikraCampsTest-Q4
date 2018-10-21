import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  //Variable Declarations
  total_Elements: any;
  list;
  list_2;

  //Arrays
  list_One = ['a', 'b', 'c'];
  list_two = [1, 2, 3];

  //Arrays
  list_three = [1, 2, 5, 8, 0];
  list_four = [9, 4, 8, 7, 6];


  ngOnInit() {
    this.total_Elements = this.list_One.length + this.list_two.length;

    //Pass arrays to fuction
    this.newList(this.list_One, this.list_two);
    //Console Log the result when the app init
    console.log("Combined Lists 1: ", this.newList(['a', 'b', 'c'], [1, 2, 3]));

    //Pass arrays to fuction
    this.newList_2(this.list_three, this.list_four);
    //Console Log the result when the app init
    console.log("Combined Lists 1: ",this.newList_2(this.list_three, this.list_four));

  }



  combine() {
    this.newList(this.list_One, this.list_two);
  }

  combine_2() {
    this.newList_2(this.list_three, this.list_four);
  }


  

  //Function
  newList(list_One, list_two) {
    this.list = [];

    for (var i = 0; i < list_One.length; ++i) {
      this.list.push(list_One[i]);
      this.list.push(list_two[i]);
    }
    return this.list;

    console.log("Total Elements", this.list);

  }


  //Functions
  newList_2(list_three, list_four) {
    this.list_2 = [];

    for (var i = 0; i < list_three.length; ++i) {
      this.list_2.push(list_three[i]);
      this.list_2.push(list_four[i]);
    }
    return this.list_2;

    console.log("Total Elements", this.list_2);
  }




}


