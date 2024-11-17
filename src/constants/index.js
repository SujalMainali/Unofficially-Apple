// Here we will export all the constants that we will use in the project
// The contents involve various raw text data
import React from "react";
import { MdOutlinePlayCircle } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

const NavbarList = ['Store', 'Mac', 'iPhone', 'Support'];

const highlightsTags=[
    ['Watch the film',React.createElement(MdOutlinePlayCircle)]
    ,['Watch the event',React.createElement(FaAngleRight)]
]
 const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: '',
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: ''    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: ''
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: ''
    },
  ];

export { NavbarList, highlightsTags,models };

