import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listcandidates',
  templateUrl: './listcandidates.component.html',
  styleUrls: ['./listcandidates.component.css']
})
export class ListcandidatesComponent implements OnInit{
constructor(private http:HttpClient){}
users: any;
columns= ['id', 'name', 'email', 'phone']


ngOnInit(): void {
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
    (data)=>{
      console.log(data);
      this.users=data;
    }
  )
  
}

}
