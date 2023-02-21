import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage implements OnInit {
  quote: any;
  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.quoteService.getQuote().subscribe((res) => {
      console.log(res);
      this.quote = res;
    });
  }
}
