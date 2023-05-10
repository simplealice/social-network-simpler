import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProfileStyles.css'
import '../styles/FriendsStyles.css'

export default function FriendsScreen() {
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
                <img className='icon-img-side-menu' src={require('../images/chat.png')} />
                <b className='menu-text'>Сообщения</b>
              </Link>
            </div>
            <div className='menu-tile'>
              <Link to="/friends" className='link-router'>
                <img className='icon-img-side-menu-chosen' src={require('../images/friends.png')} />
                <b className='menu-text-chosen'>Друзья</b>
              </Link>
            </div>
          </div>
          <div className='profile-container'>
            <h1>Мои друзья</h1>
            <div className='chats-container'>
              <div className='friend-container-full'>
                <div className='friend-container'>
                  <img className='friend-photo' src={require('../images/profile.png')} />
                  <div className='friend-info-container'>
                    <Link to="/profile" className='link-router-friend'>
                      <h3 className='chat-name'>Андрей Степанов</h3>
                    </Link>
                    <h3 className='chat-message'>НИУ ВШЭ</h3>
                    <Link to="/chat" className='link-router-message'>Написать сообщение</Link>
                  </div>
                </div>
                <div className='line' />
              </div>

              <div className='friend-container-full'>
                <div className='friend-container'>
                  <img className='friend-photo' src={require('../images/profile.png')} />
                  <div className='friend-info-container'>
                    <Link to="/profile" className='link-router-friend'>
                      <h3 className='chat-name'>Инна Резунчик</h3>
                    </Link>
                    <h3 className='chat-message'>НИУ ВШЭ</h3>
                    <Link to="/chat" className='link-router-message'>Написать сообщение</Link>
                  </div>
                </div>
                <div className='line' />
              </div>

              <div className='friend-container-full'>
                <div className='friend-container'>
                  <img className='friend-photo' src={require('../images/profile.png')} />
                  <div className='friend-info-container'>
                    <Link to="/profile" className='link-router-friend'>
                      <h3 className='chat-name'>Алиса Евстафьева</h3>
                    </Link>
                    <h3 className='chat-message'>НИУ ВШЭ</h3>
                    <Link to="/chat" className='link-router-message'>Написать сообщение</Link>
                  </div>
                </div>
                <div className='line' />
              </div>

              <div className='friend-container-full'>
                <div className='friend-container'>
                  <img className='friend-photo' src={require('../images/profile.png')} />
                  <div className='friend-info-container'>
                    <Link to="/profile" className='link-router-friend'>
                      <h3 className='chat-name'>Степан Васильев</h3>
                    </Link>
                    <h3 className='chat-message'>МГТУ им. Баумана</h3>
                    <Link to="/chat" className='link-router-message'>Написать сообщение</Link>
                  </div>
                </div>
                <div className='line' />
              </div>

              <div className='friend-container-full'>
                <div className='friend-container'>
                  <img className='friend-photo' src={require('../images/profile.png')} />
                  <div className='friend-info-container'>
                    <Link to="/profile" className='link-router-friend'>
                      <h3 className='chat-name'>Ирина Лебедева</h3>
                    </Link>
                    <h3 className='chat-message'>МГУ</h3>
                    <Link to="/chat" className='link-router-message'>Написать сообщение</Link>
                  </div>
                </div>
                <div className='line' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}