import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit{
  id:any
  match: any;
  constructor(private activatedRoute:ActivatedRoute){
  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    if(this.id){
      this.getMatchById()
    }
  }  
  getMatchById(){
    let matches = JSON.parse(localStorage.getItem('matches') || '[]');
    for (let i = 0; i < matches.length; i++) {
        if (matches[i].id === Number(this.id)) {
            this.match = matches[i]
        }
    }
  }
  
  compare(a:any,b:any){
    if(Number(a)>Number(b)){
      return ['(Win)', 'green'];
    }else if(Number(a)<Number(b)){
      return ['(Loss)', 'red'];
    }else{
      return ['(Draw)', 'yellow']
    }
  }
}
