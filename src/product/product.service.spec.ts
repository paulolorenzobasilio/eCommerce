import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { Repository, getRepository } from 'typeorm';
import { Product } from './product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SellerIdParams } from './params/SellerIdParams';
import { CreateProductDto } from './dto/CreateProductDto';
import { UpdateProductDto } from './dto/UpdateProductDto';
import { SellerParams } from './params/SellerParams';

describe('ProductService', () => {
  let service: ProductService;
  let repo: Repository<Product>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository
        }
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repo = module.get<Repository<Product>>(getRepositoryToken(Product))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of product', async () => {
      const testProduct: Product = {
        id: 1,
        name: "productName",
        description: "lorem ipsum",
        sellerId: 1,
        seller: null
      }

      const sellerIdParams: SellerIdParams = {
        sellerId: 1
      }

      jest.spyOn(repo, 'find').mockResolvedValueOnce([testProduct])
      expect(await service.findAll(sellerIdParams)).toEqual([testProduct])
    })
  })

  describe('create', () => {
    it('should insert product data', async () => {
      const sellerIdParams: SellerIdParams = {
        sellerId: 1
      }

      const createProductDto: CreateProductDto = {
        name: "productName",
        description: "lorem ipsum",
      }

      jest.spyOn(repo, 'insert').mockImplementation(() => undefined)
      expect(await service.create(sellerIdParams, createProductDto)).toBe(undefined)
    })
  })

  describe('update', () => {
    it('should update product', async () => {
      const sellerParams: SellerParams = {
        sellerId: 1,
        id: 1
      }

      const updateProductDto: UpdateProductDto = {
        name: "productName",
        description: "lorem ipsum"
      }

      jest.spyOn(repo, 'update').mockImplementation(() => undefined)
      expect(await service.update(sellerParams, updateProductDto)).toBe(undefined)
    })
  })

  describe('delete', () => {
    it('should remove product', async () => {
      const sellerParams: SellerParams = {
        sellerId: 1,
        id: 1
      }

      jest.spyOn(repo, 'delete').mockImplementation(() => undefined)
      expect(await service.delete(sellerParams)).toBe(undefined)
    })
  })
});
