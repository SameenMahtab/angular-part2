import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
// Apollo
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

const uri = 'https://graphql.contentful.com/content/v1/spaces/8utyj17y1gom/environments/master';

const httpOptions = {
    headers: new HttpHeaders({
    'Authorization': `Bearer e50d8ac79fd7a3545d8c0049c6a1216f5d358a192467c77584eca6fad21e0f37`
})
};

function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  return {
    link: httpLink.create({ uri
        ,
        headers: new HttpHeaders({
            'Authorization': `Bearer e50d8ac79fd7a3545d8c0049c6a1216f5d358a192467c77584eca6fad21e0f37`
        }),
}),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'ignore'
      }
    }
  };
}

@NgModule({
  exports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
