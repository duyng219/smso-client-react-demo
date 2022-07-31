import { baseService } from "../../api/baseService";

export class UserService extends baseService {
    constructor() {
        super();
        console.log();
    }
    // login = (dataInfo) => {
    //     return this.post("/api/users/login", dataInfo);
    // };

    // register = (dataInfo) => {
    //     return this.post("/api/users", dataInfo);
    // };

    // getAllUsers = () => {
    //     return this.get("/api/Users");
    // };

    deleteUser = (id) => {
        return this.delete(`/api/Users/${id}`);
    };

    postService = (info) => {
        return this.post(`/api/Services/`, info);
    };
    deleteService = (id) => {
        return this.delete(`/api/Services/${id}`);
    };

    postCategoryService = (info) => {
        return this.post(`/api/ServicesCategory/`, info);
    };
    deleteCategoryService = (id) => {
        return this.delete(`/api/ServicesCategory/${id}`);
    };

    // getOneUser = (id) => {
    //     return this.get(`/api/users/${id}`);
    // };

    // updateUser = (id, dataInfo) => {
    //     return this.put(`/api/users/${id}`, dataInfo);
    // };

    addFriend = (info) => {
        return this.post("/api/Friends",info);
    };
}

export const userService = new UserService();
