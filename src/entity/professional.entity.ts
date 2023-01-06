import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { ProfessionalType } from './professional-type.entity';

@Entity()
export class Professional {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 255 })
  nome: string

  @Column({ length: 15 })
  telefone: string

  @Column({ length: 255 })
  email: string

    // add column explicitly here
  @Column()
  professionalTypeId: number;
  @OneToOne(() => ProfessionalType, { nullable: false, eager: true })
  @JoinColumn({ name: "professionalTypeId" } )
  professionalType: ProfessionalType

  @Column()
  situacao: boolean

  @CreateDateColumn()
  createdAt: Timestamp
  
  @UpdateDateColumn ()
  updateAt: Timestamp
}