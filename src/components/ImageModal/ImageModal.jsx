import css from "./ImageModal.module.css";
import { AiFillLike } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
export default function ImageModal({ img }) {
  return (
    <div className={css.mainContainer}>
      <img
        className={css.img}
        src={img.urls.regular}
        alt={img.alt_description}
      />
      <div className={css.container}>
        <div className={css.containerStatLikes}>
          <AiFillLike className={css.svg} />
          <p className={css.likes}>Likes: {img.likes}</p>
        </div>
        <div className={css.containerStatDesc}>
          <MdDescription className={css.svg} />
          <p className={css.description}>{img.alt_description}</p>
        </div>
      </div>
    </div>
  );
}
