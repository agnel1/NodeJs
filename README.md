# NodeJs
 nlw6

para as migrations foi criada uma entidade para lidar com as informações
logo temos:

Entidade <=> ORM <=> BD (users)

dentro de etities/arquivo

vale lembrar que caso os nomes sejam os mesmos da migration não precisa especificar, mas em @Entity("O nome da tabela")
=> ex
        @Entity("users")
    class User {
        @PrimaryColumn()
        readonly id:string;

        @Column()
        name:string;
        ...