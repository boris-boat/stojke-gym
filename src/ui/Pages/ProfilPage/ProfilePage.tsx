import React from "react";
import "./ProfilePage.styles.css";
export const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-page-navbar">
        <input type="text" className="search" />
        <div className="add-new-user-button">Add new user</div>
      </div>
      <div className="profile-page-content">
        <div className="user-list">
          <div className="user">
            <div className="user-image"></div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
