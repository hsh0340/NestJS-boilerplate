import { User } from 'apps/domain/user/user.entity';
import { Role } from 'apps/infrastructure/common/enum';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto implements User {
  @ApiProperty({
    description: '유저 ID',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: '이메일',
    example: 'hsh0340@naver.com',
  })
  email: string;

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

  @Exclude()
  password: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}
