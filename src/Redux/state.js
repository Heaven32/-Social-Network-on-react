let state = { 

    profilePage:{ 
        posts: [
            {id: 1, message: "Hello people!", likesCount:"23"},
            {id: 2, message: "How are you bro?", likesCount:"244"},
            {id: 3, message: "I am fine? thanks", likesCount:"11"},
            {id: 4, message: "Maybe you want ice", likesCount:"223"},
            {id: 5, message: "No, it`s realy cold oll", likesCount:"323"},
            {id: 6, message: "Ha-ha", likesCount:"3"}
        ]
    },
    dialogsPage:{
        dialogs: [
            {id: 1, name: "Jonny"},
            {id: 2, name: "Tom"},
            {id: 3, name: "Dina"},
            {id: 4, name: "Mayke"},
            {id: 5, name: "Jessy"},
            {id: 6, name: "Lina"}
        ],
        messages: [
            {id: 1, message: "Hello people!"},
            {id: 2, message: "How are you bro?"},
            {id: 3, message: "I am fine? thanks"},
            {id: 4, message: "Maybe you want ice"},
            {id: 5, message: "No, it`s realy cold oll"},
            {id: 6, message: "Ha-ha"}
        ]
    },
    sidebar:{
        blockFriends:[
            {id: 1, name: "Jonny"},
            {id: 2, name: "Tom"},
            {id: 3, name: "Dina"}
        ]  
    }
};
export default state;
