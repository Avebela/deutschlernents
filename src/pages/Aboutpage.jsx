import { useAppSelector } from "../hooks/hook";
import React from "react";
//import { useRef } from "react";

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);
  //const aceEditorRef = useRef();
  if (favourites.length === 0) return <p className="text-center ">No items</p>;

  return (
    <div className="flex justify-left pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites.map((f) => (
          <li key={f}>
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>

    // <div>
    //   {/* <h1>О нас</h1>
    //   <p>Сайт для подготовки к экзамену А1</p> */}
    //   <ul className="list-none">
    //     {favourites.map((f) => (
    //       <li key={f}>
    //         <a ref={f}>{f} </a>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export { FavouritesPage };
