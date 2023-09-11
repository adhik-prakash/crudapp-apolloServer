const typeDefs = `#graphql
type UserType {
    id: ID
    name: String
    email: String
    age: Int
}

type Query {
    users: [UserType]
    user(id:ID!):UserType
  }

type Mutation {
  addUser(name: String!,email: String!,age: Int):UserType
  deleteUser(id:ID!,name:String,email:String):UserType
  updateUser(id:ID!,name:String,email:String):UserType

}
  `;

export { typeDefs };
