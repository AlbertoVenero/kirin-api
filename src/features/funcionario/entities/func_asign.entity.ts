import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Funcionario } from "./funcionario.entity";


@Entity()
export class FuncAsign {
    @PrimaryColumn({unique: true})
    asig_id: string;

    @Column()
    establec_id: string;
    
    @Column()
    fecha_asig: Date;

    @Column()
    fecha_asig_fin : Date;

    @OneToMany(() => Funcionario, (func) => func.funcced)
    funcionario: Funcionario[];
}