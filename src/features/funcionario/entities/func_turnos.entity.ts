import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Funcionario } from "./funcionario.entity";


@Entity()
export class FuncTurnos {
    @PrimaryGeneratedColumn('uuid')
    turn_id: string;

    @Column({ type: 'timestamp', array: true }) // Array de fechas
    funcfguard: Date[];

    @Column('text')
    functguard: string;

    @Column('int')
    estab_id: number;

    @ManyToOne(() => Funcionario, (func) => func.funcced) // Relación por UUID
    funcionario: Funcionario;
}
    

