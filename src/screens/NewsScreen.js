import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProfileStyles.css'

export default function NewsScreen() {
  return (
    <>
      <div className='container'>
        <div className='header'>
          <img className='icon-img-header' src={require('../images/icon.png')} />
          <h1 className='title-simpler'>СИМПЛЕР</h1>
        </div>
        <div className='main-container'>
          <div className='side-menu'>

            <div className='menu-tile'>
              <Link to="/profile" className='link-router'>
                <img className='icon-img-side-menu' src={require('../images/profile.png')} />
                <b className='menu-text'>Моя страница</b>
              </Link>
            </div>
            <div className='menu-tile'>
              <Link to="/news" className='link-router'>
                <img className='icon-img-side-menu-chosen' src={require('../images/news.png')} />
                <b className='menu-text-chosen'>Новости</b>
              </Link>
            </div>
            <div className='menu-tile'>
              <Link to="/messages" className='link-router'>
                <img className='icon-img-side-menu' src={require('../images/chat.png')} />
                <b className='menu-text'>Сообщения</b>
              </Link>
            </div>
            <div className='menu-tile'>
              <Link to="/friends" className='link-router'>
                <img className='icon-img-side-menu' src={require('../images/friends.png')} />
                <b className='menu-text'>Друзья</b>
              </Link>
            </div>
          </div>
          <div className='profile-container'>
            <h1>News</h1>
            {/* <div className='photo-container'>
              <img className='profile-photo' src={require('../images/profile.png')} />
              <h2>Перевозникова Алиса</h2>
              <h3 className='menu-text'>Печь хлеб.</h3>
            </div>
            <div>
              <input className='write-post-container' placeholder='Мои идеи...' />
              <button className='add-btn'>&#10010;</button>
              <button className='send-btn'>&#10132;</button>
            </div>
            <div className='post-container'>
              <img className='post-photo' src={require('../images/photo.jpg')} />
              <h3 className='menu-text'>Какое-то очень интересное описание к картинке.</h3>
              <button className='like-btn'>&#9825;</button>
            </div> */}
            <div className='post-container'>
              <img className='post-photo' src={require('../images/photo.jpg')} />
              <h3 className='menu-text'>Какое-то очень интересное описание к картинке.</h3>
              <button className='like-btn'>&#9825;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}