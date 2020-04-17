const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {id: 1, followed: true, fullName: "Leo", status:"I am a boss", location: {city: 'Dynam', country:'USA'}},
        {id: 2, followed: false, fullName: "Sara", status:"I am a good people", location: {city: 'Moscow', country:'Russia'}},
        {id: 3, followed: true, fullName: "Sam", status:"I am a student", location: {city: 'Roma', country:'Italy'}},
        {id: 4, followed: false, fullName: "Joshy", status:"I am cook", location: {city: 'Dnepr', country:'Ukraine'}}
    ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id ===action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id ===action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = () => ({type: FOLLOW, userId });
export const unfollowAC = () => ({type: UNFOLLOW, userId });
export const setUsersAC = () => ({type: SET_USERS, users });

export default usersReducer;