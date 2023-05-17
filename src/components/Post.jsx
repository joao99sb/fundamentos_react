import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/joao99sb.png"
          />

          <div className={styles.authorInfo}>
            <strong>Joao Victor</strong>
            <span> Web Developer</span>
          </div>
        </div>

        <time title="11 de maio as 08:13" dateTime="2022-05-11 08:13:30">
          publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
          </p>
          <p>
            repudiandae cumque! Eos, expedita? Odio, tempore? Dolore ab, quasi
          </p>
          <p>
            <a href="">
              perspiciatis doloremque perferendis optio veritatis rem ullam
            </a>
          </p>
          <p>
            <a href=""> molestias quidem consectetur, fugiat quas? </a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
      </div>
    </article>
  );
}
