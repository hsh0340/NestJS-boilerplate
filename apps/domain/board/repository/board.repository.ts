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

  /**
   * 게시물을 생성합니다.
   * @param title 제목
   * @param content 내용
   * @return 생성된 게시물
   */
  async createBoard(title: string, content: string): Promise<Board> {
    const board = new Board();

    board.title = title;
    board.content = content;

    await this.boardRepository.insert(board);

    return board;
  }

  /**
   * 게시물을 조회합니다.
   * @param id 게시물 고유 id
   * @return 게시물이 존재한다면 Board 객체를, 존재하지 않는다면 null 을 반환합니다.
   */
  async getBoardById(id: number): Promise<Board | null> {
    return await this.boardRepository.findOne({ where: { id } });
  }
}
