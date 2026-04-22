const todos = [
  {
    id: 1,
    title: "narimane",
    content: "learn GraphQL",
    status: "TODO",
  },
];
export const Query = {
  hello: (_, { name }) => `Hello ${name || "narimane"} !`,
  // on retourne une string qui dit Hello + le nom passé en argument ou "narimane" si aucun nom n'est passé
  getTodos: () => {
    return todos;
  },
};

// on a créé ce fichier Query.mjs pour respecter le design pattern "singlke responsability"
