import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {

    @ApiModelProperty()
    @IsNotEmpty()
    public firstName: string;

    @ApiModelProperty()
    @IsNotEmpty()
    public lastName: string;

    @ApiModelProperty()
    @IsEmail()
    public email: string;
  }