import LogoutService from "../../services/auth/Logout.service";

class LogoutController {
    handle() {
        return new LogoutService().execute();
    }
}

export default LogoutController;