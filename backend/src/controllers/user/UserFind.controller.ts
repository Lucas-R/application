import UserFindService from "../../services/user/UserFind.service";

class UserFindController {
    async handle() {
        return await new UserFindService().execute();
    }
}

export default UserFindController;