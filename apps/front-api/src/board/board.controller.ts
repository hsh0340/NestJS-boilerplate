import { Body, Controller, Post } from '@nestjs/common';
import { BoardService } from 'apps/domain/board/board.service';
import { CreateBoardDto } from 'apps/domain/board/dto/create-board.dto';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { BoardDto } from 'apps/domain/board/dto/board.dto';

@Controller()
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @ApiOperation({
    operationId: 'createBoard',
    summary: '게시물 생성',
    tags: ['board'],
  })
  @ApiCreatedResponse({ type: BoardDto })
  @Post('board')
  async createBoard(@Body() dto: CreateBoardDto): Promise<BoardDto> {
    return await this.boardService.createBoard(dto);
  }
}
