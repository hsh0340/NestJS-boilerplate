import { Body, Controller, Post } from '@nestjs/common';
import { BoardService } from 'apps/domain/board/board.service';
import { CreateBoardDto } from 'apps/domain/board/dto/create-board.dto';

@Controller()
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @Post('board')
  async createBoard(@Body() dto: CreateBoardDto) {
    return await this.boardService.createBoard(dto);
  }
}
