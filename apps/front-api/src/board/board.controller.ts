import { Controller, Post } from '@nestjs/common';
import { BoardService } from 'apps/domain/board/board.service';

@Controller()
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @Post('board')
  async createBoard() {
    return await this.boardService.createBoard('title', 'description');
  }
}
