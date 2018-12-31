import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import './fragments.js';
import schema from './schema.js';
import mutations from './mutations.js';
import resolvers from './resolvers.js';
import './permissions.js';

const Movies = createCollection({
  collectionName: 'Movies',
  typeName: 'Movie',
  schema: schema,
  resolvers,
  mutations
});

export default Movies;