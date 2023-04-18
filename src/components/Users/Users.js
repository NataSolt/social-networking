import React from "react";
import './Users.css';
import  axios from "axios";
import image from './../../images/1617045949_35-p-dmitrii-nagiev-39.jpg'

class Users extends React.Component {

    getUsers = () => {
        if(this.props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(res => {
        this.props.setUsers(res.data.items)
    })
}}

    render () {
        return <div>
    <button onClick={this.getUsers}>Get Users</button>
        {
            this.props.users.map((elem,index) => < div key={index} className="users">
            
                <div className="users__left-box">
                    <img className="users__photo" src={elem.photos.small !=null ? elem.photos.small: image } alt="фото"/>
                    {elem.followed ? 
                    <button className="users__button" onClick={()=>{this.props.unfollow(elem.id)}}>unfollow</button> :
                     <button className="users__button" onClick={()=>{this.props.follow(elem.id)}}>follow</button>}
                    
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

}

export default Users;