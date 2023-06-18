import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from "@apollo/client/link/context";
import { NgModule } from '@angular/core';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';

const uri = 'https://graphql.contentful.com/content/v1/spaces/vc3a64o21xuw/environments/master'; // <-- add the URL of the GraphQL server here
const header: Record<string, string> = { "Authorization": "Bearer Yv-ObNjIjUDhgQyeGgpYQefycOGcxnR3TN821zzl74k"};
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  //auth
  const auth = setContext((operation, context) => {
    return {
      headers: {
        Authorization: `Bearer Yv-ObNjIjUDhgQyeGgpYQefycOGcxnR3TN821zzl74k`
      }
    }
  })

  return {
    // link: httpLink.create({ uri }),
    link: ApolloLink.from([auth, httpLink.create({uri})]),
    cache: new InMemoryCache(),
    // headers: header
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
