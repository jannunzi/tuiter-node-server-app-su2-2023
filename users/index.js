import users from "./users.js";

let currentUser = null;

function UserController(app) {
  function getUsers(req, res) {
    const { username } = req.query;
    if (username) {
      const user = users.find((user) => user.username === username);
      res.json(user);
      return;
    }
    res.json(users);
  }

  function getUserById(req, res) {
    const { id } = req.params;
    const user = users.find((user) => user._id === id);
    res.json(user);
  }

  function getUserByUsername(req, res) {
    const { username } = req.params;
    const user = users.find((user) => user.username === username);
    res.json(user);
  }

  function createUser(req, res) {
    const newUser = req.body;
    console.log(newUser);
    users.push({
      _id: new Date().getTime().toString(),
      ...newUser,
    });
    res.json(users);
  }

  function removeUser(req, res) {
    const { id } = req.params;
    const index = users.findIndex((user) => user._id === id);
    users.splice(index, 1);
    res.json(users);
  }

  function updateUser(req, res) {
    const { id } = req.params;
    const newUser = req.body;
    users.forEach((user, index) => {
      if (user._id === id) {
        users[index] = {
          ...newUser,
          _id: id,
        };
      }
    });
    res.json(users);
  }

  const register = (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      res.json({ error: "User already exists" });
      return;
    }

    const user = {
      _id: new Date().getTime().toString(),
      username,
      password,
    };
    req.session["currentUser"] = user;
    currentUser = user;
    users.push(user);
    res.json(user);
  };
  const login = (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      res.json({ error: "User not found" });
      return;
    }

    req.session["currentUser"] = user;
    currentUser = user;

    res.json(user);
  };
  const profile = (req, res) => {
    res.json(req.session["currentUser"]);
    // res.json(currentUser);
  };
  const logout = (req, res) => {
    req.session.destroy();
    // currentUser = null;
    res.json({ status: "ok" });
  };

  app.post("/users/register", register);
  app.post("/users/login", login);
  app.post("/users/profile", profile);
  app.post("/users/logout", logout);

  app.get("/users", getUsers);
  app.get("/users/:id", getUserById);
  app.get("/users/username/:username", getUserByUsername);
  app.post("/users", createUser);
  app.delete("/users/:id", removeUser);
  app.put("/users/:id", updateUser);
}

export default UserController;
