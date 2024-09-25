import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'task',
})
export class Task extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  status: string;

  @Column
  createdAt: string;
}
