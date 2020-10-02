const newLinkSubscribe = (parent, args, context, info) => {
  return context.pubsub.asyncIterator("NEW_LINK");
};

exports.newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => {
    return payload;
  }
}

const newVoteSubscribe = (parent, args, context, info) => {
  return context.pubsub.asyncIterator("NEW_VOTE")
}

exports.newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload
  }
}
