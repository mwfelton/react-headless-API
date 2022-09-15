const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  
  type Country {
    name: String
    link: String
    code: String
  }

  type Query {
    countryData: [Country]
  }
`;

const countryData = [
    {
       name: "Australia",
       link: "https://www.naturecan.com.au/",
       code: "au"
    },
    {
       name: "Bulgaria",
       link: "https://bg.naturecan.com/",
       code: "bg"
    },
    {
       name: "Croatia",
       link: "https://www.naturecan.hr/",
       code: "hr"
    },
    {
       name: "China",
       link: "https://www.naturecan.cn/",
       code: "cn"
    },
    {
       name: "Czech Republic",
       link: "https://www.naturecan.cz/",
       code: "cz"
    },
    {
       name: "Denmark",
       link: "https://www.naturecan.dk/",
       code: "dk"
    },
    {
       name: "Finland",
       link: "https://www.naturecan.fi/",
       code: "fi"
    },
    {
       name: "France",
       link: "https://www.naturecan.fr/",
       code: "fr"
    },
    {
       name: "Germany",
       link: "https://www.naturecan.de/",
       code: "de"
    },
    {
       name: "Greece",
       link: "https://www.naturecan.gr/",
       code: "gr"
    },
    {
       name: "Hong Kong",
       link: "https://www.naturecan.hk/",
       code: "hk"
    },
    {
       name: "Hungary",
       link: "https://hu.naturecan.com/",
       code: "hu"
    },
    {
       name: "Iceland",
       link: "https://www.naturecan.is/",
       code: "is"
    },
    {
       name: "Indonesia",
       link: "https://naturecan.id/",
       code: "id"
    },
    {
       name: "Ireland",
       link: "https://www.naturecan.ie/",
       code: "ie"
    },
    {
       name: "Italy",
       link: "https://www.naturecan.it/",
       code: "it"
    },
    {
       name: "Israel",
       link: "https://naturecan.co.il/",
       code: "il"
    },
    {
       name: "Japan",
       link: "https://www.naturecan.jp/",
       code: "jp"
    },
    {
       name: "Lithuania",
       link: "https://naturecan.lt/",
       code: "lt"
    },
    {
       name: "Malaysia",
       link: "https://naturecan.my/",
       code: "my"
    },
    {
       name: "Netherlands",
       link: "https://www.naturecan.nl/",
       code: "nl"
    },
    {
       name: "New Zealand",
       link: "https://www.naturecan.nz/",
       code: "nz"
    },
    {
       name: "Norway",
       link: "https://naturecan.no/",
       code: "no"
    },
    {
       name: "Philippines",
       link: "https://naturecan.ph/",
       code: "ph"
    },
    {
       name: "Poland",
       link: "https://www.naturecan.pl/",
       code: "pl"
    },
    {
       name: "Portugal",
       link: "https://www.naturecan.pt/",
       code: "pt"
    },
    {
       name: "Romania",
       link: "https://naturecan.ro/",
       code: "ro"
    },
    {
       name: "Singapore",
       link: "https://naturecan.sg/",
       code: "sg"
    },
    {
       name: "Slovakia",
       link: "https://naturecan.sk/",
       code: "sk"
    },
    {
       name: "Slovenia",
       link: "https://naturecan.si/",
       code: "si"
    },
    {
       name: "South Africa",
       link: "https://naturecan.co.za/",
       code: "za"
    },
    {
       name: "South Korea",
       link: "https://www.naturecan.kr/",
       code: "kr"
    },
    {
       name: "Spain",
       link: "https://es.naturecan.com/",
       code: "es"
    },
    {
       name: "Sweden",
       link: "https://www.naturecan.se/",
       code: "se"
    },
    {
       name: "Switzerland",
       link: "https://www.naturecan.ch/",
       code: "ch"
    },
    {
       name: "Taiwan",
       link: "https://www.naturecan.tw/",
       code: "tw"
    },
    {
       name: "Thailand",
       link: "https://naturecan.co.th/",
       code: "th"
    },
    {
       name: "Turkey",
       link: "https://www.naturecan.com.tr/",
       code: "tr"
    },
    {
       name: "United Kingdom",
       link: "https://uk.naturecan.com/",
       code: "gb"
    },
    {
       name: "United States",
       link: "https://us.naturecan.com/",
       code: "us"
    },
    {
       name: "Vietnam",
       link: "https://naturecan.vn/",
       code: "vn"
    }
 ]

const resolvers = {
    Query: {
      countryData: () => countryData,
    },
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});