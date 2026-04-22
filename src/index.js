import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import { Query } from "./resolvers/Query.mjs";
import { readFileSync } from "node:fs";

const typeDefs = readFileSync("./src/schema/schema.graphql", "utf-8");

const yoga = createYoga({
  schema: createSchema({
    // Définition du schéma GraphQL ( le contrat : ce que nous offrons à travers notre server GraphQL)
    // on a ici une seule fonctionnalité : query=requete (pour REST query càd Get)
    typeDefs: typeDefs,

    // resolvers : l'implémentation du contrat
    resolvers: {
      Query,
    },
  }),
});

const server = createServer(yoga); // créer une instance graphql server qu'on a importé de graphql-yoga

server.listen(4000, () => {
  console.info("Techwall Server is running on http://localhost:4000/graphql");
});
