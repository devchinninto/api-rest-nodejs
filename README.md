# Desenvolvimento de Software: Requisitos funcionais, regras de negócios e requisitos não funcionais

## RF (Requisitos Funcionais): Características que devem ser atendidas para atingir os objetivos da aplicação.

- [x] O usuário deve poder criar uma nova transação;
- [ ] O usuário deve poder obter um resumo de sua conta;
- [x] O usuário deve poder listar todas as transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

## RN (Regras de Negócios): Critérios que o sistema deve seguir para suportar a tomada de decisões e garantir conformidade.

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou de débito que subtrairá;
  - ex: Se um usuário fizer uma transação de crédito de 1000, e uma de débito de 500, ao listar o resumo, vai listar 500.
- [ ] Deve ser possível identificarmos o usuário entre as requisições (de maneira abrangente, porque ainda não faremos auth);
- [ ] O usuário só pode visualizar transações as quais ele criou;

## RNF (Requisitos Não Funcionais): Como o que foi definido acima será atingido, quais as estratégias, quais as tecnologias. Aqui fica a parte mais tech, de implementação.

-
