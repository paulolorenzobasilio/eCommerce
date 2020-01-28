import { Test, TestingModule } from '@nestjs/testing';
import { SellerService } from './seller.service';
import { Repository, getRepository } from 'typeorm';
import { Seller } from './seller.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateSellerDto } from './dto/CreateSellerDto';
import { IdParams } from './params/IdParams';
import { UpdateSellerDto } from './dto/UpdateSellerDto';

describe('Seller Service', () => {
  let service: SellerService
  let repo: Repository<Seller>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SellerService,
        {
          provide: getRepositoryToken(Seller),
          useClass: Repository
        }
      ]
    }).compile();

    service = module.get<SellerService>(SellerService)
    repo = module.get<Repository<Seller>>(getRepositoryToken(Seller))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of seller', async () => {
      const testSeller: Seller = {
        id: 1,
        name: "test1",
        products: []
      }
      jest.spyOn(repo, 'find').mockResolvedValueOnce([testSeller])
      expect(await service.findAll()).toEqual([testSeller])
    })
  })

  describe('create', () => {
    it('should insert seller data', async () => {
      const createSellerDto: CreateSellerDto = {
        name: "testProduct"
      }

      jest.spyOn(repo, 'insert').mockImplementation(() => undefined)
      expect(await service.create(createSellerDto)).toBe(undefined)
    })
  })

  describe('update', () => {
    it('should update seller', async () => {
      const idParams: IdParams = {
        id: 1
      }
      const updateSellerDto: UpdateSellerDto = {
        name: "updateProduct"
      }
      jest.spyOn(repo, 'update').mockImplementation(() => undefined)
      expect(await service.update(idParams, updateSellerDto)).toBe(undefined)
    })
  })


  describe('delete', () => {
    it('should remove seller', async () => {
      const idParams: IdParams = {
        id: 1
      }

      jest.spyOn(repo, 'delete').mockImplementation(() => undefined)
      expect(await service.delete(idParams)).toBe(undefined)
    })
  })
});
