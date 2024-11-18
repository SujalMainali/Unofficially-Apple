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
import FullStoryImg2 from '/assets/images/explore1.jpg'
import FullStoryImg3 from '/assets/images/explore2.jpg'
import FullStoryVideo from '/assets/videos/explore.mp4'
import ChipImg from '/assets/images/chip.jpeg'
import FrameImg from '/assets/images/frame.png'
import FrameVideo from '/assets/videos/frame.mp4'

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









export { heroImage, heroVideo, smallHeroVideo, videoObjects,VideoButtons,FullStoryImg2,FullStoryImg3,FullStoryVideo,ChipImg,FrameImg,FrameVideo}; // Export both images
