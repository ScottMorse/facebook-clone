import React from 'react';

import StyledHeader from '../styles/StyledHeader';

export default () => (
  <StyledHeader>
    <div className="sect">
      <div className="logo" />
      <div className="line-hor" />
      <div className="title" />
    </div>
    <div className="sect">
      <a className="likes-link right-link" href="/mylikes">
        Likes
      </a>
      <a className="books-link right-link" href="/mybookmarks">
        Bookmarks
      </a>
      <a className="profile-link right-link" href="/">
        Profile
      </a>
    </div>
  </StyledHeader>
);
