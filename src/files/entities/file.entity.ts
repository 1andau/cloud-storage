
import { UserEntity } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('files')

export class FileEntity {
@PrimaryGeneratedColumn()
id: number

@Column()
fileName: string;

@Column()
originName: string

@Column()
size: string

@Column()
mimeType: string

//тут мы говорим что у множества файлов может быть один пользователь 
@ManyToOne(() => UserEntity, user=>user.files)
user: UserEntity

@DeleteDateColumn()
deletedAt ?: Date; 

}

