import { RegisterUserDto } from "../dtos/auth/registerUser.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class AuthDataSource {
  //Todo
  //abstract login() {}

  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
