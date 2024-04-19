import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'apps/domain/board/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async createBoard(title: string, content: string) {
    const board = new Board();
    board.title = title;
    board.content = content;
    await this.boardRepository.save(board);
  }
}
