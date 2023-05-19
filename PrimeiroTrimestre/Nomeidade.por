programa
{
	
	funcao inicio()
	{
		atividade1()
	}
	funcao atividade1()
		{
			inteiro AtualAno, IdadeAno, AnoNasci
			cadeia nome
			escreva("Escreva seu nome \n")
			leia(nome)
			escreva("Bem vindo, "+nome+"\n")
			escreva("Que ano você nasceu? \n")
			leia(AnoNasci)
			escreva("Em que ano estamos? \n")
			leia(AtualAno)
			IdadeAno = AtualAno - AnoNasci
			escreva("Esse ano você completa " +IdadeAno+" anos. ")
				se(IdadeAno >= 18)
					{
						escreva("Portanto você é maior de idade. \n")
					}
				senao
					{
						escreva("Portanto você é menor de idade. \n")
					}
		}
}
