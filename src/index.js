import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import { Query } from "./resolvers/Query.mjs";
import { readFileSync } from "node:fs";
import { Todo } from "./resolvers/Todo.mjs";
import { User } from "./resolvers/User.mjs";

const typeDefs = readFileSync("./src/schema/schema.graphql", "utf-8"); //readFileSync prend 2 arguments : le chemin du fichier + l'encodage
// c vrai typedefs accepte les strings mais seulement avec un contenu écrit avec la syntaxe GraphQL et on peut pas mettre un chemin
const yoga = createYoga({
  schema: createSchema({
    // typedefs : Définition du schéma GraphQL ( le contrat : ce que nous offrons à travers notre server GraphQL)
    typeDefs: typeDefs,

    // resolvers : l'implémentation du contrat
    resolvers: {
      Query,
      Todo,
      User,
    },
  }),
});

const server = createServer(yoga); // créer une instance graphql server qu'on a importé de graphql-yoga

server.listen(4000, () => {
  console.info("Techwall Server is running on http://localhost:4000/graphql");
});
