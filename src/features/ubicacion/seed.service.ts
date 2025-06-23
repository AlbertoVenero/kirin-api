import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SeedService {
    constructor(private connection: Connection) { }

    async seedData() {
        await this.executeSqlFile('estados.sql');
        await this.executeSqlFile('municipios.sql');
        await this.executeSqlFile('ciudades.sql');
        await this.executeSqlFile('parroquias.sql');

        return 'Database seeded successfully from SQL files!';
    }

    private async executeSqlFile(filename: string) {
        const filePath = path.join(process.cwd(), 'sql-data', filename);
        const sql = fs.readFileSync(filePath, 'utf8');

        // Verificar si el archivo contiene múltiples declaraciones
        const sqlStatements = sql.split(';').filter(statement => statement.trim() !== '');

        const queryRunner = this.connection.createQueryRunner();

        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();

            for (const statement of sqlStatements) {
                if (statement.trim().length > 0) {
                    await queryRunner.query(statement);
                }
            }

            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();
            throw new Error(`Error executing ${filename}: ${err.message}`);
        } finally {
            await queryRunner.release();
        }
    }
}