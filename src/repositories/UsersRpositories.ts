import {EntityRepository, Repository} from "typeorm"
import { User } from "../entities/User"

@EntityRepository(User)
class UsersRpositories extends Repository<User>{

}

export {UsersRpositories};