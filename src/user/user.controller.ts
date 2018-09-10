import { Controller, Get, Param, Post, Body } from '@nestjs/common';

import { UserDto } from '../dto/user.dto';
import { UserService } from './user.service';
import { ApiUseTags, ApiOkResponse, ApiCreatedResponse, ApiBadRequestResponse, ApiImplicitParam } from '@nestjs/swagger';
import { ApiException } from 'shared/api.exception.module';

@ApiUseTags('user')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    @ApiOkResponse({ type: UserDto, isArray: true })
    @ApiBadRequestResponse({ type: ApiException })
    async getAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }

    @Get(':email')
    @ApiOkResponse({ type: UserDto })
    @ApiBadRequestResponse({ type: ApiException })
    @ApiImplicitParam({ name: 'email', required: true })
    async Get(@Param('email') email): Promise<any> {
        return this.userService.findByEmail(email);
    }

    @Post()
    @ApiCreatedResponse({ type: UserDto })
    @ApiBadRequestResponse({ type: ApiException })
    async Create(@Body() userDto: UserDto): Promise<UserDto> {
        return await this.userService.create(userDto);
    }

}