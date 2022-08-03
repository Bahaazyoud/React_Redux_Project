import { useEffect, useReducer, useState } from "react";
import "./comments.css";
import axios from "axios";

const Comment = (props) => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [comment, setComment] = useState({
    text: "",
    user_id: sessionStorage.getItem("user_id"),
  });
  const [comments, setComments] = useState("");
  const deleteHandler = (e) => {
    e.preventDefault();
    console.log(e);
    const api = {
      comment_id: e.target[0].value,
    };
    axios.delete(`http://127.0.0.1:8000/api/comment/${e.target[0].value}`, api);
  };
  const commentChangeHandler = (e) => {
    setComment({ ...comment, text: e.target.value });
  };
  const commentHandler = (e) => {
    e.preventDefault();
    console.log(e);
    if (!comment == "") {
      const api = {
        text: e.target[0].value,
        user_id: e.target[1].value,
        post_id: e.target[2].value,
      };
      axios.post("http://127.0.0.1:8000/api/comment", api);
      setComment({ ...comment, text: "" });
      forceUpdate();
    }
  };
  useEffect(() => {
    console.log(comments);
    axios
      .get(`http://127.0.0.1:8000/api/comment/${props.postId}`)
      .then((res) => {
        setComments(res.data);
      });
  }, [ignored]);
  //   function handleClick() {
  //     console.log(ignored);
  //   }
  let nameClass = "bluee";
  let commentsClass = "comment";
  return (
    <>
      <ul
        style={{
          listStyle: "none",
          padding: "0",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxHeight: "200px",
          overflowY: "scroll",
        }}
      >
        {comments &&
          comments?.map((post) => {
            return (
              <li
                className={
                  post.user_id == sessionStorage.getItem("user_id") &&
                  commentsClass
                }
              >
                {post.user_id == sessionStorage.getItem("user_id") && (
                  <form className="delete" onSubmit={deleteHandler}>
                    <input type="hidden" value={`${post.id}`} />
                    <button className="delete" type="submit">
                      Delete
                    </button>
                  </form>
                )}

                <div className="comet-avatar">
                  <img src={`${post.image}`} alt="" />
                </div>
                <div className="we-comment">
                  <div className="coment-head">
                    <h5>
                      <a
                        href="http://localhost:3000/profile"
                        className={
                          post.user_id == sessionStorage.getItem("user_id") &&
                          nameClass
                        }
                      >
                        {console.log(post)}
                        {post.name}
                      </a>
                    </h5>
                  </div>
                  <p>{post.text}</p>
                </div>
              </li>
            );
          })}
      </ul>
      <form onSubmit={commentHandler} method="post">
        <textarea
          name="comment"
          placeholder="Post your comment"
          value={comment.text}
          onChange={commentChangeHandler}
        />
        <input
          type="hidden"
          value={sessionStorage.getItem("user_id")}
          name="user_id"
        />
        <input type="hidden" value={props.postId} name="post_id" />
        <button
          style={{
            background: "white",
            border: " rgb(8 141 205 / 62%) solid 2px",
            borderRadius: " 0px 10px 10px",
            color: "#088dcd",
            height: "100%",
            textShadow: "#00000030 2px 0px 13px",
          }}
          type="submit"
        >
          Comment
        </button>
      </form>
    </>
  );
};

export default Comment;
