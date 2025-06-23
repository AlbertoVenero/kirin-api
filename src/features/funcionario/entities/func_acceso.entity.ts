import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Funcionario } from "./funcionario.entity";

@Entity()
export class FuncAcceso {
    @PrimaryGeneratedColumn('uuid') // UUID para auditoría
    acces_id: string;

    @Column({ type: 'text', array: true }) // Array de servicios
    funcservice: string[];

    @Column('bool')
    funchcbi: boolean;

    @Column('bool')
    funclegal: boolean;

    @OneToOne(() => Funcionario)
    @JoinColumn({ name: 'func_id' }) // Relación con UUID del funcionario
    funcionario: Funcionario;
}