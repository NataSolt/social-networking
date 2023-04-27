const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 99,
    currentPage:  1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
   case FOLLOW:
return {
  ...state, 
  users: state.users.map(user => {
    if(user.id === action.ueserId) {
      return {...user, followed: true}
    }
    return user
  })
}
   case UNFOLLOW:
    return {
      ...state, 
      users: state.users.map(user => {
        if(user.id === action.ueserId) {
          return {...user, followed: false}
        }
        return user
      })
    }
    case SET_USERS:
  
      return {...state, users: [...action.users] }

      case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage }

      case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.count }

      case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching }

    default:
      return state;
  }
};

export const follow = (ueserId)=> {
    return {
        type: FOLLOW, ueserId
    }
}
export const unfollow = (ueserId)=> {
    return {
        type: UNFOLLOW, ueserId
    }
}
export const setUsers = (users)=> {
  
  return {
    type: SET_USERS, users
  }
}
  export const setCurrentPage = (currentPage)=> {
    return {
      type: SET_CURRENT_PAGE, currentPage
    }
  }
  export const setUsersTotalCount = (totalUsersCount)=> {
    return {
      type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
  }

  export const toggleIsFetching = (isFetching)=> {
    return {
      type: TOGGLE_IS_FETCHING, isFetching
    }
  }

export default usersReducer;