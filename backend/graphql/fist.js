const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        Name: String
        Email: String
        RollNo: Int
    }
`);

const root = {
    Name: () => {
        return 'John Doe';
    },
    Email: () => {
        return 'kanalpandey@gmail.com';
    },
    RollNo: () => {
        return 604;
    }
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('server running at http://localhost:4000/graphql');
});