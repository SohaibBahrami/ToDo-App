import express from "express";
const router = express.Router();

router.get("/register", users.registerForm);

router.post("/register", users.register);

router.get("/login", users.loginForm);

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  wrapAsync(users.login)
);

router.get("/logout", users.logout);

export default router;
