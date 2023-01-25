import styles from "./Post.module.css";

export function Post(props: any) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/76667887?v=4"
          />

          <div className={styles.authorInfo}>
            <strong>Letícia Rodrigues</strong>
            <span>Web developer & UI Designer</span>
          </div>
        </div>

        <time dateTime="25 de janeiro às 17:21">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉
          <a href="#"> leticia.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#"> #nlw </a>{" "}
          <a href="#"> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
