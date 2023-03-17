import {Component, OnInit} from '@angular/core';

class Hello{
  constructor(name:string, fam: string) {
  }
}

@Component({
  selector: 'app-notfoundpage',
  templateUrl: './notfoundpage.component.html',
  styleUrls: ['./notfoundpage.component.css']
})
export class NotfoundpageComponent implements OnInit{

  link: string = "5";
  flag: boolean = false;
  arr: string[] = ['er', 'ty'];
  val: number = 0;

  dict = {
    key1: 90,
    key2: 100
  }


  ngOnInit() {
    let obj: Hello = new Hello("name", "man");
    console.log(obj);
    let obj2: number = this.tmp_func();
    console.log(obj2);
  }

  print(object2: string){
    this.link = object2;
    this.flag = true;
  }

  tmp_func():number {
    return 0;
  }
}
