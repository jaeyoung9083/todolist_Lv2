import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch({
              type: "ADD_COMMENT",
              payload: {
                id: "고정",
                //uuid또는 shortid 사용 가능
                title: title,
                body: body,
                isDone: false,
              },
            });

            setTitle("");
            setBody("");
          }}
        >
          <div>
            <label>제목</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <label>내용</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={(event) => {
                // dispatch({
                //   type: "ADD_COMMENT",
                //   payload: {
                //     id: "고정",
                //     //uuid또는 shortid 사용 가능
                //     title: { title },
                //     body: body,
                //     isDone: false,
                //   },
                // });
                setBody(event.target.value);
              }}
            />
          </div>
          <button type="submit" onClick={setTitle}>
            추가
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
//깃
