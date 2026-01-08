const express = require("express");
const Contact = require("./schema");
require("./db"); // تشغيل الاتصال

const app = express();

// إعدادات
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// صفحة الفورم
app.get("/", (req, res) => {
  res.render("contact");
});

// حفظ البيانات
app.post("/contact", (req, res) => {
  const contact = new Contact(req.body);
  contact.save();
  res.send("Message saved ✅");
});

// تشغيل السيرفر
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
