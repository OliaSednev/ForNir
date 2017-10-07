import { Component, OnInit } from '@angular/core';

import {BoxService} from '../../services/box.service';

import {Portfolio, BoxData} from '../../models/app.models';


@Component({
  selector: 'search-portfolio',
  templateUrl: './search-portfolio.component.html',
  styleUrls: ['./search-portfolio.component.css']
})
export class SearchPortfolioComponent implements OnInit {

  boxes: BoxData[];
  portfolio: Portfolio[];
  filteredPortfolio: Portfolio[];
  selectedFilter: string;

  isExpanded: boolean;


  constructor(private service: BoxService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(boxes => {
        this.boxes = boxes;
        this.createBoxes();
      });
  }

  createBoxes() {
    this.portfolio = [];

    for (const box of this.boxes) {

      const boxTitle = box.title.split(';');
      const boxId = boxTitle[1].replace('Box -', '').trim();
      const boxDescription = this.truncateDescription(box.description);

      const newPortfolio: Portfolio = {
        id: boxId,
        name: boxTitle[1],
        category: boxTitle[0].toUpperCase(),
        img: `../../assets/images/portfolio-${boxId}-sm.jpg`,
        description: boxDescription
      };
      this.portfolio.push(newPortfolio);
    }

    this.filteredPortfolio = this.portfolio;
    this.showAll();
  }

  private truncateDescription(description: string) {
    if ( description.length > 155 ) {
      return description.slice(0, 151) + '...';
    }
    return description;
  }

  showAll() {
    this.isExpanded = false;
    this.filteredPortfolio = this.portfolio;
    this.selectedFilter = '';
  }

  seeMore() {
    this.isExpanded = true;
  }

  seeLess() {
    this.isExpanded = false;
  }


  filter(category: string) {
    this.isExpanded = false;
    this.selectedFilter = category;
    this.filteredPortfolio = this.portfolio.filter(selected => selected.category.toLowerCase() === category.toLowerCase());
  }

}
