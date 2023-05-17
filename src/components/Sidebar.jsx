import { PencilLine } from "phosphor-react";

import style from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />
      <div className={style.profile}>
        <img
          className={style.avatar}
          src="https://github.com/joao99sb.png"
        />

        <strong>Joao Victor</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
