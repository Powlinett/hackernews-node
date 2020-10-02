exports.link = (parent, args, context) => {
  return context.prisma.vote.findOne({
    where: { id: parent.id }
  }).link();
};

exports.user = (parent, args, context) => {
  return context.prisma.vote.findOne({
    where: {
      id: parent.id
    }
  }).user();
};