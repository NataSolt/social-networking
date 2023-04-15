//import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
//import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";

// function MyPostsContainer() {
//     return (
//         <StoreContext.Consumer> 
//         {  (store)=> {
//                 let state = store.getState();
//                 let addPost =()=> {
//          store.dispatch(addPostActionCreator());

//         }

//     let onPostChange =(text)=>{
//         let action = updateNewPostTextActionCreator(text)
//         store.dispatch(action);
//     }
//    return <MyPosts  updateNewPostText={onPostChange} addPost={addPost}
//         postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}
//     /> }
//     }
//     </StoreContext.Consumer>
//     )
// }
const mapStateToProps= (state)=> {
return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
}
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: ()=> {
            dispatch(addPostActionCreator());

        },
        updateNewPostText: (text)=> {
            dispatch(updateNewPostTextActionCreator(text));

        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;