class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    User.id += 1;
    this.id = User.id;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static insert(firstName, lastName, age) {
    const newUser = new User(firstName, lastName, age);
    User.users.push(newUser);
    return newUser;
  }

  static getOneById(userId) {
    return User.users.find(user => user.id === Number(userId));
  }

  static list(query) {
    return User.users;
  }
}
User.users = [];
User.id = 0;

module.exports = User;
