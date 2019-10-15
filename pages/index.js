import React, { useState } from 'react';

export default function Blog() {
  const [getPosts, setPosts] = useState([
    { id: '1', image: '/profile-1.jpg', title: 'Paulo Souza ', description: 'vizualizou seu perfil', time: 'hace 15 horas' },
    { id: '2', image: '/profile-2.jpg', title: 'Paulo Souza', description: 'comentou no seu post', time: 'hace 15 horas' },
    { id: '3', image: '/profile-3.jpg', title: 'Pet Shop do Paulo', description: 'vizualizou seu perfil', time: 'hace 15 horas' },
    { id: '4', image: '/profile-1.jpg', title: 'Paulo Souza', description: 'vizualizou seu perfil', time: 'hace 15 horas' },
    { id: '5', image: '/profile-2.jpg', title: 'Paulo Souza', description: 'vizualizou seu perfil', time: 'hace 15 horas' },
    { id: '6', image: '/profile-3.jpg', title: 'Pet Shop do Paulo', description: 'vizualizou seu perfil', time: 'hace 15 horas' },
    { id: '7', image: '/profile-1.jpg', title: 'Paulo Souza', description: 'vizualizou seu perfil', time: 'hace 15 horas' },
    { id: '8', image: '/profile-3.jpg', title: 'Paulo Souza', description: 'vizualizou seu perfil', time: 'hace 15 horas' },
  ]);
  return (
    <div style={main}>
      <ul style={ulStyle} >
        {getPosts.map(post => (
          <li key={post.id} style={listStyle}>
            <div style={imgLeft}>
              <img
                src={post.image} style={userPhoto} />
            </div>
            <div style={userContent}>
              <p style={userInfo}>
                <span style={nameStyle}>
                  {post.title}
                </span> {post.description}</p>
              <p style={timeStyle}>{post.time}</p>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}
const main = {
  margin: '-8px' 
}
const ulStyle = {
  listStyleType: 'none',
  padding: '0px'
};
const listStyle = {
  display: '-webkit-box',
  padding: '1rem 1rem',
  listStyle: 'none',
  borderBottom: '1px solid #CDCDCD',
}
const imgLeft = {
  width: '3rem',
  gridColumn: 'auto',
  mFflexPreferredSize: 'auto',
  flexBasis: 'auto',
  webkitBoxFlex: '0',
  msFlexPositive: '0',
  flexGrow: '0',
  msFlexNegative: '0',
  flexShrink: '0',
  msGridRow: '1',
  gridRow: '1',
  margin: '0 1rem 0 0',
}
const userPhoto = {
  display: 'inline-block',
  verticalAlign: 'middle',
  height: '3rem',
  width: '3rem',
  margin: '0 0.5rem 0 0',
  borderRadius: '50%',
  maxWidth: '100%',
}
const userContent = {
  msFlexPreferredSize: 'auto',
  flexBasis: 'auto',
  webkitBoxFlex: '1',
  msFlexPositive: '1',
  flexGrow: '1',
  msFlexNegative: '1',
  flexShrink: '1',
  msGridRow: '1',
  gridRow: '1',
  transform: 'translate(5px, 5px)',
  gridColumn: 'span 9',
}
const userInfo = {
  margin: '0.15rem 0 0'
}
const nameStyle = {
  fontWeight: '600',
}
const timeStyle = {
  margin: '0',
  color: '#9da4ae'
}