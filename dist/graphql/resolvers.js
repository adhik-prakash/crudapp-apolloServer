// let userList = require("../user.json");
import userList from "../user.json" assert { type: "json" };
export const resolvers = {
    Query: {
        users: () => userList,
        user: (parent, args) => {
            let user = userList.find((u) => u.id === parseInt(args.id));
            return user;
        },
    },
    Mutation: {
        addUser: (parent, args) => {
            const newUser = {
                name: args.name,
                email: args.email,
                id: Date.now(),
                age: parseInt(args.age),
            };
            userList.push(newUser);
            return Object.assign(Object.assign({}, newUser), { message: "user has been added sucessfully" });
        },
        deleteUser: (parent, args) => {
            let user = userList.find((u) => u.id === parseInt(args.id));
            let userLists = userList.filter((u) => u.id !== parseInt(args.id));
            // console.log(user);
            return Object.assign({}, userLists);
        },
    },
    updateUser: (parent, args) => {
        let user = userList.find((u) => u.id === args.id);
        if (!user) {
            throw new Error("User not found");
        }
        user.name = args === null || args === void 0 ? void 0 : args.name;
        user.email = args === null || args === void 0 ? void 0 : args.email;
        return user;
    },
};
