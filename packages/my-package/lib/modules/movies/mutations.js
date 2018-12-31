import { createMutator, Utils } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const mutations = {
  create: {
    name: 'createMovie',

    check(user) {
      if (!user) return false;
      return Users.canDo(user, 'movie.create');
    },

    mutation(root, args, context) {
      const { data: document } = args;
      
      Utils.performCheck(this.check, context.currentUser, document);

      return createMutator({
        collection: context.Movies,
        document: document,
        currentUser: context.currentUser,
        validate: true, 
        context,
      });
    },
  },
};

export default mutations;