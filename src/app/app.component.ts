import { Component } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { from, map, Observable, Subscription } from 'rxjs';
import { items, Query } from './types';
const GET_DATA = gql`
query {
  pageTemplateCollection{
  items {
    url
    seo {
      entryTitle
      title
      description
      canonicalUrl
      isNoIndex
    }
    isShowVaButton
    chatId
    isPageLiveChat
  }
}
}`
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: Observable<items[]> | undefined;
category:string[][]=[];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.data = this.apollo
      .watchQuery<Query>({
        query: GET_DATA
      })
      .valueChanges.pipe(map((result) => result.data.pageTemplateCollection.items));
      this.data.subscribe((res)=>
      res.map(
        x => {this.category.push(x.url.split("/").filter(x=> x!='' && x!='home'))
        }
      )
      )

}
}
