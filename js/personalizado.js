/*
	Autor: Samuel Antonio Gea.
	Descrição: Javascript para a página index.php
*/

/* JAVASCRIPT PARA CRIAÇÃO DA NOTA AUTODESIVA */

/* AO CARREGAR A PÁGINA */
window.onload
{
	var cont = -1;
}

function adicionar()
{
	cont++;
	inserirNota();
}

function remover()
{

	var current = document.getElementById("conteudo");
	elemento = document.getElementById("nota" + cont);
	current.removeChild( elemento );
	cont--;

}

function salvar()
{
	alert("Salvo!");
	//TODO
}

function criarNovoNode()
{

	var nota = document.createElement("div");

	var fechar = document.createElement("span");
	fechar.className = "fechar";

	var textarea = document.createElement("textarea");
	textarea.className = "textarea"

	nota.appendChild( fechar );
	nota.appendChild( textarea );

	nota.id = "nota" + cont;
	fechar.id = "span" + cont;

	return nota;

}

function inserirNota()
{

	var novaNota = criarNovoNode();
	novaNota.className = "nota";

	var current = document.getElementById("conteudo");
	current.appendChild( novaNota );

}

function removerNota()
{

	var id = getElementById( this.id );

}