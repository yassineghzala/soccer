import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  
  
  // result:string = "";
  // usersTab = [
  //   {id:1,name:"ali",email:"ali@gmail.com",phone:24600900},
  //   {id:2,name:"Salah",email:"salah@gmail.com",phone:23129129},
  //   {id:3,name:"ali",email:"a@gmail.com",phone:25009000}
  // ]
  // searchUser(username:string){
  //   let i:number = 0;
  //   while(i<this.usersTab.length && username!=this.usersTab[i].name){
  //     i++;
  //   }
  //   if(i==this.usersTab.length){
  //     this.result = `aucun user ${username} existe`; 
  //   }
  //   else{
  //     this.result = `name: ${this.usersTab[i].name} email: ${this.usersTab[i].email}`;
  //   }
  // }

  usersTab:User[]=[
    new User(1,"ali","ali@gmail.com",246000900),
    new User(2,"salah","salah@gmail.com",2460368900),
    new User(3,"ali","ali@gmail.com",289760132)
  ]
  filteredUsers: User []=[];
  searchName:string="";
  noUserExists: boolean=false;

  constructor(){
    this.filteredUsers=this.usersTab;
  }

  searchUserByName(){
    this.filteredUsers=this.usersTab.filter(user=>user.name===this.searchName);
    this.noUserExists=this.filteredUsers.length===0;
  }
}
