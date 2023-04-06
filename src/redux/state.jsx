let renderEntireTree =()=> {
    console.log('state changed')
}
let state ={
    navbarPage : {
        friendsData: [
            {id: 1, name: 'Sveta', avatar:' https://amiel.club/uploads/posts/2022-03/1647748258_34-amiel-club-p-multyashnie-kartinki-na-avatarku-35.jpg' },
             {id: 2, name: 'Dima', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg'},
             {id: 3, name: 'Andrew', avatar: 'https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg'},
         
     ],
     },
    profilePage :{
        postData: [
            {id: 1, message: 'Hi, how are you?', like: 15},
            {id: 2, message: 'it is my first post', like: 10},
            {id: 2, message: 'it is my', like: 5},
            {id: 2, message: 'Yo', like: 17},
          ],
          newPostText: 'kama'
    },
    dialogsPage: {
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
        newMessageText: 'It\'s me'
       
    },
     
}
export const addPost =()=>{
    let newPost ={
        id: 5,
        message: state.profilePage.newPostText,
        // avatar: 'https://otkritkis.com/wp-content/uploads/2021/11/Krasivye-3-1-730x583-1.jpg' ,
        like: 0,
    }   
     state.profilePage.postData.push(newPost);
     state.profilePage.newPostText = '';
     renderEntireTree(state);
}

export const updateNewPostText =(newText)=>{
     state.profilePage.newPostText = newText;
     renderEntireTree(state);
}

export const addMessage =()=>{
    let newMessage ={
        id: 6,
        message: state.dialogsPage.newMessageText,
        avatar: 'https://otkritkis.com/wp-content/uploads/2021/11/Krasivye-3-1-730x583-1.jpg' ,
        
    }   
     state.dialogsPage.messagesData.push(newMessage);
     state.dialogsPage.newMessageText = '';
     renderEntireTree(state);
}

export const updateNewMessageText =(newText)=>{
     state.dialogsPage.newMessageText = newText;
     renderEntireTree(state);
}

export const subscribe = (observer)=>{
    renderEntireTree= observer;
}
export default state;