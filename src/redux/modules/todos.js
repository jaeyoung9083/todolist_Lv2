const initialState = [
  {
    id: "고정",
    //uuid또는 shortid 사용 가능
    title: "제목",
    body: "내용",
    isDone: false,
  },
  {
    id: "고정 ",
    //uuid또는 shortid 사용 가능
    title: "제목2",
    body: "내용2",
    isDone: true,
  },
  {
    id: "고정 ",
    //uuid또는 shortid 사용 가능
    title: "제목3",
    body: "내용3",
    isDone: false,
  },
  {
    id: "고정 ",
    //uuid또는 shortid 사용 가능
    title: "제목4",
    body: "내용4",
    isDone: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, action.payload];
    case "DELETE_COMMENT":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todos;
