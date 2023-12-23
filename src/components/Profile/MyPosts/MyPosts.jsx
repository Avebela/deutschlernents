import React, { memo } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {
  required,
  maxLengthCreater,
} from "../../../utils/validators/validators";
import { Textarea } from "../../Commen/FormControls/FormControls";
import { componentDidUpdate } from "react";

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
//window.props = [];
//class MyPosts extends React.Component {
// class MyPosts extends React.PureComponent {
// componentDidUpdate(pervProps, pervState, snapshot) {
//   console.log("render Post");
// }
// componentDidMount() {
//   setTimeout(() => {
//     this.setState({ a: 12 });
//   }, 3000);
// }
// shouldComponentUpdate(nextProps, nextState) {
//   // return false;
//   return nextProps !== this.props || nextState !== this.state;
//  все просто, false получаем в том случае, если предыдущие пропсы
// и нынешние равны,
//т.е. и this.props и nextProps ссылаются на один и тот же объект,
//он не изменился, следовательно перерисовки не будет.
//}
//   console.log("render Post");
//render()
const MyPosts = memo((props) => {
  //console.log("render Post");
  // window.props.push(props);

  // console.log(props);

  let postsElements =
    // props.posts
    // имьютабельность..компонене нельзя мутировать стейт
    // reverse , splice мутируют массив... slice не мутирует
    // задача перевернуть массив. компоненте можно изменять только копию массива
    [...props.posts].reverse().map((p) => (
      <Post
        message={p.message}
        // key={p.id}
        like={p.like}
      />
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
});
//}

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
