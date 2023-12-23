import React from "react";
import {
  addPostActionCreater,
  //  updateNewPostTextActionCreater,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";

const MyPostsContainer1 = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreater());
        };

        // let onPostChange = (text) => {
        //   let action = updateNewPostTextActionCreater(text);
        //   store.dispatch(action);
        // };
        return (
          <MyPosts
            // onPostChange={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    //newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreater(newPostText));
    },
    // onPostChange: (text) => {
    //   let action = updateNewPostTextActionCreater(text);
    //   dispatch(action);
    // },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

// let text = newPostElement.current.value;
// props.onPostChange(text);
// newPostElement.current.value = "";

// let addButton = () => {
//   alert("Hei!");
// };
// let addButton = () => {
//   let text = document.getElementById("New post").value;
//   alert(text);
// };
// let numberPost = props.numbers;
// const doubles = numberPost.map((num) => num);
