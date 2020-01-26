import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'sqlite',
    database: 'db.sql',
    synchronize: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/database/migrations/**/*{.ts,.js}'],
    migrationsRun: false,
    cli: {
        migrationsDir: 'src/database/migrations',
    },
};

export = config;
