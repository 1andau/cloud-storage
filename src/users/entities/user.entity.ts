import { FileEntity } from "src/files/entities/file.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')

export class UserEntity {

@PrimaryGeneratedColumn()
id: number

@Column()
email: string

@Column()
password: string

@Column()
fullname: string

@Column()
name: string

//у каждого файла есть свой пользователь, 
@OneToMany(() => FileEntity, file => file.user)
//files типизируем и говорим что он будет возвращать список файлов FileEntity
files: FileEntity[];

}
