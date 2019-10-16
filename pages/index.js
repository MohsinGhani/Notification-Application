import React, { useState } from 'react';
import {Wrapper, UnorderList, List, Image, LeftImage, UserContent, UserInfo, Title, Time} from './styledComponent'
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
    <Wrapper>
      <UnorderList >
        {getPosts.map(post => (
          <List key={post.id} >
            <LeftImage >
              <Image
                src={post.image}/>
            </LeftImage >
            <UserContent>
              <UserInfo>
                <Title>
                  {post.title}
                </Title> {post.description}</UserInfo>
              <Time>{post.time}</Time>
            </UserContent>
          </List>
        ))}
      </UnorderList>

    </Wrapper>
  );
}

