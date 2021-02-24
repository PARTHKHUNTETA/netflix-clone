import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import Nav from "../Nav";
import { selectUser } from "../features/userSlice";
import "./ProfileScreen.css";
function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gidhok4ETDD2Q-_O7PTcHOuLSuUB-nYSmA&usqp=CAU"
            alt="profileImage"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
