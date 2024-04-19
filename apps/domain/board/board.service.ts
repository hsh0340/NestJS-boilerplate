import { Injectable } from '@nestjs/common';
import { BoardRepository } from 'apps/domain/board/board.repository';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async createBoard(title: string, description: string) {
    await this.boardRepository.createBoard(title, description);
  }
}
