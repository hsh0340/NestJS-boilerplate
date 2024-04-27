import { Test, TestingModule } from '@nestjs/testing';
import { BoardRepository } from 'apps/domain/board/repository/board.repository';
import { InfrastructureModule } from 'apps/infrastructure/infrastructure.module';
import { Board } from 'apps/domain/board/board.entity';

describe('BoardRepository', () => {
  let testingModule: TestingModule;
  let boardRepository: BoardRepository;

  beforeAll(async () => {
    testingModule = await Test.createTestingModule({
      imports: [InfrastructureModule.forRoot()],
      providers: [BoardRepository],
    }).compile();

    boardRepository = testingModule.get<BoardRepository>(BoardRepository);
  });

  it('should be defined', () => {
    expect(boardRepository).toBeDefined();
  });

  describe('createBoard', () => {
    it('게시물을 생성해야합니다.', async () => {
      const testTitle = 'test title';
      const testContent = 'test content';

      const board = await boardRepository.createBoard(testTitle, testContent);

      expect(board).toHaveProperty('id');
      expect(board.title).toBe(testTitle);
      expect(board.content).toBe(testContent);
    });
  });

  describe('getBoardById', () => {
    it('board 객체를 반환해야합니다.', async () => {
      const boardId = 1;
      const board = (await boardRepository.getBoardById(boardId)) as Board;

      expect(board.title).toBe('test title');
      expect(board.content).toBe('test content');
    });

    it('존재하지 않는 id로 조회할 경우 null 을 반환해야합니다.', async () => {
      const boardId = 999;
      const board = await boardRepository.getBoardById(boardId);

      expect(board).toBeNull();
    });
  });

  afterAll(async () => {
    await testingModule.close();
  });
});
