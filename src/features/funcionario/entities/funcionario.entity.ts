import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Funcionario {
    @Column('uuid')
    id: string;

    @PrimaryColumn({ type: 'text', unique: true })
    funcced: string;

    @Column({ type: 'text'})
    funcname: string;

    @Column({ type: 'text' })
    funcaped: string;
    
    @Column({ type: 'text' })
    functipo: string;

    @Column({ type: 'text' })
    funcspec: string;

    @Column({ type: 'text' })
    funcpass: string;

    @Column({ type: 'date' })
    fecha_iap: Date;

    @Column({ type: 'text' })
    estab_id: string;

    @Column({ type: 'date' })
    fecha_asig_stab: Date;
    
    @Column({type: 'bool', default: true})
    funcactive: boolean;

    // @ManyToOne(() => Funcionario)
    // funcionario: Funcionario;
}
