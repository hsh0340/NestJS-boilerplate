import { Column, Entity } from 'typeorm';
import { TypeOrmEntity } from 'apps/domain/common/typeorm.entity';

@Entity()
export class Board extends TypeOrmEntity {
  @Column({ length: 1000, comment: '게시글 제목' })
  title: string;

  @Column({ type: 'text', comment: '게시글 내용' })
  content: string;
}
