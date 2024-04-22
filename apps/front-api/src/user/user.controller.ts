import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'apps/domain/user/user.service';
import { CreateUserDto } from 'apps/domain/user/dto/create-user.dto';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { UserDto } from 'apps/domain/user/dto/user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    operationId: 'createUser',
    summary: '유저 생성',
    tags: ['user'],
  })
  @ApiCreatedResponse({ type: UserDto })
  @Post('user')
  async createUser(@Body() dto: CreateUserDto): Promise<UserDto> {
    return this.userService.createUser(dto);
  }
}
