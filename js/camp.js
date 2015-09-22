var jogadores = [];
jogadores.push(new Jogador(1, 'Gustavo', 'Coelho', 'Coelho'));
jogadores.push(new Jogador(2, 'Gustavo', 'Simões', 'Sima'));
jogadores.push(new Jogador(3, 'Guilherme', 'Vona', 'Vona'));
jogadores.push(new Jogador(4, 'Felipe', 'De Paula', 'Felipe'));
jogadores.push(new Jogador(5, 'Leonardo', 'Siqueira', 'Léo'));
jogadores.push(new Jogador(6, 'Bruno', 'Moura', 'Bruninho'));
jogadores.push(new Jogador(7, 'Dominick', 'Lucio', 'Dom'));
jogadores.push(new Jogador(8, 'Pedro', 'Oliveira', 'Pedro'));
jogadores.push(new Jogador(9, 'Rafael', 'Vieira', 'Rafa'));
jogadores.push(new Jogador(10, 'Lucas', 'Alvarenga', 'Alva'));
jogadores.push(new Jogador(11, 'William', 'Figueredo', 'Bahia'));
//jogadores.push(new Jogador(12, 'Vinicius', 'Freihat', 'Frei'));
jogadores.push(new Jogador(13, 'José', 'Marcelo', 'Zé'));
jogadores.push(new Jogador(14, 'Rafael', 'Peron', 'Cacau'));
//jogadores.push(new Jogador(15, 'Matheus', 'Carvalho', 'Salva'));
jogadores.push(new Jogador(16, 'Matheus', 'Macieira', 'Pulga'));



var ligas = ['Brasil', 'Alemanha', 'Espanha', 'Italia', 'Inglaterra', 'França', 'Portugal'];

var times = [];

times.push(new Time(1, 'Barcelona', 'BAR', ligas[2], '#a93b63', '#0076b6'));
times.push(new Time(2, 'Real Madrid', 'REA', ligas[2], '#fefefe', '#f6b90c'));
times.push(new Time(3, 'Atlético de Madrid', 'ATM', ligas[2], '#152881', '#e12017'));
times.push(new Time(4, 'Bayern de Munique', 'BAY', ligas[1], '#dc184f', '#0057a4'));
times.push(new Time(5, 'PSG', 'PSG', ligas[5], '#015293', '#e52b38'));
times.push(new Time(6, 'Juventus', 'JUV', ligas[3], '#1e1916', '#ffffff'));
times.push(new Time(7, 'Roma', 'ROM', ligas[3], '#f89728', '#b30838'));
times.push(new Time(8, 'Chelsea', 'CHE', ligas[4], '#034694', '#ffffff'));
times.push(new Time(9, 'Manchester United', 'MAU', ligas[4], '#ffff00', '#ff0000'));
times.push(new Time(10, 'Manchester City', 'MAC', ligas[4], '#00b4db', '#ffffff'));
times.push(new Time(11, 'Borussia Bortmund', 'BOR', ligas[1], '#f8dd37', '#000000'));



