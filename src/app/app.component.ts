import { Component, OnInit } from '@angular/core';
import { Planet } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  users;
  title = 'planet';
  constructor(private service: Planet){ }
  ngOnInit(){
    this.service.getUsers().subscribe((data)=>{
      console.log(data);
      this.users = data;
    });
  }
}
