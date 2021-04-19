import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

async createUser (arguments) {
    
}

async getAllUSers (arguments) {
    
}

}
