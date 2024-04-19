import { Body, Controller, Post } from '@nestjs/common';
import { BoardService } from 'apps/domain/board/board.service';
import { CreateBoardDto } from 'apps/domain/board/dto/create-board.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @ApiOperation({
    operationId: 'createBoard',
    summary: '게시물 생성',
    tags: ['board'],
  })
  @Post('board')
  async createBoard(@Body() dto: CreateBoardDto) {
    return await this.boardService.createBoard(dto);
  }
}
