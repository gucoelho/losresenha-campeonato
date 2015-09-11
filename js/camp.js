var Time = function(id,nome,sigla,liga){
	this.id = id;
	this.nome = nome;
	this.sigla = sigla;
	this.liga = liga;	
}

var jogadores = ['Gustavo Coelho', 'Felipe de Paula', 'Gustavo Simoes', 'José Marcelo', 'Guilherme Vona'];

var ligas = ['Brasil','Alemanha','Espanha','Italia','Inglaterra','França','Portugal'];
var times = [];

 times.push(new Time(1,'Barcelona','BAR',ligas[2]));
 times.push(new Time(2,'Real Madrid','REA',ligas[2]));
 times.push(new Time(3,'Atlético de Madrid','ATM',ligas[2]));
 times.push(new Time(4,'Bayern de Munique','BAY',ligas[1]));
 times.push(new Time(5,'PSG','PSG',ligas[5]));
 times.push(new Time(6,'Juventos','JUV',ligas[3]));
 times.push(new Time(7,'Roma','ROM',ligas[3]));
 times.push(new Time(8,'Chelsea','CHE',ligas[4]));
 times.push(new Time(9,'Manchester United','MAU',ligas[4]));
 times.push(new Time(10,'Manchester City','MAC',ligas[4]));
 times.push(new Time(11,'Borussia Bortmund','BOR',ligas[1]));

function getTimeBySigla(sigla){
    for(i = 0;i < times.length;i++){
		 if(sigla == times[i].sigla){
            return times[i];
         }
	}
}

function tagTeam(time){
  return '<div class="time" id="' + time.sigla + '"><div class ="escudo-time"><img src="./img/escudos/' + time.sigla + '.png" /></div><div class="nome-time"><span>'+ time.nome +'</span></div><span class="badge"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></span></div>';
}

$(document).ready(function(){
 	for(i = 0;i < times.length;i++){
		 $('body').append(tagTeam(times[i]));
	}
	var timesEscolhidos = [];
    
	$('.time').click(function(){
		$(this).toggleClass('time-selected');
		$(this).children().toggleClass('badge-selected');
     
        if(!($(this).hasClass('time-selected'))){
            timesEscolhidos.pop(getTimeBySigla($(this).attr('id')));
        } else {
            timesEscolhidos.push(getTimeBySigla($(this).attr('id')));
        }
        
        if(timesEscolhidos.length > 0){
            console.log('------------------------------');
            for(i = 0;i < timesEscolhidos.length;i++){
            console.log(timesEscolhidos[i].nome);
	        }
        }
	});
	
    $('input').bind("keyup",function(e){
        //console.log(String.fromCharCode(e.keyCode));
        
        var texto = $(this).val().toUpperCase();
        
		var isInSelect = [];
        if(texto != ""){
        for(i = 0;i < jogadores.length;i++){
            if(jogadores[i].toUpperCase().indexOf(texto) == 0 ){
                console.log(jogadores[i]);
				
				
				isInSelect.push(jogadores[i]);
				$('datalist').append('<option value="'+jogadores[i]+'">'+jogadores[i]+'</option>');
            } 
		}
	}
        
    });
    
    
	

	



	


});