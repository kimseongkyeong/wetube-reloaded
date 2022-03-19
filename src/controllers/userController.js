import res from "express/lib/response";



export const trending = (req,res) => {
    const videos = [
        {
          title: "Hello",
          title: "First Video",
          rating: 5,
          comments: 2,
          createdAt: "2 minutes ago",
          views: 59,
          id: 1,
        },
        {
          title: "Video #2",
          title: "Second Video",
          rating: 5,
          comments: 2,
          createdAt: "2 minutes ago",
          views: 59,
          id: 1,
        },
        {
          title: "Whatsup",
          title: "Third Video",
          rating: 5,
          comments: 2,
          createdAt: "2 minutes ago",
          views: 59,
          id: 1,
        },
      ];
    return res.render("home",{webtitle:"Main",videos});
}
export const join = (req, res) => res.render("join");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const userParam = (req,res) => res.send(`parameter# ${req.params.aa} fgggggg`);
export const logout = (req,res) => res.send("logout");