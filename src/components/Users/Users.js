import React from "react";
import "./Users.css";
import image from "./../../images/1617045949_35-p-dmitrii-nagiev-39.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

function Users(props) {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className="users__pages">
        {pages.map((page, index) => {
          return (
            <span
              key={index}
              className={props.currentPage === page ? "users__page" : ""}
              onClick={(e) => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((elem) => (
        <div key={elem.id} className="users">
          <div className="users__left-box">
            <NavLink to={"/profile/" + elem.id}>
              <img
                className="users__photo"
                src={elem.photos.small != null ? elem.photos.small : image}
                alt="фото"
              />
            </NavLink>
            {elem.followed ? (
              <button
                className="users__button" disabled={props.followingInProgress.includes(elem.id)}
                onClick={() => {
                  props.toggleIsFollowingProgress(true, elem.id)
          //         usersAPI.deleteFollow(elem.id, props.unfollow)
          //         .then((data)=> {
          //           if (data.resultCode === 0) {
          //   props.unfollow(elem.id);
          // }
          //         })
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${elem.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "a61a46b6-1518-40dc-a765-89312ddd956a",
                        },
                      }
                    )
                    .then((res) => {
                      if (res.data.resultCode === 0) {
                        props.unfollow(elem.id);
                      }
                      props.toggleIsFollowingProgress(false, elem.id)
                    });
                }}
              >
                follow
              </button>
            ) : (
              <button
                className="users__button" disabled={props.followingInProgress.includes(elem.id)}
                onClick={() => {
                  props.toggleIsFollowingProgress(true,  elem.id)
            //       usersAPI.deleteFollow(elem.id, props.follow)
            //       .then((data)=> {
            //         if (data.resultCode === 0) {
            // props.follow(elem.id);
            //         }
            //       })
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${elem.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "a61a46b6-1518-40dc-a765-89312ddd956a",
                        },
                      }
                    )
                    .then((res) => {
                      if (res.data.resultCode === 0) {
                        props.follow(elem.id);
                      }
                      props.toggleIsFollowingProgress(false,  elem.id)
                      // props.follow(elem.id)
                    });
                }}
              >
                unfollow
              </button>
            )}
          </div>
          <div className="users__right-box">
            <div className="users__container-left">
              <div>{elem.name}</div>
              <div>{elem.status}</div>
            </div>
            <div className="users__container-right">
              <div>{"elem.location.city"}</div>
              <div>{"elem.location.country"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
