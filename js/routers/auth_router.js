const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { check, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const config = require("config");
const router = Router();

// api/register
router.post(
  "/register",
  [
    (check("email", "chyota hato").isEmail(),
    check("pw", `6 tadan ko'p bo'lsin okam ertaga yep qo'yasiz😆`).isLength({
      min: 6,
    })),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty9) {
        return res.status(400).json({
          errors: errors.array(),
          message: `nimanidur no tug'ri qilyapsiz `,
        });
      }

      const { email, pw, username, nikname } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Eee oka oldin reg qilgan ekan siz ku 🥲" });
      }

      const hashedPassword = await bcrypt.hash(pw, 12);
      const user = new User({ email, pw: hashedPassword, username, nikname });
      await user.save();

      res.status(201).json({ message: `tabrikliman siz o'tingiz🔥🔥` });
    } catch (e) {
      res.status(500).json({ message: "chichib quydingiz🚽🧻" });
    }
  }
);
// api/login
router.post(
  "/login",
  [
    check("email", "narmalni email yozing").normalizeEmail().isEmail(),
    check("pw", `to'g'ri parol yozing`).exists(),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty9) {
        return res.status(400).json({
          errors: errors.array(),
          message: `nimanidur no tug'ri qilyapsiz `,
        });
      }

      const { email, pw } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ message: "siz bizi bazada yoq ekansiz reg qiling🥲" });
      }

      const isMatch = await bcrypt.compare(pw, user.pw);
      if (!isMatch) {
        return res.status(400).json({ message: `parol notug'ri tug'ri terin` });
      }
      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });
      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "chichib quydingiz🚽🧻" });
    }
  }
);

module.exports = router;
