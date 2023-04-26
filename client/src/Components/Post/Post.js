import React from 'react';
import './Post.css';
import Comment from '../../Img/comment.png';
import Share from '../../Img/share.png';
import Like from '../../Img/like.png';
import Notlike from '../../Img/notlike.png';

const Post = ({ data }) => {
  return (
    <div className='Post'>
      <img src={data.img} alt="" />

      <div className="postReact">
        <img src={data.liked ? Like : Notlike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{color: "var(--gray)", fontSize: '14px'}}>{data.likes} likes</span>

      <div className="detail">
        <span> <b>{data.name}</b> </span>
        <span>{data.desc}</span>
      </div>

    </div>
  )
}

export default Post