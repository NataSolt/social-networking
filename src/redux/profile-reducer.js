import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 2, message: 'it is my first post', like: 10},
        {id: 2, message: 'it is my', like: 5},
        {id: 2, message: 'Yo', like: 17},
      ],
      newPostText: 'kama',
      profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPost = {
        id: 5,
        message: state.newPostText,
        // avatar: 'https://otkritkis.com/wp-content/uploads/2021/11/Krasivye-3-1-730x583-1.jpg' ,
        like: 0,
      };
      return {...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
      
    }
    case UPDATE_NEW_POST_TEXT:{
     return {...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE:{
      return {...state,
         profile: action.profile,
       };
     }

    default:
      return state;
  }
};

export const addPostActionCreator = ()=> {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text)=> {
    return {
        type: UPDATE_NEW_POST_TEXT,
         newText: text
    }
}
export const setUserProfile = (profile)=> ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId)=> (dispatch) => {
  usersAPI.getProfile(userId)
  .then((res) => {
    dispatch(setUserProfile(res.data));
  });
}


export default profileReducer;
