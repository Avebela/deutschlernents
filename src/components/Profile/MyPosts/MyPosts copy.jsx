import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {
  required,
  maxLengthCreater,
} from "../../../utils/validators/validators";
import { Textarea } from "../../Commen/FormControls/FormControls";

const maxLength10 = maxLengthCreater(10);

let MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={"Enter your post"}
        name={"newPostText"}
        // component={"textarea"}
        component={Textarea}
        validate={[required, maxLength10]}
        // onChange={onPostChange}
        // ref={newPostElement}
        // value={props.newPostText}
      />
      <div>
        <button>
          {/* onClick={onAddPost} */}
          Add post
        </button>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({
  form: "posts",
})(MyPostsForm);

const MyPosts = (props) => {
  console.log("render Post");
  //shouldComponentUpdate

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} key={p.id} like={p.like} />
  ));

  //let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
    // alert(values.newPostText);
  };

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.onPostChange(text);
  // };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <div>
        Привет!
        <MyPostsReduxForm onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

{
  /* <textarea id="New post"></textarea> */
}
{
  /* {props.message} */
}
{
  /* {doubles} */
}
{
  /* <Post message="5" like="7" />
        <Post message="10" like="17" /> */
}
