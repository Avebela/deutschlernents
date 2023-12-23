import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    //"API-KEY": "2d5ffe22-7e37-491c-90ef-78f410961ee1",
    "API-KEY": "437ed374-2930-45ca-bbaf-fcd91b73c7ae",
  },
});

const instance2 = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return (
      instance
        .get(`users?page=${currentPage}&count=${pageSize}`)

        // аксиос вернет промис
        .then((response) => {
          return response.data;
        })
    );
  },
  getFollow(userId) {
    return instance.post(`follow/${userId}`);
  },
  getUnfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
    // return instance.get(`profile/` + userId).then((response) => {
    //   return response.data;
    // });
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const typeAPI = {
  getType() {
    // return instance2.get(`type`);
    return (
      //  instance
      //   .get(`users`)
      instance2
        .get(`type`)
        // аксиос вернет промис
        .then((response) => {
          return response.data;
        })
    );
  },
  getTapeOne(type) {
    return instance2.post(`type`, type);
  },
  typeInsert(type) {
    return instance2.post(`type`, type);
  },
  typeUpdate(type) {
    return instance2.put(`type`, type);
  },
  typeDelete() {
    return instance2.delete(`type`);
  },
};

export const headerAPI = {
  getHeader() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  getLogin(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  getLogout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
// export const unFollowAPI = {
//   getUnFollow(userId) {
//     return instance.delete(`follow/${userId}`);
//   },
// };

// export const followAPI = {
//   getFollow(userId) {
//     return instance.post(`follow/${userId}`);
//   },
// };

// .then((response) => {
//   return setUserProfile(response.data);
// })

// {headers: {'Content-type': 'multipart/form-data'}}
// В конечном итоге будет выглядеть так:
// savePhoto(file) {
//         const formData = new FormData();
//         formData.append("image", file)
//         return instance
//             .put(`profile/photo/`, formData);
//     }
