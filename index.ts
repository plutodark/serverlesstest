import { ApolloServer } from '@apollo/server'
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda'
const typeDefs = `
  type Query {
    hello: String
  }
`
const resolvers = {
  Query: {
    hello: () => {
      console.log('try try')
      return 'meow'
    }
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: false
})
export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  // We will be using the Proxy V2 handler
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
)
/*
module.exports.handler = async (event: Event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

*/
