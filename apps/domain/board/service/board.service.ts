import { Injectable } from '@nestjs/common';
import { BoardRepository } from 'apps/domain/board/repository/board.repository';
import { CreateBoardDto } from 'apps/domain/board/dto/create-board.dto';
import { BoardDto } from 'apps/domain/board/dto/board.dto';
import { Board } from 'apps/domain/board/board.entity';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async createBoard(dto: CreateBoardDto): Promise<Board> {
    return await this.boardRepository.createBoard(dto.title, dto.content);
  }
}
