import {
  AuthDataSource,
  CustomError,
  RegisterUserDto,
  UserEntity,
} from "../../domain";

export class AuthDataSourceImpl implements AuthDataSource {
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;

    try {
      //todo:
      /**
       * TODO
       * 1.- verificar correo
       * 2.- Hash contraseña
       * 3.- Mapear respuesta a la entidad
       */

      return new UserEntity("1", name, email, password, "ADMIN");
    } catch (error) {
      if (error instanceof CustomError) throw error;

      throw CustomError.internalServer();
    }
  }
}
