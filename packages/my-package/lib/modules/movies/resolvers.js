const resolvers = {
  multi: {
    name: 'movies',

    async resolver(root, args, context) {
      const { input: {terms = {}} = {terms: {}} } = args;
      let { selector, options } = await context.Movies.getParameters(terms, {}, context.currentUser);
      movies = await context.Movies.find(selector, options);
      moviesContent = movies.fetch();
      moviesCount = movies.count();
      return { results: moviesContent, totalCount: moviesCount };
    },
  },
};

export default resolvers;