$(document).ready(function () {


	var flagSorteio = false;
	var sorteioTimes;
	var sorteioJogadores;
	var listaJogos;
	var participantes;
    
	var jogadoresEscolhidos = [];
	var timesEscolhidos = [];
    
	for (i = 0; i < times.length; i++) {
		$('#sTimes').append(tagTeam(times[i]));
	}

	for (i = 0; i < jogadores.length; i++) {
		$('#sJogadores').append(tagPlayer(jogadores[i]));
	}



	$('.tagJogador').click(function () {
		$(this).toggleClass('tagJogador');
		$(this).toggleClass('tagJogador-selected');

		if (!($(this).hasClass('tagJogador-selected'))) {
			jogadoresEscolhidos.pop(getJogadorById($(this).attr('jogador')));
		} else {
			jogadoresEscolhidos.push(getJogadorById($(this).attr('jogador')));
		}

		if (jogadoresEscolhidos.length > 0) {
			console.log(' ');
			for (i = 0; i < jogadoresEscolhidos.length; i++) {
				console.log(jogadoresEscolhidos[i].nome);
			}
		}

	});



	$('.time').click(function () {
		$(this).toggleClass('time-selected');
		$(this).children().toggleClass('badge-selected');

		if (!($(this).hasClass('time-selected'))) {
			timesEscolhidos.pop(getTimeById($(this).attr('time')));
		} else {
			timesEscolhidos.push(getTimeById($(this).attr('time')));
		}

		if (timesEscolhidos.length > 0) {
			console.log(' ');
			for (i = 0; i < timesEscolhidos.length; i++) {
				console.log(timesEscolhidos[i].nome);
			}
		}
	});


	$('#btnSortear').click(function () {
		flagSorteio = true;
		$('#sSorteados').empty();
		sorteioTimes = [];
		sorteioJogadores = [];
		participantes = [];

		for (i = 0; i < timesEscolhidos.length; i++) {
			sorteioTimes.push(timesEscolhidos[i]);
		}

		for (i = 0; i < jogadoresEscolhidos.length; i++) {
			sorteioJogadores.push(jogadoresEscolhidos[i]);
		}


		if (sorteioTimes.length > sorteioJogadores.length) {
			for (i = 0; i < sorteioJogadores.length; i = i) {
				shuffle(sorteioTimes);
				shuffle(sorteioJogadores);
				participantes.push(new Participante(sorteioTimes[i], sorteioJogadores[i]));

				// console.log(participantes[i].time.nome +'-'+participantes[i].jogador.apelido);


				sorteioJogadores.shift(sorteioJogadores[i]);
				sorteioTimes.shift(sorteioTimes[i]);
			}

		} else {

			while (sorteioTimes.length != sorteioJogadores.length) {
				sorteioTimes.push(sorteioTimes[(getRandomInt(1, sorteioTimes.length) - 1)]);
			}

			for (i = 0; i < sorteioTimes.length; i = i) {
				//var sort = Math.round(Math.random);
				shuffle(sorteioTimes);
				shuffle(sorteioJogadores);
				participantes.push(new Participante(sorteioTimes[i], sorteioJogadores[i]));

				//console.log(participantes[i].time.nome +'-'+participantes[i].jogador.apelido);


				sorteioJogadores.shift(sorteioJogadores[i]);
				sorteioTimes.shift(sorteioTimes[i]);
			}
		}





		for (i = 0; i < participantes.length; i++) {

			/* var tag='<div class="card"><div class="sorteado"><div class="front"><img height="150"src="img/UEFA_Champions_League_logo_2.png"><p>RESENHA LEAGUE</p></div><div class="back"> <div class="sorteadoImg"><img class="imgEscudo" src="./img/escudos/medio/'+participantes[i].time.sigla+'.png"><img class="imgJogador" src="./img/fotos/perfil/'+participantes[i].jogador.apelido+'.jpg"><div class="cor1" style="position: absolute;left: 0;top: 0;background-color: red;border-right: 300px solid '+participantes[i].time.cor1+';border-top: 300px solid '+participantes[i].time.cor2+';"></div></div><div class="divTextSort"><p>'+participantes[i].jogador.nome+'</p><p>'+participantes[i].time.nome+'</p></div></div></div></div>';          */
			$('#sSorteados').prepend(tagSorteado(participantes[i]));

		}

		$('.card').flip({
			speed: 900,
			trigger: 'manual'
		});

		//  var $cards = $('.card').all;

		// setInterval(function(){
		//     for(h=0;h<$cards.length;h++){  $cards[h].flip(true); }
		// } ,100);

		var time = 2000;


		$('.card').each(function () {

			var cardTag = $(this);


			setTimeout(function () {
				cardTag.flip(true);

				// var audioElement = document.createElement('audio');
				// audioElement.setAttribute('src', './sons/audios/Léo.mp3');
				// audioElement.setAttribute('autoplay', 'autoplay');
				// audioElement.play();


			}, time)

			time = time + 2500;
		});


		if (flagSorteio) {

		}

	});


	$('#btn-jogos').click(function(){
	      listaJogos = [];
	      var listaJogadoresJaDefinidos = [];
	            for(i=0;i<participantes.length;i++){
	                for(j=0;j<participantes.length;j++){
	                    if(participantes[i] != participantes[j] && !containsSorteio(participantes[j], listaJogadoresJaDefinidos)){
                            if((Math.random()*10) > 5){ 
	                        listaJogos.push(new Jogo(participantes[i],participantes[j]));
                            } else {
	                        listaJogos.push(new Jogo(participantes[j],participantes[i]));
                            }
	                    }
	                }
	                listaJogadoresJaDefinidos.push(participantes[i]);
	            }

	function compareNumbers(a, b) {
	  return a.rodada - b.rodada;
	}
	    
	    
	    var qtdRodada = participantes.length-1;
	    var rodada = 1;
	    var count = 1;
		
	        for(i=0;i<listaJogos.length;i++){
				listaJogos[i].rodada = rodada;
			
	            if(rodada == qtdRodada){
	                rodada = 1;
	                count++;
	            } else { rodada++ } 
	        }
		
	       listaJogos.sort(compareNumbers); 
            
        
        
        
        
            for(i=0;i<listaJogos.length;i++){
					      
	            var time1 = listaJogos[i].time1.time.nome;
	            var time2 = listaJogos[i].time2.time.nome;
	            var jogador1 = listaJogos[i].time1.jogador.apelido;
	            var jogador2 = listaJogos[i].time2.jogador.apelido;
	        
                
                
                $().prepend();
                
                
                
                
                
					console.log(jogador1 + '\t x\t ' + jogador2 + '\tRODADA:' + listaJogos[i].rodada);

				}
                    
        
        
        
        
        
        
atualizarTabela();
        
function comparePontos(a, b) {
      if(b.pontos > a.pontos){
       return 1;
      }else if(b.pontos < a.pontos){
       return -1;
      }else if(b.vitorias > a.vitorias){
       return 1;
      }else if(b.vitorias < a.vitorias){
       return -1;
      }else if(b.empates > a.empates){
       return 1;
      }else if(b.empates < a.empates){
       return -1;
      }else if(b.derrotas < a.derrotas){
       return 1;
      }else if(b.derrotas > a.derrotas){
       return -1;
      }else if(b.SG > a.SG){
       return 1;
      }else if(b.SG < a.SG){
       return -1;
      }else if(b.GP > a.GP){
       return 1;
      }else if(b.GP < a.GP){
       return -1;
      }else if(b.GC < a.GC){
       return 1;
      }else if(b.GC > a.GC){
       return -1;
      }
	  //return b.pontos - a.pontos;
}
        
function compareVitorias(a, b) {
	  return b.vitorias - a.vitorias;
}      
        
function atualizarTabela(){
    var table = document.createElement("TABLE");
   participantes.sort(comparePontos);
    
    //var header = table.createTHead();
        for(i=0;i<participantes.length;i++){
        var row = table.insertRow(i);

        for(j=0;j<10;j++){
            var cell = row.insertCell(j);
            switch(j){
                case 0:  cell.innerHTML = participantes[i].jogador.apelido; break;
                case 1:  cell.innerHTML = participantes[i].time.nome; break;
                case 2:  cell.innerHTML = participantes[i].jogos; break;
                case 3:  cell.innerHTML = participantes[i].pontos; break;
                case 4:  cell.innerHTML = participantes[i].vitorias; break;
                case 5:  cell.innerHTML = participantes[i].empates; break;
                case 6:  cell.innerHTML = participantes[i].derrotas; break;
                case 7:  cell.innerHTML = participantes[i].SG; break;
                case 8:  cell.innerHTML = participantes[i].GP; break;
                case 9:  cell.innerHTML = participantes[i].GC; break;
            }
        }    

        }

    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = 'Jogador';
    cell = row.insertCell(1);
    cell.innerHTML = 'Time';
    cell = row.insertCell(2);
    cell.innerHTML = 'JGS';
    cell = row.insertCell(3);
    cell.innerHTML = 'PTS';
    cell = row.insertCell(4);
    cell.innerHTML = 'V';
    cell = row.insertCell(5);
    cell.innerHTML = 'E';
    cell = row.insertCell(6);
    cell.innerHTML = 'D';
    cell = row.insertCell(7);
    cell.innerHTML = 'SG';
    cell = row.insertCell(8);
    cell.innerHTML = 'GP';
    cell = row.insertCell(9);
    cell.innerHTML = 'GC';

    $('#sCampeonato').empty();
    $('#sCampeonato').append(table);
}       

        
        
        
        
        
	});
	
});

