import { db } from "./../db/db.mjs";
// Relation Todo --> User : lorsque on veut récupérer un todo, on veut aussi récupérer son user associé
export const Todo = {
  // le userId ici correspond ici à l'id de l'utilisateur associé à la todo ( dans db.mjs )
  // le parent de user est Todo
  user: ({ userId }) => {
    return db.user.find((user) => user.id === userId);
    // find returns the first match ( used when we expect a single result )
  },
};
