import { Exclude } from 'class-transformer';
import { Board } from 'apps/domain/board/board.entity';
import { ApiProperty } from '@nestjs/swagger';

export class BoardDto implements Board {
  @ApiProperty({ description: '게시물 번호', example: 1 })
  id: number;

  @ApiProperty({ description: '게시물 제목', example: '게시물 제목 예시' })
  title: string;

  @ApiProperty({ description: '게시물 내용', example: '게시물 내용 예시' })
  content: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}
