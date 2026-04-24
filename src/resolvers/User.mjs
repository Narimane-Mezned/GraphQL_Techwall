// relation User --> Todo : lorsque on veut récupérer un user, on veut aussi récupérer ses todos associés
export const User = {
  todos: ({ id }, args, { db }, info) => {
    // le parent de todos est User ( car todos est un champs du type User dans le schema )
    //  l'id ici correspond à l'id de l'utilisateur associé à la todo ( dans db.mjs )
    return db.todos.filter((todo) => todo.userId === id);
    // filter returns all matchs ( used when we expect multiple results )
  },
};
