var pergunta = 1
var a_q=0
var b_q=0
var c_q=0
var d_q=0
var e_q=0

function menuCell(){

    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
    }
}
function resultado(){
    if(a_q > b_q && a_q > c_q && a_q > d_q && a_q > e_q){
        window.alert('Abnegação')
    }
    if(b_q > a_q && b_q > c_q && b_q > d_q && b_q > e_q){
        window.alert('Amizade')
    }
    if(c_q > a_q && c_q > b_q && c_q > d_q && c_q > e_q){
        window.alert('Franqueza')
    }
    if(d_q > a_q && d_q > b_q && d_q > c_q && d_q > e_q){
        window.alert('Audácia')
    }
    if(e_q > a_q && e_q > b_q && e_q > c_q && e_q > d_q){
        window.alert('Erudição')
    }
}
function inicio(){
    var p = document.getElementById('q_p')
    var a = document.getElementById('q_a')
    var b = document.getElementById('q_b')
    var c = document.getElementById('q_c')
    var d = document.getElementById('q_d')
    var e = document.getElementById('q_e') 
    inicio_t.style.display = 'none'
    teste.style.display = 'block'

    if(pergunta == 1){
        p.innerHTML = `${pergunta}: Na sua opinião, qual é o maior problema da humanidade?`
        a.innerHTML = 'A: Egoísmo.'
        b.innerHTML = 'B: Agressividade.'
        c.innerHTML = 'C: Mentira.'
        d.innerHTML = 'D: Covardia.'
        e.innerHTML = 'E: Ignorância.'
    } else if(pergunta == 2){
        p.innerHTML = `${pergunta}:  Você quer que seus amigos e sua família te vejam como alguém que:`
        a.innerHTML = 'A: Se disponha a fazer sacrifícios e ajude qualquer um que precisa.'
        b.innerHTML = 'B: Todo mundo goste.'
        c.innerHTML = 'C: Protegerá eles independente do que acontecer.'
        d.innerHTML = 'D: Covardia.'
        e.innerHTML = 'E: Oferece conselhos sábios.'
    }else if(pergunta == 3){
        p.innerHTML = `${pergunta}:  Quando você enfrenta algum problema, sua reação é:`
        a.innerHTML = 'A: Fazer o que for melhor para o maior número de pessoas. '
        b.innerHTML = 'B: Criar um trabalho de arte que expresse seus sentimentos sobre a situação.'
        c.innerHTML = 'C: Debater o problema com seus amigos.'
        d.innerHTML = 'D: Enfrentá-lo. O que mais você faria? '
        e.innerHTML = 'E: Fazer uma lista dos prós e dos contras e, então, escolher a opção que pareça melhor.'
    }else if(pergunta == 4){
        p.innerHTML = `${pergunta}:  Se você tivesse que escolher uma das opções abaixo como profissão, qual escolheria?`
        a.innerHTML = 'A: Humanitário.'
        b.innerHTML = 'B: Fazendeiro.'
        c.innerHTML = 'C: Juiz.'
        d.innerHTML = 'D:  Bombeiro.'
        e.innerHTML = 'E: Cientista.'
    }else if(pergunta == 5){
        p.innerHTML = `${pergunta}:  Ao escolher sua roupa para o día, você escolhe:`
        a.innerHTML = 'A: Qualquer coisa que não atraia atenção.'
        b.innerHTML = 'B: Alguma coisa confortável, mas que seja interessante.'
        c.innerHTML = 'C: Alguma coisa simples, mas que expresse sua personalidade.'
        d.innerHTML = 'D: Qualquer coisa que atraia muita atenção.'
        e.innerHTML = 'E: Alguma coisa que não distraia ou iniba você do que tem que fazer durante o dia.'
    }else if(pergunta == 6){
        p.innerHTML = `${pergunta}: Se você descobrisse que o namorado(a) de um(a) amiga(o) está sendo infiel, você:`
        a.innerHTML = 'A: Contaria para seu amigo, pois sentiria que não seria saudável a continuidade de um relacionamento em que o egoísmo está presente.'
        b.innerHTML = 'B: Sentaria com ambos para agir como mediador enquanto eles conversam.'
        c.innerHTML = 'C: Contaria para seu amigo o mais rápido possível. Você não conseguiria guardar esse segredo.'
        d.innerHTML = 'D:  Confrontaria o traidor! Você poderia também fazer coisas como jogar ovos em sua casa - tudo para proteger seu amigo, claro!'
        e.innerHTML = 'E: Guardaria isso para você mesmo. Estatísticas comprovam que seu amigo descobrirá eventualmente.'
    }else if(pergunta == 7){
        p.innerHTML = `${pergunta}:  Qual sua prioridade na vida neste momento?`
        a.innerHTML = 'A: Servir as pessoas a sua volta.'
        b.innerHTML = 'B: Encontrar paz e felicidade para você mesmo.'
        c.innerHTML = 'C: Encontrar a verdade em todas as coisas.'
        d.innerHTML = 'D: Desenvolver sua força e seu caráter.'
        e.innerHTML = 'E: Ser bem sucedido na escola ou no trabalho.'
    }else if(pergunta == 8){
        p.innerHTML = `${pergunta}:  Que atividade você se encontra fazendo nos fins de semana ou em algum dia livre?`
        a.innerHTML = 'A: Voluntariado.'
        b.innerHTML = 'B: Pintura, dança ou escrita de poesias.'
        c.innerHTML = 'C: Dividir opiniões com seus amigos.'
        d.innerHTML = 'D: Escalar rochas ou pular de paraquedas.'
        e.innerHTML = 'E: Entrar em dia com os estudos ou ler por prazer.'
    }else if(pergunta == 9){
        p.innerHTML = `${pergunta}:  Se você vê duas pessoas brigando o que faz?`
        a.innerHTML = 'A: Procura ajudar as duas partes, afinal cada um deve ter sua razão.'
        b.innerHTML = 'B: Se dispõe a conversar e oferece um ombro amigo.'
        c.innerHTML = 'C: Julga as partes envolvidas e toma partido em favor de um dos dois.'
        d.innerHTML = 'D: Entra no meio e separa, mesmo que sobre para você.'
        e.innerHTML = 'E: Tenta entender o problema, questiona o porque da briga e analisa bem o caso.'
    }else if(pergunta == 10){
        p.innerHTML = `${pergunta}:  Qual dessas virtudes você mais valoriza em um amigo?`
        a.innerHTML = 'A: Solidariedade.'
        b.innerHTML = 'B: Companheirismo.'
        c.innerHTML = 'C: Sinceridade.'
        d.innerHTML = 'D: Coragem.'
        e.innerHTML = 'E: Inteligência.'
    }
}
function questa(){
    a_q= a_q+1
    pergunta= pergunta+1
    if( pergunta > 10){
        resultado()
    }else{
        inicio()
    }
}
function questb(){
    b_q= b_q+1
    pergunta= pergunta+1
    if( pergunta > 10){
        resultado()
    }else{
        inicio()
    }
}
function questc(){
    c_q= c_q+1
    pergunta= pergunta+1
    if( pergunta > 10){
        resultado()
    }else{
        inicio()
    }
}
function questd(){
    d_q= d_q+1
    pergunta= pergunta+1
    if( pergunta > 10){
        resultado()
    }else{
        inicio()
    }
}
function queste(){
    e_q= e_q+1
    pergunta= pergunta+1
    if( pergunta > 10){
        resultado()
    }else{
        inicio()
    }
}
