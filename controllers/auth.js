import helpers from "../helpers/user.js";
import authService from "../utils/authService.js";

const controllers = {
  register: async (req, res) => {
    try {
      const { name, email, phone, password } = req.body;
      console.log('jfnwkn',name, email, phone, password);
      
      const existingUser = await helpers.findUser(email);
      if (existingUser)
        return res.status(400).json({ message: "Email already exists" });

      const hashedPassword = await authService.encryptPassword(password);

      await helpers.addUser({ name, email, phone, password: hashedPassword })
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await helpers.findUser(email);
      if (!user)
        return res.status(400).json({ message: "Email is not registered" });

      const validPass = await authService.comparePassword(password, user.password);
      
      if (!validPass)
        return res.status(400).json({ message: "Invalid password" });

      const token = authService.generateToken(user._id);
      res.status(201).json({ status: true, token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default controllers;
