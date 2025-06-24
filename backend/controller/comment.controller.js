import Comment from "../models/comment.models";

const createComment = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res
        .status(404)
        .json({ success: false, message: "comment text is required" });
    }
    const newComment = new Comment({
      user: req.user.id,
      text,
    });
    const savedComment = await newComment.save();
    res.status(201).json({ savedComment });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

const getComment = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate("user", "name image location")
      .sort({ createdAt: -1 });

    res.status(201).json({ comments });
  } catch (error) {
    res.status(500).json({ error: "Server error while fetching comments" });
  }
};

export default { createComment, getComment };
