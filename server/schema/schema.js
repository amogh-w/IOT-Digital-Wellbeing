const graphql = require("graphql");
const graphqlDate = require("graphql-iso-date");
const User = require("../models/user");
const Emotion = require("../models/emotion");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema
} = graphql;
const { GraphQLDateTime } = graphqlDate;

const EmotionType = new GraphQLObjectType({
  name: "Emotion",
  fields: () => ({
    id: { type: GraphQLID },
    detectedEmotion: { type: GraphQLString },
    date: { type: GraphQLDateTime },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    emotions: {
      type: GraphQLList(EmotionType),
      resolve(parent, args) {
        return Emotion.find({ userId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    emotion: {
      type: EmotionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      }
    },
    emotions: {
      type: GraphQLList(EmotionType),
      resolve(parent, args) {
        return Emotion.find({});
      }
    },
    users: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      }
    }
  }
});

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        let user = new User({
          name: args.name,
          age: args.age
        });
        return user.save();
      }
    },
    addEmotion: {
      type: EmotionType,
      args: {
        detectedEmotion: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: new GraphQLNonNull(GraphQLDateTime) },
        userId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let emotion = new Emotion({
          detectedEmotion: args.detectedEmotion,
          date: args.date,
          userId: args.userId
        });
        return emotion.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});
