const ADD_MESSAGE = 'ADD-MESSAGE';// SEND_MESSAGE
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const  dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage ={
                id: 6,
                message: state.newMessageText,
                avatar: 'https://otkritkis.com/wp-content/uploads/2021/11/Krasivye-3-1-730x583-1.jpg' ,
                
            }   
             state.messagesData.push(newMessage);
             state.newMessageText = '';
             return state;
             case UPDATE_NEW_MESSAGE_TEXT:
                state.newMessageText = action.newText;
                return state;
                default:
                    return state; 
    }
    }

    export const addMessageActionCreator = ()=> {
        return {
            type: ADD_MESSAGE
        }
    }
    export const updateNewMessageTextActionCreator = (text)=> { //body
        return {
            type: UPDATE_NEW_MESSAGE_TEXT,
             newText: text
        }
    }


export default dialogsReducer;