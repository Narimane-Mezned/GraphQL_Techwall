import { log } from "node:console";
import { db } from "./../db/db.mjs";
export const Query = {
  hello: (_, { name }) => `Hello ${name || "narimane"} !`,
  // on retourne une string qui dit Hello + le nom passé en argument ou "narimane" si aucun nom n'est passé
  getTodos: (parent, args, context, info) => {
    /*console.log("parent : ", parent);
    console.log("args : ", args);
    console.log("context : ", context);
    console.log("info : ", info); */
    return db.todos;
  },

  getTodosByID: (_, { id }) => {
    const todo = db.todos.find((todo) => todo.id == id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    return todo;
  },

  getUsers: (parent, args, context, info) => {
    return db.user;
  },

  getUserByID: (_, { id }) => {
    const user = db.user.find((user) => user.id == id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  },
};

// on a créé ce fichier Query.mjs pour respecter le design pattern "single responsability"
