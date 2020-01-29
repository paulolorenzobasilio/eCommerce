

# eCommerce

Simple eCommerce backend

## Getting Started

### Prerequisites
```
git clone https://github.com/paulolorenzobasilio/eCommerce.git
cd eCommerce
npm install
```

### Installing
Create sqlite database
```
touch db.sql
```

Run migrations and seed
```
npm run db:run
```

Start the server
```
npm run start
```

### API Docs
Import **api-swagger.yml**  in [Swagger Editor](https://editor.swagger.io/)

## Running the tests
```
npm run test
```

## Project Specifications
- [x] List/add/update/delete Sellers 
- [x] List/add/update/delete Products per Seller 
- [x] Search for Products by name/description 
- [ ] Create and add items with quantity and date into a Cart 
- [ ] Reports: for each Product, provide data on how many times they were added to a Cart 
- [ ] Bonus: Report top Sellers with most quantity of items added to all Carts 
- [x] Focus on the happy path. Bonus points for handling edge-case scenarios

## Built With

* [NestJS](https://nestjs.com/) - The web framework used
* [Swagger](https://editor.swagger.io/) - For API docs

## Acknowledgments

* Please hire.
* Thanks.
