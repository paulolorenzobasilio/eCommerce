import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'sqlite',
    database: 'db.sql',
    synchronize: false,
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/database/migrations/**/*{.ts,.js}'],
    migrationsRun: false,
    cli: {
        migrationsDir: 'src/database/migrations',
    },
};

export = config;
