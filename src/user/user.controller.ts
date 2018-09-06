import { Controller, Get, Param, Post, Body } from '@nestjs/common';

import { UserDto } from '../dto/user.dto';
import { UserService } from './user.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('user')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    async getAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }

    @Get(':email')
    async Get(@Param('email') email): Promise<any> {
        return this.userService.findByEmail(email);
    }

    @Post()
    async Create(@Body() userDto: UserDto): Promise<UserDto> {
        return await this.userService.create(userDto);
    }

}
