var Time = function (id, nome, sigla, liga, cor1, cor2) {
	this.id = id;
	this.nome = nome;
	this.sigla = sigla;
	this.liga = liga;
	this.cor1 = cor1;
	this.cor2 = cor2;
}

var Jogador = function (id, nome, sobrenome, apelido) {
	this.id = id;
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.apelido = apelido;

	this.nomecompleto = nome + ' ' + sobrenome;
}



var Participante = function(time, jogador){
    this.jogador = jogador;
    this.time =  time;
    this.jogos = 0;
    this.pontos = 0;
    this.vitorias = 0;
    this.empates = 0;
    this.derrotas= 0;
    this.GP = 0;
    this.GC = 0;
    this.SG = 0;
}

var Jogo = function (time1, time2) {
	this.idJogo = undefined;
	this.time1 = time1;
	this.time2 = time2;
	this.gols1 = 0;
	this.gols2 = 0;
	this.rodada = 0;
}

var Campeonato = function(participantes,jogos){
    this.participantes = participantes;
    this.jogos = jogos;
}

function formatTagOptions(options) {
	var tags = '';
	for (j = 0; j < options.length; j++) {
		tags += '<option value="' + options[j].id + '">' + options[j].nomecompleto.toString() + '</option>';
	}
	return tags;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function getTimeById(id) {
	for (i = 0; i < times.length; i++) {
		if (id == times[i].id) {
			return times[i];
		}
	}
}

function getJogadorById(id) {
	for (i = 0; i < jogadores.length; i++) {
		if (id == jogadores[i].id) {
			return jogadores[i];
		}
	}
}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}


function containsSorteio(participante, participantes) {
	for (var i = 0; i < participantes.length; i++) {
		if (participantes[i] == participante) {
			return true;
		}
	}
	return false;
}

function tagTeam(time) {
	return '<div class="time" time="' + time.id + '"><div class ="escudo-time"><img src="./img/escudos/' + time.sigla + '.png" /></div><div class="nome-time"><span>' + time.nome + '</span></div><span class="badge"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></span></div>';
}

function tagPlayer(jogador) {
	return '<div class="tagJogador" jogador="' + jogador.id + '"><div class="jogImagem"><img src="img/fotos/perfil/' + jogador.apelido + '.JPG"></div><div><b>' + jogador.apelido + '</b></div><div><small>' + jogador.nomecompleto + '</small></div></div>'
}

function tagSorteado(sorteio) {
	return '<div class="card" sorteado='+sorteio.jogador.id+'><div class="sorteado"><div class="front"><img height="150"src="img/UEFA_Champions_League_logo_2.png"><p>RESENHA LEAGUE</p></div><div class="back"> <div class="sorteadoImg"><img class="imgEscudo" src="./img/escudos/medio/' + sorteio.time.sigla + '.png"><img class="imgJogador" src="./img/fotos/nobg/' + sorteio.jogador.apelido + '.png"><div class="cor1" style="position: absolute;left: 0;top: 0;background-color: red;border-right: 300px solid ' + sorteio.time.cor1 + ';border-top: 300px solid ' + sorteio.time.cor2 + ';"></div></div><div class="divTextSort"><p>' + sorteio.jogador.nome + '</p><p>' + sorteio.time.nome + '</p></div></div></div></div>';
}


function tagJogo(jogo) {
	return '<div class="jogo"><div class="time1"><input class="form-control" type="text" maxlength="2"><img src="./img/escudos/'+jogo.time1.time.sigla+'.png"><div class="jgTxt"><p>'+jogo.time1.jogador.apelido+'</p><p>'+jogo.time1.time.nome+'</p></div></div> x <div class="time2"><div class="jgTxt"><p>'+jogo.time2.jogador.apelido+'</p><p>'+jogo.time1.time.nome+'</p></div><img src="./img/escudos/'+jogo.time2.time.sigla+'.png"><input class="form-control" type="text" maxlength="2"></div></div>';
}
