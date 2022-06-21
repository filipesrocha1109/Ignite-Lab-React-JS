import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4oh8doy03bv01xn1z0l4v5j/master',
    cache: new InMemoryCache()
})