const ADD_MESSAGE = 'ADD-MESSAGE';// SEND_MESSAGE
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    messagesData: [
        {id: 1, message: 'Hi', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_8_28060932.jpg'},
        {id: 2, message: 'How are you?', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg'},
        {id: 3, message: 'Yo',  avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_8_28060932.jpg'},
        {id: 4, message: 'Yo', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg'},
        {id: 5, message: 'Yo',  avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_8_28060932.jpg'},
        
    ],
    dialogsData: [
        {id: 1, name: 'Dima', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg'},
        {id: 2, name: 'Sveta', avatar:' https://amiel.club/uploads/posts/2022-03/1647748258_34-amiel-club-p-multyashnie-kartinki-na-avatarku-35.jpg' },
        {id: 3, name: 'Andrew', avatar: 'https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg'},
        {id: 4, name: 'Sasha',  avatar: 'https://lifeo.ru/wp-content/uploads/krasivaya-ava-devushke-44.jpg'},
        {id: 5, name: 'Victor',  avatar: 'https://otkritkis.com/wp-content/uploads/2022/06/rcc02.png'},
        {id: 6, name: 'Valera',  avatar: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-chelovek-v-kapyushone-s-palczem-u-gub.jpg'},
        {id: 7, name: 'Oleg',  avatar: 'https://sanada.club/uploads/posts/2021-11/1637749803_59-sanada-club-p-avatar-na-vaiber-62.jpg'},
    ],
    newMessageText: ''
}

const  dialogsReducer = (state = initialState, action) => {
    //let stateCopy = {...state, 
        //messagesData: [...state.messagesData]
    //};
    
    switch(action.type) {
        case ADD_MESSAGE:{
            let newMessage ={
                id: 6,
                message: state.newMessageText,
                avatar: 'https://otkritkis.com/wp-content/uploads/2021/11/Krasivye-3-1-730x583-1.jpg' ,
                
            }   
            return {...state, 
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage] //вместо пуш просто добавляем то что хотим запушить вконец спред оператора
            };
            
             //stateCopy.messagesData.push(newMessage);
             
            }
             case UPDATE_NEW_MESSAGE_TEXT: {
                return {...state, 
                    newMessageText: action.newText
                };
     
               
             }
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