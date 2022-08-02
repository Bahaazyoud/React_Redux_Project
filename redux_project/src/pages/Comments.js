import { useEffect, useReducer, useState } from "react";

import axios from "axios";

const Comment = () => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [comment, setComment] = useState({
    text: "",
    user_id: sessionStorage.getItem("user_id"),
  });
  const [comments, setComments] = useState("");

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
    axios.get("http://127.0.0.1:8000/api/comment").then((res) => {
      setComments(res.data);
    });
  }, [ignored]);
  //   function handleClick() {
  //     console.log(ignored);
  //   }
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
          height: "200px",
          overflowY: "scroll",
        }}
      >
        {comments &&
          comments?.map((post) => {
            return (
              <li>
                <div className="comet-avatar">
                  <img src="images/resources/comet-1.jpg" alt="" />
                </div>
                <div className="we-comment">
                  <div className="coment-head">
                    <h5>
                      <a href="time-line.html" title>
                        {post.id}
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
        <input type="hidden" value="1" name="post_id" />
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
