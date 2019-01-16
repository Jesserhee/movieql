const people = [
  {
    name: "Jesse",
    age: 18,
    gender: "male"
  }
];

const resolvers = {
  Query: {
      people: () => people
  }
};

export default resolvers;