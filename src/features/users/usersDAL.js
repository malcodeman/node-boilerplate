import User from "./usersModel";

async function create(values) {
  const user = await User.create(values);

  return user;
}

async function findAll(where) {
  const users = await User.findAll(where);

  return users;
}

export { create, findAll };

export default {
  create,
  findAll,
};
