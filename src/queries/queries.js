import { gql } from "apollo-boost";

const GET_EMOTIONS_ALL = gql`
  query {
    emotions {
      id
      detectedEmotion
      date
      user {
        id
        name
        age
      }
    }
  }
`;

export { GET_EMOTIONS_ALL };
