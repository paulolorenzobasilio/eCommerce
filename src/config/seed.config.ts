import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'sqlite',
    database: 'db.sql',
    synchronize: false,
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/database/seeds/*{.ts,.js}'],
    migrationsRun: false,
    cli: {
        migrationsDir: 'src/database/seeds',
    },
};

export = config;
