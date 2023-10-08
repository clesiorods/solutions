import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({default: 0})
    is_admin: number;

    @CreateDateColumn()
    created_at: Date;

    @Column({nullable:true})
    created_by: number;

    @UpdateDateColumn()
    updated_at: Date;
    
    @Column({nullable:true})
    updated_by: number;

    @DeleteDateColumn()
    deleted_at: Date;

    @Column({nullable:true}) 
    deleted_by: number;

    // @OneToOne(() => RefreshToken, r => r.user)
    // refreshToken: RefreshToken
}