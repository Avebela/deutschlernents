import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };
  return (
    <div>
      <button onClick={getUsers}> Get Users </button>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                className={s.userPhoto}
                src={u.photos.small != null ? u.photos.small : userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;

// props.setUsers([
//   {
//     id: 1,
//     photoURL:
//       "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
//     followed: true,
//     fullName: "Nina",
//     status: "I'm boss",
//     location: { city: "Minsk", country: "Belarus" },
//   },
//   {
//     id: 2,
//     photoURL:
//       "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
//     followed: true,
//     fullName: "Diana",
//     status: "I'm boss",
//     location: { city: "Moscow", country: "Russia" },
//   },
//   {
//     id: 3,
//     photoURL:
//       "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",

//     followed: false,
//     fullName: "Alex",
//     status: "I'm boss",
//     location: { city: "Kiew", country: "Ukraina" },
//   },
//   {
//     id: 4,
//     photoURL:
//       "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",

//     followed: false,
//     fullName: "Demid",
//     status: "I'm boss",
//     location: { city: "Köln", country: "Germany" },
//   },
// ]);
