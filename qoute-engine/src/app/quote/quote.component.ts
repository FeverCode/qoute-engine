import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[new Quote("GH","William James","Act as if what you do makes a difference. IT DOES."),
new Quote("Country Living Magazine","Bansky","When you get tired, learn to rest, not quit.")]
  preNum!: number;
  lastNum!:number
  counter!: number;

  addQuote(emittedQuote: Quote){
    this.quotes.push(emittedQuote)
  }

  upvote(i: string | number){
      this.quotes[i].upvotes+=1
  }
  downvote(i: string | number){
    this.quotes[i].downvotes+=1
  }
  delQuote(i: number){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
