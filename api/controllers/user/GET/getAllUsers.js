import User from '../../../models/user.js'

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().lean();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

