import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../../../database/prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<any>;
}
