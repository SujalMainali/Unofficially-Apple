// Here we will export all the images and other content to be used in the webpage
import React from 'react';

import heroImage from '/assets/images/hero.jpeg';
import heroVideo from '/assets/videos/hero.mp4'; // Example: Add another image
import smallHeroVideo from '/assets/videos/smallHero.mp4'
import highlightVideoFirst from '/assets/videos/highlight-first.mp4'
import highlightVideoSecond from '/assets/videos/hightlight-third.mp4'   
import highlightVideoThird from '/assets/videos/hightlight-sec.mp4'
import highlightVideoFourth from '/assets/videos/hightlight-fourth.mp4'
import { IoPlayOutline } from "react-icons/io5";
import { IoReload } from "react-icons/io5";
import { SlControlPause } from "react-icons/sl";

const videoObjects=[
    {
        id:'1',
        text:['Enter A17 Pro.','Game-changing chip.','Groundbreaking performance.'],
        video:highlightVideoFirst,
        videoDuration:4,
    },
    {
        id:'2',
        text:['Titanium','So strong. So light. So Pro.',' '],
        video:highlightVideoSecond,   
        videoDuration:10,
    },
    {
        id:'3',
        text:['iPhone 15 Pro Max has the','longest optical zoom in','iPhone ever. Far out.'],
        video:highlightVideoThird,   
        videoDuration:10,
    },
    {
        id:'4',
        text:['All-new Action button.','What will yours do?.',''],
        video:highlightVideoFourth,   
        videoDuration:10,
    },
]



const VideoButtons=[React.createElement(IoPlayOutline),React.createElement(SlControlPause),React.createElement(IoReload)];









export { heroImage, heroVideo, smallHeroVideo, videoObjects,VideoButtons }; // Export both images
