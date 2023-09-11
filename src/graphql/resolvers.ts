// let userList = require("../user.json");
import userList from "../user.json" assert { type: "json" };

export const resolvers = {
  Query: {
    users: () => userList,
    user: (parent: any, args: any) => {
      let user = userList.find((u: any) => u.id === parseInt(args.id));
      return user;
    },
  },
  Mutation: {
    addUser: (parent: any, args: any) => {
      const newUser = {
        name: args.name,
        email: args.email,
        id: Date.now(),
        age: parseInt(args.age),
      };
      userList.push(newUser);

      return {
        ...newUser,
        message: "user has been added sucessfully",
      };
    },

    deleteUser: (parent: any, args: any) => {
      let user = userList.find((u: any) => u.id === parseInt(args.id));
      let userLists = userList.filter((u: any) => u.id !== parseInt(args.id));

      // console.log(user);

      return { ...userLists };
    },
  },
  updateUser: (parent: any, args: any) => {
    let user = userList.find((u: any) => u.id === args.id);
    if (!user) {
      throw new Error("User not found");
    }

    user.name = args?.name;
    user.email = args?.email;

    user.age = args?.age;
    return user;
  },
};
