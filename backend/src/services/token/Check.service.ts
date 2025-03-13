import { checkToken } from '../../utils/token';

class CheckService {
    execute(token: string) {
        console.log(checkToken(token))
        return checkToken(token);
    }
}

export default CheckService;