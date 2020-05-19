import { Todo } from "./types";
import { db } from "../config/firebase";

export const addTodo = (item) => {
  // Add item to firebase
  return (dispatch) => {
    console.log(item);
    db.collection("todos")
      .doc()
      .set(item)
      .then(() => {
        dispatch({
          type: Todo,
          payload: item,
        });
      })
      .catch((err) => {
        return err.message;
      });
  };
};

export const fetchData = () => {
  return (dispatch) => {
    db.collection("todos").onSnapshot((snapshot) => {
      const itemList = [];
      snapshot.docs.forEach((doc) => {
        itemList.push(doc.data());
      });
      console.log(itemList);
      dispatch({
        type: "FETCH_DATA",
        payload: itemList,
      });
    });
  };
};
