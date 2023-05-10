import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProfileStyles.css'
import '../styles/ChatStyles.css'

export default function MessagesScreen() {
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
                <img className='icon-img-side-menu' src={require('../images/news.png')} />
                <b className='menu-text'>Новости</b>
              </Link>
            </div>
            <div className='menu-tile'>
              <Link to="/messages" className='link-router'>
                <img className='icon-img-side-menu-chosen' src={require('../images/chat.png')} />
                <b className='menu-text-chosen'>Сообщения</b>
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
            <h1>Мои чаты</h1>
            <div className='chats-container'>
              <div className='chat-container'>
                <Link to="/chat" className='link-router-chat'>
                  <img className='chat-photo' src={require('../images/profile.png')} />
                  <div className='chat-info-container'>
                    <h3 className='chat-name'>Андрей Степанов</h3>
                    <h3 className='chat-message'>Привет! Как ты?</h3>
                  </div>
                </Link>
                <div className='line' />
              </div>
              <div className='chat-container'>
                <Link to="/chat" className='link-router-chat'>
                  <img className='chat-photo' src={require('../images/profile.png')} />
                  <div className='chat-info-container'>
                    <h3 className='chat-name'>Инна Резунчик</h3>
                    <h3 className='chat-message'>Я сегодня нашла много новой и полезной информации.</h3>
                    {/* numberOfLines={2} ellipsizeMode="tail" */}
                    {/* {i.description.slice(0, MAXLENGTH)}{(i.description.length > MAXLENGTH) ? '...' : ''} */}
                  </div>
                </Link>
                <div className='line' />
              </div>
              <div className='chat-container'>
                <Link to="/chat" className='link-router-chat'>
                  <img className='chat-photo' src={require('../images/profile.png')} />
                  <div className='chat-info-container'>
                    <h3 className='chat-name'>Алиса Евстафьева</h3>
                    <h3 className='chat-message'>ОООООО</h3>
                    {/* numberOfLines={2} ellipsizeMode="tail" */}
                    {/* {i.description.slice(0, MAXLENGTH)}{(i.description.length > MAXLENGTH) ? '...' : ''} */}
                  </div>
                </Link>
                <div className='line' />
              </div>
              <div className='chat-container'>
                <Link to="/chat" className='link-router-chat'>
                  <img className='chat-photo' src={require('../images/profile.png')} />
                  <div className='chat-info-container'>
                    <h3 className='chat-name'>Ирина Лебедева</h3>
                    <h3 className='chat-message'>ХАХАХХАХАХХАХХАХАХХАХ</h3>
                    {/* numberOfLines={2} ellipsizeMode="tail" */}
                    {/* {i.description.slice(0, MAXLENGTH)}{(i.description.length > MAXLENGTH) ? '...' : ''} */}
                  </div>
                </Link>
                <div className='line' />
              </div>
              <div className='chat-container'>
                <Link to="/chat" className='link-router-chat'>
                  <img className='chat-photo' src={require('../images/profile.png')} />
                  <div className='chat-info-container'>
                    <h3 className='chat-name'>Степан Васильев</h3>
                    <h3 className='chat-message'>Смотри</h3>
                    {/* numberOfLines={2} ellipsizeMode="tail" */}
                    {/* {i.description.slice(0, MAXLENGTH)}{(i.description.length > MAXLENGTH) ? '...' : ''} */}
                  </div>
                </Link>
                <div className='line' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}