import React from "react";
import './Users.css';
import image from './../../images/1617045949_35-p-dmitrii-nagiev-39.jpg'

function Users(props){
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i<= pagesCount; i++){
        pages.push(i);
    }

    return <div>
    <div className="users__pages">{pages.map((page, index) => {
    return <span key={index} className={props.currentPage === page ? "users__page":''} onClick={(e)=>{props.onPageChanged(page)}}>{page}</span>
    })}
    </div>
         {
             props.users.map((elem,index) => < div key={index} className="users">
             
                 <div className="users__left-box">
                     <img className="users__photo" src={elem.photos.small !=null ? elem.photos.small: image } alt="фото"/>
                     {elem.followed ? 
                     <button className="users__button" onClick={()=>{props.unfollow(elem.id)}}>unfollow</button> :
                      <button className="users__button" onClick={()=>{props.follow(elem.id)}}>follow</button>}
                     
                 </div>
                 <div className="users__right-box">
                     <div className="users__container-left">
                         <div>{elem.name}</div>
                         <div>{elem.status}</div>
                     </div>
                     <div className="users__container-right" >
                         <div>{"elem.location.city"}</div>
                         <div>{"elem.location.country"}</div>
                     </div>
                 </div>
 
             </div>
             )
         }
     </div>
}

export default Users;