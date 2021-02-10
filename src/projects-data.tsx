import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';


//images 

//Post template

import temp1img from './assets/images/lunch_atop_askyscraper.jpg';
import temp1img2 from './assets/images/img-2.jpg';

import temp2Img from './assets/images/img-2.jpg';


//dodici 
import ProjCardImgDodici from './assets/images/posts-imgs/dodici/front-projects--dodici.jpg';

//esse
import ProjCardImgEsse from './assets/images/posts-imgs/esse/front-projects--esse.jpg';


//GrandeOmega
import ProjCardImgGo from './assets/images/posts-imgs/grandeomega/front-projects--grandeomega.png';





export type cardData = {
  
    url : string
    image_url : string,
    id : string
  
    category : string
    post_title : string
    is_pinned : boolean
  
    post_card_tag_1 : string
    post_card_tag_2 : string
    post_card_tag_3 : string
    post_card_tag_4 : string
    
    post_short_description : string
    post_long_description : string
  
    post_quote : string
    author : string
  
    post_text_1_title : string
    post_text_1 : string
  
    post_text_big : string
  
    post_img_1 : string
    link: string
  }

  

export let data : cardData[] = [
    {     
      url : "/portfolio/projects/grandeomega",
      image_url : ProjCardImgGo,
      id:"GrandeOmega",
  
      category : "Development", 
      post_title : "_post_go_title", 
      is_pinned : false, 
  
      post_card_tag_1: "_post_card_tag_html",
      post_card_tag_2: "_post_card_tag_css",
      post_card_tag_3: "_post_card_tag_react",
      post_card_tag_4: "_post_card_tag_js",
  
      post_short_description: "_post_go_short_desc",
      post_long_description:"_post_go_long_desc",
      
      post_quote: "",
      author:"Author Name",
  
      post_text_1_title: "_post_2_text_1_title",
      post_text_1: "_post_2_text_1",
      post_text_big: "_post_text_big",
  
      post_img_1:" ",
      link : "",
    },
    {     
      url : "/portfolio/projects/dodici",
      image_url : ProjCardImgDodici,
      id:"dodici",
  
      category : "Wordpress", 
      post_title : "_post_dodici_title", 
      is_pinned : false, 
  
      post_card_tag_1: "_post_card_tag_php",
      post_card_tag_2: "_post_card_tag_html",
      post_card_tag_3: "_post_card_tag_css",
      post_card_tag_4: "_post_card_tag_wp",
  
      post_short_description: "_post_dodici_short_desc",
      post_long_description:"_post_dodici_long_desc",
      
      post_quote: "",
      author:"Author Name",
  
      post_text_1_title: "_post_2_text_1_title",
      post_text_1: "_post_2_text_1",
      post_text_big: "_post_text_big",
  
      post_img_1:" ",
      link : "",
    },
    { 
      url : "/portfolio/projects/esse",
      image_url : ProjCardImgEsse,
      id:"esse",
  
      category : "Wordpress", 
      post_title : "_post_esse_title", 
      is_pinned : false, 
  
      post_card_tag_1: "_post_card_tag_php",
      post_card_tag_2: "_post_card_tag_html",
      post_card_tag_3: "_post_card_tag_css",
      post_card_tag_4: "_post_card_tag_js",
  
      post_long_description:"_post_dodici_long_desc",
      post_short_description: "_post_esse_short_desc",
      
      post_quote: "",
      author:"Author Name",
  
      post_text_1_title: "_post_2_text_1_title",
      post_text_1: "_post_2_text_1",
      post_text_big: "_post_text_big",
  
      post_img_1:" ",
      link : "",
  
  
    }
    // { 
    //   url : "/portfolio/projects/post_template",
    //   image_url : temp1img,
    //   id:"post_template",
  
    //   category : "_category_development", 
    //   post_title : "_post_2_title", 
    //   is_pinned : true, 
  
    //   post_card_tag_1: "_post_card_tag_fluentui",
    //   post_card_tag_2: "_post_card_tag_react",
    //   post_card_tag_3: "_post_card_tag_css",
    //   post_card_tag_4: "_post_card_tag_js",
  
    //   post_short_description: "_post_2_short_desc",
    //   post_long_description: "_post_2_long_desc",
  
    //   post_quote: "_post_2_quote",
    //   author:"Vincent van Gogh",
  
    //   post_text_1_title: "_post_2_text_1_title",
    //   post_text_1: "_post_2_text_1",
    //   post_text_big: "_post_text_big",
  
    //   post_img_1: temp1img2,
    //   link : "www.google.com",
  
    // },
    // { 
    //   url : "/portfolio/projects/post_template2",
    //   image_url : temp2Img,
    //   id:"post_template2",
      
    //   category : "_category_development", 
    //   post_title : "_post_4_title", 
    //   is_pinned : false, 
  
    //   post_card_tag_1: "_post_card_tag_html",
    //   post_card_tag_2: "_post_card_tag_react",
    //   post_card_tag_3: "_post_card_tag_js",
    //   post_card_tag_4: "_post_card_tag_wp",
  
    //   post_long_description:"",
    //   post_short_description: "_post_4_short_desc",
  
    //   post_quote: "hi",
    //   author:"Author Name",
  
    //   post_text_1_title: "_post_2_text_1_title",
    //   post_text_1: "_post_2_text_1",
    //   post_text_big: "_post_text_big",
  
    //   post_img_1: temp2Img,
    //   link : "www.google.com",
      
    // }
  ]