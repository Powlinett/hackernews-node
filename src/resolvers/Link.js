exports.postedBy = (parent, args, context) => {
  return context.prisma.link.findOne({
    where: { id: parent.id }
  }).postedBy();
};

exports.votes = (parent, args, context) => {
  return context.prisma.link.findOne({
    where: { id: parent.id }
  }).votes();
};