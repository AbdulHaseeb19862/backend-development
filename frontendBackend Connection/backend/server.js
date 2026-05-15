import express from "express";

const app = express();
const port = 3000;

app.use(express.static(`dist`));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programming Joke",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs.",
    },
    {
      id: 2,
      title: "Student Joke",
      content:
        "Teacher: Why are you late? Student: Because of the sign on the road. Teacher: What sign? Student: School Ahead, Go Slow.",
    },
    {
      id: 3,
      title: "Computer Joke",
      content:
        "My computer is so slow, even the loading screen takes a coffee break.",
    },
    {
      id: 4,
      title: "Coding Life",
      content:
        "A programmer’s wife told him to go to the store and get bread. If they have eggs, get a dozen. He came back with 12 breads.",
    },
    {
      id: 5,
      title: "Internet Joke",
      content:
        "WiFi went down for five minutes, so I had to talk to my family. They seem like nice people.",
    },
    {
      id: 6,
      title: "Developer Joke",
      content:
        "Debugging: Being the detective in a crime movie where you are also the murderer.",
    },
    {
      id: 7,
      title: "JavaScript Joke",
      content:
        "Why did JavaScript marry Java? Because it couldn’t find a classier language.",
    },
    {
      id: 8,
      title: "Office Joke",
      content: "My boss told me to have a good day… so I went home.",
    },
  ];

  res.send(jokes);
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
