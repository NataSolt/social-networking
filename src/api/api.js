import axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a61a46b6-1518-40dc-a765-89312ddd956a",
  },
});
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
          .get(`users?page=${currentPage}&count=${pageSize}`)
          .then((res) => {
            return res.data;
          });
      },
      unfollow(userId) {
        return instance.delete( `follow/${userId}`)
      },
      follow(userId){
        return instance.post( `follow/${userId}`)
      },
      getProfile(userId) {
       return instance.get( `profile/` + userId)
      }
 }

 export const authAPI = {
  getMe(){
   return instance.get(`auth/me`)
  }
}
