import { Test, TestingModule } from '@nestjs/testing';
import { BoardRepository } from 'apps/domain/board/repository/board.repository';
import { InfrastructureModule } from 'apps/infrastructure/infrastructure.module';
import { dataSource } from 'ormconfig';
import { QueryRunner } from 'typeorm';

describe('BoardRepository', () => {
  let testingModule: TestingModule;
  let boardRepository: BoardRepository;
  let queryRunner: QueryRunner;

  beforeAll(async () => {
    testingModule = await Test.createTestingModule({
      imports: [InfrastructureModule.forRoot()],
      providers: [BoardRepository],
    }).compile();

    boardRepository = testingModule.get<BoardRepository>(BoardRepository);

    // start transaction
    await dataSource.initialize();
    queryRunner = dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
  });

  it('should be defined', () => {
    expect(boardRepository).toBeDefined();
  });

  describe('createBoard', () => {
    it('게시물을 생성해야합니다.', async () => {
      const testTitle = 'test title';
      const testContent = 'test content';

      const board = await boardRepository.insertBoard(testTitle, testContent);

      expect(board).toHaveProperty('id');
      expect(board.title).toBe(testTitle);
      expect(board.content).toBe(testContent);
    });
  });

  afterEach(() => {
    if (queryRunner.isTransactionActive) {
      queryRunner.rollbackTransaction();
    }
  });

  afterAll(async () => {
    await testingModule.close();
  });
});
