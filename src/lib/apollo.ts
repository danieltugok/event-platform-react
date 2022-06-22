import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4o7yh11141o01xidoxx81mv/master',
    cache: new InMemoryCache()
  })