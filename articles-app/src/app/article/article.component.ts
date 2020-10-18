import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  private symbols: number;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean;
  showHideBtn: boolean;
  imageIsShown: boolean;
  imageButtonTitle: string;

  constructor() {
    this.symbols = 250;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
    this.imageIsShown = false;
    this.articleDescLen = 0;
    this.descToShow = '';
    this.imageButtonTitle = 'Show Image';
  }

  readMore(): void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  hideDesc(): void {
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
    this.descToShow = '';
    this.articleDescLen = 0;
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle =
      this.imageButtonTitle === 'Show Image' ? 'Hide image' : 'Show Image';
  }

  ngOnInit(): void {}
}
