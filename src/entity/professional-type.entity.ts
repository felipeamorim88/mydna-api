import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ProfessionalType {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500 })
  descricao: string

  @Column()
  situacao: boolean

  @CreateDateColumn()
  createdAt: Timestamp
  
  @UpdateDateColumn ()
  updateAt: Timestamp
}