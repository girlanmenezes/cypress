Feature: Frencia de aluno

    Scenario: Validar a frequencia de alunos
        Given que realize login
        And Acesse listao e selecionar 3o bimestre
        When for apresentado a turma e clicar em frequencia
        And selecionar período
        Then deverar apresentar aluna


    Scenario: Troca de Perfil
        Given que realize login
        When realizar a troca de perfil
        Then devera trocar o perfil