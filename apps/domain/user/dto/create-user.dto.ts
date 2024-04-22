import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { Role } from 'apps/infrastructure/common/enum';

export class CreateUserDto {
  @ApiProperty({
    description: '이메일',
    example: 'hsh0340@naver.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: '비밀번호',
    example: 'password',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: '유저ROLE',
    example: 'USER',
  })
  role: Role;

  @ApiProperty({
    description: '개인정보처리동의',
    example: true,
  })
  isPrivacyPolicyAgreed: boolean;

  @ApiProperty({
    description: '마케팅동의',
    example: true,
  })
  isMarketingAgreed: boolean;
}
