import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/PedroHenrique1606.png",
      name: "Pedro Henrique",
      role: "Analista de segurança da Microsoft",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "pedro.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-27 16:21:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/PauloVictorMateus.png",
      name: "Paulo Victor",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀.",
      },

      { type: "link", content: "pedro.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-22 16:21:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/paulacynthia.png",
      name: "Paula Cynthia",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "paulinha.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-20 16:21:00"),
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
