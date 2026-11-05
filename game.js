const questions = [
 {q:"Quelle est la capitale du Canada ?",a:["Toronto","Ottawa","Montréal","Vancouver"],c:1,e:"Ottawa est la capitale du Canada depuis 1857."},
 {q:"Combien de côtés possède un hexagone ?",a:["5","6","7","8"],c:1,e:"Un hexagone possède six côtés."},
 {q:"Quelle planète est surnommée la planète rouge ?",a:["Vénus","Jupiter","Mars","Mercure"],c:2,e:"La poussière riche en oxyde de fer donne à Mars sa couleur rouge."},
 {q:"Qui a écrit « Les Misérables » ?",a:["Molière","Victor Hugo","Émile Zola","Balzac"],c:1,e:"Victor Hugo a publié Les Misérables en 1862."},
 {q:"Quel est le plus grand océan du monde ?",a:["Atlantique","Indien","Arctique","Pacifique"],c:3,e:"L'océan Pacifique couvre environ un tiers de la surface terrestre."},
 {q:"Combien de minutes y a-t-il dans 2 heures et demie ?",a:["120","130","150","180"],c:2,e:"2 heures et demie correspondent à 150 minutes."},
 {q:"Quel gaz les plantes absorbent-elles principalement ?",a:["Oxygène","Dioxyde de carbone","Azote","Hydrogène"],c:1,e:"Les plantes utilisent le dioxyde de carbone pendant la photosynthèse."},
 {q:"Dans quel pays se trouve la ville de Kyoto ?",a:["Chine","Corée du Sud","Japon","Thaïlande"],c:2,e:"Kyoto est une ancienne capitale du Japon."},
 {q:"Quel instrument mesure la température ?",a:["Baromètre","Thermomètre","Hygromètre","Altimètre"],c:1,e:"Le thermomètre sert à mesurer la température."},
 {q:"Quel est le résultat de 9 × 8 ?",a:["64","72","81"," olmayan"],c:1,e:"9 multiplié par 8 donne 72."}
];
questions[9].a[3]="79";
let order=[],index=0,score=0,timeLeft=15,tick=null,locked=false;
const $=id=>document.getElementById(id);
const home=$("home"),game=$("game"),result=$("result");
$("year").textContent=new Date().getFullYear();
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5)}
function start(){clearInterval(tick);order=shuffle(questions);index=0;score=0;home.classList.add("hidden");result.classList.add("hidden");game.classList.remove("hidden");$("score").textContent=score;showQuestion()}
function showQuestion(){
 locked=false;timeLeft=15;$("timer").textContent=timeLeft;$("feedback").textContent="";$("feedback").className="feedback";$("nextBtn").classList.add("hidden");
 const item=order[index];$("questionCount").textContent=`QUESTION ${index+1} / ${order.length}`;$("progressFill").style.width=`${(index/order.length)*100}%`;$("question").textContent=item.q;
 const wrap=$("answers");wrap.innerHTML="";
 item.a.forEach((answer,i)=>{const b=document.createElement("button");b.className="answer";b.textContent=`${String.fromCharCode(65+i)}. ${answer}`;b.addEventListener("click",()=>choose(i));wrap.appendChild(b)});
 clearInterval(tick);tick=setInterval(()=>{timeLeft--;$("timer").textContent=timeLeft;if(timeLeft<=0)choose(-1)},1000)
}
function choose(choice){
 if(locked)return;locked=true;clearInterval(tick);const item=order[index];const buttons=[...$("answers").children];
 buttons.forEach((b,i)=>{b.disabled=true;if(i===item.c)b.classList.add("correct");else if(i===choice)b.classList.add("wrong")});
 if(choice===item.c){score+=10;$("feedback").textContent="Bonne réponse ! "+item.e;$("feedback").classList.add("good")}
 else{$("feedback").textContent=(choice===-1?"Temps écoulé. ":"Pas tout à fait. ")+item.e;$("feedback").classList.add("bad")}
 $("score").textContent=score;$("nextBtn").textContent=index===order.length-1?"Voir mon résultat →":"Question suivante →";$("nextBtn").classList.remove("hidden")
}
function next(){if(!locked)return;index++;if(index>=order.length)finish();else showQuestion()}
function finish(){
 clearInterval(tick);game.classList.add("hidden");result.classList.remove("hidden");$("progressFill").style.width="100%";$("finalScore").textContent=score;
 const best=Math.max(score,Number(localStorage.getItem("quizflash-best")||0));localStorage.setItem("quizflash-best",best);$("bestScore").textContent=best;
 $("resultTitle").textContent=score===100?"Incroyable !":score>=70?"Excellent travail !":score>=40?"Bien joué !":"Continue à t'entraîner !";
 $("resultMessage").textContent=score>=70?"Tu as de solides connaissances. Relève un nouveau défi !":"Chaque partie est une occasion d'apprendre. Tu peux faire mieux !";
}
$("startBtn").addEventListener("click",start);$("nextBtn").addEventListener("click",next);$("replayBtn").addEventListener("click",start);
$("shareBtn").addEventListener("click",async()=>{const msg=`J'ai obtenu ${score}/100 points sur QuizFlash ! Peux-tu faire mieux ?`;if(navigator.share){try{await navigator.share({title:"Mon score QuizFlash",text:msg})}catch(e){}}else{try{await navigator.clipboard.writeText(msg);$("shareBtn").textContent="Score copié !"}catch(e){$("shareBtn").textContent=msg}}});
