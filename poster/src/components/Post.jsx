import postStyle from "./Post.module.css";

export default function Post(props) {
  return (
    <li className={postStyle.post}>
      <p className={postStyle.author}>{props.author}</p>
      <p className={postStyle.text}>{props.body}</p>
    </li>
  );
}
