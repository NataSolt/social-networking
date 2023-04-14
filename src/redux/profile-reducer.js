const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 2, message: 'it is my first post', like: 10},
        {id: 2, message: 'it is my', like: 5},
        {id: 2, message: 'Yo', like: 17},
      ],
      newPostText: 'kama'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        // avatar: 'https://otkritkis.com/wp-content/uploads/2021/11/Krasivye-3-1-730x583-1.jpg' ,
        like: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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

export default profileReducer;
