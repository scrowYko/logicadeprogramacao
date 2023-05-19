programa
{
	
	funcao inicio()
	{
		//troco()
		//consumo_carro()
		pares()
		primos()
	}
	funcao troco ()
		{
			real preco, pago, diferenca
			escreva("Digite o preço do produto\n")
			leia(preco)
			escreva ("Digite o valor pago \n")
			leia(pago)
			diferenca = pago - preco
				se (preco > pago)
					{
						escreva ("Ainda falta pagar "+diferenca+"\n")
					}
				senao 
					{
						escreva ("O troco é de: "+diferenca+"\n")
					}
		}
	funcao consumo_carro()
		{
			real distancia, consumido, media
			escreva("Digite qual foi a distância percorrida \n")
			leia(distancia)
			escreva("Digite quanto seu carro consumiu neste percurso \n")
			leia(consumido)
			media = distancia / consumido
			escreva("O consumo médio do seu carro é de: "+media+"\n")
		}
	funcao pares()
		{
			inteiro digito, quantidade, numero
			quantidade = 0
			numero = 0
			escreva("Escolha um numero inteiro maior que 0 \n")
			leia(digito)
			enquanto(numero < digito)
				{
					se (numero % 2 == 0)
					{
						quantidade ++	
					}
					numero++
				}
			escreva("A quantidade de pares até "+digito+" é de: "+quantidade+"\n")	
		}
	funcao primos()
		{
			inteiro digito2, quantidade2, numero2
			quantidade2 = 0
			numero2 = 2
			escreva("Digite um numero \n")
			leia (digito2)
				enquanto (numero2 < digito2)
					{
						inteiro divisores, candidato
						divisores = 0
						candidato = 1
						enquanto(candidato <= numero2)
							{
								se(numero2 % candidato == 0)
									{
										divisores ++
									}
								candidato ++	
							}
						se(divisores ==2)
							{
								quantidade2 ++
							}
						numero2 ++	
					}
			escreva ("A quantidade de primos até "+digito2+" é de: "+quantidade2+"\n")		
		}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 37; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */