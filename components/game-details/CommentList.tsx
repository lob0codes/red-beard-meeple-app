import classes from "@/components/game-details/CommentList.module.css";

export default function Comments() {
  return (
    <article className={classes.comments}>
      <h3>Comments Section</h3>
      <p>Total comments: 45</p>
    </article>
  );
}
