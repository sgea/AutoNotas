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

function removerNota()
{

}


function criarNovoNode()
{

	var node = document.createElement("div");
	return node;

}

/* EVENTOS JAVASCRIPT */

window.onload
{

	function adicionar()
	{
		inserirNota();
	}

}