var rodada = 1;
var jogo = Array(3);
jogo ['a'] = Array(3);
jogo ['b'] = Array(3);
jogo ['c'] = Array(3);

jogo ['a'][1] = 0; 
jogo ['a'][2] = 0; 
jogo ['a'][3] = 0; 

jogo ['b'][1] = 0; 
jogo ['b'][2] = 0; 
jogo ['b'][3] = 0; 

jogo ['c'][1] = 0; 
jogo ['c'][2] = 0; 
jogo ['c'][3] = 0; 

$(document).ready(function () {
    $('#tabuleiro').hide();
    $('#iniciar').click(function (){
        if ($('#nomeJ1').val() == '' || $('#nomeJ2').val() == '') {
            alert('Nome de jogador nao informado');
            return false;
        }
        
        $('#pagInicial').hide();
        $('#tabuleiro').show();
        $('#j1').html($('#nomeJ1').val());
        $('#j2').html($('#nomeJ2').val());

    });

    $('.jogada').click(function (){
        var movimento = this.id;
        $('#'+movimento).off();
        jogada(movimento);
    });

    function jogada(id){
        var icone = '';
        var ponto = 0;
        if ((rodada % 2) == 1) {
            icone = 'url(imagens/marcacao_1.png)';
            ponto = -1;
        } else {
            icone = 'url(imagens/marcacao_2.png)';
            ponto = 1;
        }
        rodada++;
        $('#'+id).css('background-image',icone);

        var cord = id.split('-');

        jogo[cord[0]][cord[1]] = ponto;

        verifica();
    }

    function verifica() {
        var pontos = 0;
        for (var i = 0; i < 3; i++) {
            pontos = pontos + jogo['a'][i];
        }
        ganhador(pontos);

        pontos = 0;
        for (var i = 0; i < 3; i++) {
            pontos = pontos + jogo['b'][i];
        }
        ganhador(pontos);

        pontos = 0;
        for (var i = 0; i < 3; i++) {
            pontos = pontos + jogo['c'][i];
        }
        ganhador(pontos);

        for (var l = 0; l < 3; l++) {
            pontos = 0;
            pontos += jogo['a'][l];
            pontos += jogo['b'][l];
            pontos += jogo['c'][l];
            ganhador(pontos);
        }

        pontos = 0;
        pontos = jogo['a'][1] + jogo['b'][2] + jogo['c'][3];
        ganhador(pontos);

        pontos = 0;
        pontos = jogo['a'][3] + jogo['b'][2] + jogo['c'][1];
        ganhador(pontos);
    }

    function ganhador(pontos) {
        if (pontos == -3) {
            alert('jogador 1 é o vencedor!');
            $('.jogada').off();
        } else if(pontos == 3) {
            alert('Jogador 2 é o vencedor!');
            $('.jogada').off();
        }
    }
})