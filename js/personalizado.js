/*
	Autor: Samuel Antonio Gea.
	Descrição: Javascript para a página index.php
*/

/* JAVASCRIPT PARA CRIAÇÃO DA NOTA AUTODESIVA */

var id = 0;

function inserirNota()
{

	var novaNota = criarNovoNode();
	novaNota.className = "nota";

	var current = document.getElementById("conteudo");
	current.appendChild( novaNota );

}

function removerNota( id )
{

	var id = getElementById( id );

}


function criarNovoNode()
{

	var nota = document.createElement("div");

	var fechar = document.createElement("span");
	fechar.className = "fechar";

	nota.appendChild( fechar );

	nota.id = "nota" + id;
	fechar.id = "span" + id;
	id++;

	return nota;

}

/* EVENTOS JAVASCRIPT */

window.onload
{

	function adicionar()
	{
		inserirNota();
	}

	function remover()
	{
		removerNota();
	}

}