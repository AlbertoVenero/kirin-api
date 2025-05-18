import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Establecimiento {}

@Entity()
export class EstablecimientoServicio {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // @ManyToOne(() => Establecimiento, est => est.serviciosAsignados)
    // establecimiento: Establecimiento;

    // @ManyToOne(() => ServiceCatalogItem, svc => svc.establecimientosConServicio)
    // servicio: ServiceCatalogItem;

    // Otros campos si son necesarios para la relación, e.g., activo, fecha_asignacion
}
// Actualizar Establecimiento y ServiceCatalogItem con las relaciones OneToMany correspondientes.