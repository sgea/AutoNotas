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

	var id = getElementById( this.id );

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

	nota.id = "nota" + id;
	fechar.id = "span" + id;
	id++;

	return nota;

}

/* AO CARREGAR A PÁGINA */
window.onload
{

	var spans = document.querySelectorAll("span");

	function adicionar()
	{
		inserirNota();
		
	}

	function remover()
	{
		alert("Remover clicado");
	}

}