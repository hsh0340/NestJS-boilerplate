import { Injectable } from '@nestjs/common';
import { BoardRepository } from 'apps/domain/board/board.repository';
import { CreateBoardDto } from 'apps/domain/board/dto/create-board.dto';
import { plainToInstance } from 'class-transformer';
import { BoardDto } from 'apps/domain/board/dto/board.dto';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async createBoard(dto: CreateBoardDto): Promise<BoardDto> {
    const createdBoard = await this.boardRepository.createBoard(dto);

    return plainToInstance(BoardDto, createdBoard);
  }
}
