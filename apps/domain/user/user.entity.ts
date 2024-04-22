import { TypeOrmEntity } from 'apps/domain/common/typeorm.entity';
import { Column, Entity } from 'typeorm';
import { Role } from 'apps/infrastructure/common/enum';

@Entity()
export class User extends TypeOrmEntity {
  @Column({ comment: '이메일' })
  email: string;

  @Column({ comment: '비밀번호 ' })
  password: string;

  @Column({ type: 'enum', enum: Role, comment: '유저ROLE' })
  role: Role;

  @Column({ comment: '개인정보처리동의' })
  isPrivacyPolicyAgreed: boolean;

  @Column({ comment: '마케팅동의' })
  isMarketingAgreed: boolean;
}
