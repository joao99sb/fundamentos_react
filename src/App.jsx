import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="joao victor"
            content="      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium odio
      natus accusantium voluptates porro optio dolore eaque doloribus a nobis
      assumenda est quisquam esse perferendis aspernatur quidem soluta, ipsam
      voluptatibus!"
          />
          <Post
            author="desconhecido"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio error debitis at quasi ducimus est neque tenetur sit exercitationem officiis impedit ullam quae provident, deleniti ut expedita quis velit repudiandae!"
          />
        </main>
      </div>
    </>
  );
}

export default App;
