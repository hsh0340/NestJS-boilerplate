import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'apps/domain/board/board.entity';
import { Repository } from 'typeorm';
import { CreateBoardDto } from 'apps/domain/board/dto/create-board.dto';

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async createBoard(dto: CreateBoardDto) {
    const board = new Board();
    board.title = dto.title;
    board.content = dto.content;
    await this.boardRepository.save(board);
  }
}
