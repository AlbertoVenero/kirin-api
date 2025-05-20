import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Establecimiento } from "./establecimiento.entity";


@Entity()
export class EstablecimientoServicio {
    @PrimaryGeneratedColumn('uuid')
    id: string;

     @ManyToOne(() => Establecimiento, est => est.estab_serv)
     establecimiento: Establecimiento;

    //  @ManyToOne(() => ServiceCatalogItem, svc => svc.establecimientosConServicio)
    //  servicio: ServiceCatalogItem;

    // Otros campos si son necesarios para la relación, e.g., activo, fecha_asignacion
}
// Actualizar Establecimiento y ServiceCatalogItem con las relaciones OneToMany correspondientes.