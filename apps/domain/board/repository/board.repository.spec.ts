import { Test, TestingModule } from '@nestjs/testing';
import { BoardRepository } from 'apps/domain/board/repository/board.repository';
import { InfrastructureModule } from 'apps/infrastructure/infrastructure.module';

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

  afterAll(async () => {
    await testingModule.close();
  });
});
