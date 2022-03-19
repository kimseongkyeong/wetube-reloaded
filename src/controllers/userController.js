import res from "express/lib/response";
export const trending = (req, res) => res.render("home",{ webtitle:"Home"});
export const join = (req, res) => res.render("home");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const userParam = (req,res) => res.send(`parameter# ${req.params.aa} fgggggg`);
export const logout = (req,res) => res.send("logout");