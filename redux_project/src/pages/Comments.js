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
    axios.delete(`http://127.0.0.1:8000/api/comment/${e.target[0].value}`);
    forceUpdate();
  };
  const commentChangeHandler = (e) => {
    setComment({ ...comment, text: e.target.value });
  };
  const commentHandler = (e) => {
    e.preventDefault();
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
    if (sessionStorage.getItem("user_id")) {
      axios
        .get(
          `http://127.0.0.1:8000/api/user/img/${sessionStorage.getItem(
            "user_id"
          )}`
        )
        .then((res) => {
          console.log(res.data.id);
          props.userImage(`http://localhost:8000/img/${res.data.image}`);
        });
    }
  });
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/comment/${props.postId}`)
      .then((res) => {
        setComments(res.data);
      });
  }, [ignored]);
  let nameClass = "bluee";
  let commentsClass = "comment";
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
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
                {post.user_id == sessionStorage.getItem("user_id") &&
                  props.userImage(`http://localhost:8000/img/${post.image}`)}
                {post.user_id == sessionStorage.getItem("user_id") && (
                  <form className="delete" onSubmit={deleteHandler}>
                    <input type="hidden" value={`${post.commentId}`} />
                    <button className="delete" type="submit">
                      <i class="fa-solid fa-delete-left"></i>
                    </button>
                  </form>
                )}

                <div className="comet-avatar">
                  <img
                    style={{ height: "40px", width: "40px" }}
                    src={`http://localhost:8000/img/${post.image}`}
                    alt=""
                  />
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
      {sessionStorage.getItem("user_id") ? (
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
      ) : (
        <p style={{ fontSize: "18px" }}>
          please login
          <a
            href="/login"
            style={{
              color: "#5a4ae3",
              textDecoration: "underline",
            }}
          >
            {" "}
            here{" "}
          </a>
          To post and comment
        </p>
      )}
    </>
  );
};

export default Comment;
