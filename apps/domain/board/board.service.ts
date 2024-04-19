import { Injectable } from '@nestjs/common';
import { BoardRepository } from 'apps/domain/board/board.repository';
import { CreateBoardDto } from 'apps/domain/board/dto/create-board.dto';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async createBoard(dto: CreateBoardDto) {
    await this.boardRepository.createBoard(dto);
  }
}
