const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

const github = {
  login: "abdulhaseeb",
  id: 4470646,
  node_id: "MDQ6VXNlcjQ0NzA2NDY=",
  avatar_url: "https://avatars.githubusercontent.com/u/4470646?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/abdulhaseeb",
  html_url: "https://github.com/abdulhaseeb",
  followers_url: "https://api.github.com/users/abdulhaseeb/followers",
  following_url:
    "https://api.github.com/users/abdulhaseeb/following{/other_user}",
  gists_url: "https://api.github.com/users/abdulhaseeb/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/abdulhaseeb/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/abdulhaseeb/subscriptions",
  organizations_url: "https://api.github.com/users/abdulhaseeb/orgs",
  repos_url: "https://api.github.com/users/abdulhaseeb/repos",
  events_url: "https://api.github.com/users/abdulhaseeb/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/abdulhaseeb/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 1,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2013-05-19T12:31:21Z",
  updated_at: "2016-02-27T08:41:16Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page");
});
("");

app.get("/github", (req, rest) => {
  rest.json(github);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
