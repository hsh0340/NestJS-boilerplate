import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @ApiProperty({
    description: '게시물 제목',
    example: '게시물 제목 예시',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: '게시물 내용',
    example: '게시물 내용 예시',
  })
  @IsString()
  content: string;
}
