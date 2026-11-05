const QUESTIONS = [
{c:"Joueurs",l:"Facile",q:"Quel joueur est surnommé « La Pulga » ?",a:["Cristiano Ronaldo","Lionel Messi","Neymar","Kylian Mbappé"],k:1,e:"Lionel Messi est surnommé « La Pulga », qui signifie « la puce »."},
{c:"Joueurs",l:"Facile",q:"De quelle nationalité est Kylian Mbappé ?",a:["Belge","Française","Sénégalaise","Espagnole"],k:1,e:"Kylian Mbappé est un footballeur international français."},
{c:"Joueurs",l:"Moyen",q:"Quel joueur a remporté le Ballon d'Or 2006 ?",a:["Fabio Cannavaro","Zinedine Zidane","Ronaldinho","Kaká"],k:0,e:"Fabio Cannavaro a remporté le Ballon d'Or 2006 après la Coupe du monde."},
{c:"Joueurs",l:"Moyen",q:"Quel gardien a remporté le Ballon d'Or 1963 ?",a:["Gianluigi Buffon","Lev Yachine","Dino Zoff","Oliver Kahn"],k:1,e:"Lev Yachine reste le seul gardien à avoir remporté le Ballon d'Or, en 1963."},
{c:"Joueurs",l:"Difficile",q:"Quel joueur a inscrit le but le plus rapide de l'histoire de la Coupe du monde masculine (11 secondes, en 2002) ?",a:["Ronaldo","Hakan Şükür","Miroslav Klose","Robbie Keane"],k:1,e:"Hakan Şükür a marqué après environ 11 secondes contre la Corée du Sud en 2002."},
{c:"Joueurs",l:"Difficile",q:"Quel pays représentait George Weah en sélection ?",a:["Ghana","Nigeria","Liberia","Côte d’Ivoire"],k:2,e:"George Weah a représenté le Liberia. Il a remporté le Ballon d'Or en 1995."},
{c:"Arbitrage",l:"Facile",q:"Quelle couleur indique une expulsion ?",a:["Jaune","Bleue","Rouge","Verte"],k:2,e:"Le carton rouge signifie l'expulsion du joueur."},
{c:"Arbitrage",l:"Moyen",q:"Que signifie l'abréviation VAR dans le football ?",a:["Video Assistant Referee","Verified Action Rule","Virtual Assistant Review","Video Attack Replay"],k:0,e:"VAR signifie Video Assistant Referee, soit assistance vidéo à l'arbitrage."},
{c:"Arbitrage",l:"Moyen",q:"Combien d'arbitres assistants se trouvent habituellement sur les lignes de touche ?",a:["Un","Deux","Trois","Quatre"],k:1,e:"Deux arbitres assistants sont habituellement placés le long des lignes de touche."},
{c:"Arbitrage",l:"Difficile",q:"Depuis quelle année la VAR a-t-elle été utilisée en phase finale de la Coupe du monde masculine ?",a:["2010","2014","2018","2022"],k:2,e:"La VAR a été utilisée pour la première fois en phase finale de la Coupe du monde masculine en 2018, en Russie."},
{c:"Règles",l:"Facile",q:"Combien de joueurs une équipe aligne-t-elle au début d'un match ?",a:["9","10","11","12"],k:2,e:"Une équipe commence normalement un match avec 11 joueurs, gardien compris."},
{c:"Règles",l:"Facile",q:"Quelle est la durée réglementaire d'un match senior, hors temps additionnel et prolongation ?",a:["80 minutes","90 minutes","100 minutes","120 minutes"],k:1,e:"Un match se joue en deux périodes de 45 minutes."},
{c:"Règles",l:"Moyen",q:"À quelle distance du point de penalty se trouve le but ?",a:["9,15 m","10 m","11 m","12 m"],k:2,e:"Le point de penalty se situe à 11 mètres de la ligne de but."},
{c:"Règles",l:"Moyen",q:"Un joueur peut-il être hors-jeu directement sur un coup de pied de but ?",a:["Oui, toujours","Non","Seulement dans sa moitié","Seulement après 2020"],k:1,e:"Il n'y a pas d'infraction de hors-jeu lorsqu'un joueur reçoit directement le ballon sur un coup de pied de but."},
{c:"Règles",l:"Difficile",q:"Quelle est la durée maximale d'une prolongation dans un match à élimination directe ?",a:["15 minutes","20 minutes","30 minutes","45 minutes"],k:2,e:"La prolongation comporte deux périodes de 15 minutes, soit 30 minutes au total."},
{c:"Terrain",l:"Facile",q:"Quelle forme a un terrain de football ?",a:["Circulaire","Rectangulaire","Ovale","Triangulaire"],k:1,e:"Le terrain de jeu est rectangulaire."},
{c:"Terrain",l:"Moyen",q:"Quelle est la largeur réglementaire d'un but de football ?",a:["6,32 m","7,32 m","8,32 m","9,32 m"],k:1,e:"Un but mesure 7,32 mètres de largeur entre les poteaux."},
{c:"Terrain",l:"Moyen",q:"À quelle distance du point de penalty se trouve l'arc de cercle de la surface de réparation ?",a:["5,5 m","9,15 m","11 m","16,5 m"],k:1,e:"L'arc est tracé à 9,15 mètres du point de penalty."},
{c:"Stades",l:"Facile",q:"Dans quel stade joue principalement le Real Madrid ?",a:["Camp Nou","Santiago Bernabéu","Metropolitano","Mestalla"],k:1,e:"Le Real Madrid joue au stade Santiago Bernabéu, à Madrid."},
{c:"Stades",l:"Moyen",q:"Quel club joue à Anfield ?",a:["Manchester United","Chelsea","Liverpool","Arsenal"],k:2,e:"Anfield est le stade emblématique de Liverpool FC."},
{c:"Stades",l:"Moyen",q:"Le stade Maracanã se trouve dans quelle ville ?",a:["São Paulo","Rio de Janeiro","Brasília","Salvador"],k:1,e:"Le Maracanã se trouve à Rio de Janeiro, au Brésil."},
{c:"Stades",l:"Difficile",q:"Quel stade a accueilli la finale de la Coupe du monde 2010 ?",a:["Wembley","Soccer City / FNB Stadium","Maracanã","Olympiastadion"],k:1,e:"La finale 2010 entre l'Espagne et les Pays-Bas s'est jouée au Soccer City de Johannesburg."},
{c:"Clubs",l:"Facile",q:"Quel club est surnommé « les Red Devils » en Angleterre ?",a:["Liverpool","Manchester United","Arsenal","Everton"],k:1,e:"Manchester United est surnommé les Red Devils."},
{c:"Clubs",l:"Moyen",q:"Qui était président du Real Madrid en 2000, année de l'élection de Florentino Pérez ?",a:["Ramón Mendoza","Lorenzo Sanz","Florentino Pérez","Santiago Bernabéu"],k:2,e:"Florentino Pérez a été élu président du Real Madrid en juillet 2000, succédant à Lorenzo Sanz."},
{c:"Clubs",l:"Moyen",q:"Quel club a été fondé en 1899 par Joan Gamper ?",a:["Real Madrid","FC Barcelone","Valence CF","Atlético de Madrid"],k:1,e:"Le FC Barcelone a été fondé en 1899 par Joan Gamper et ses associés."},
{c:"Clubs",l:"Difficile",q:"Qui était président de la FIFA en 2010 ?",a:["João Havelange","Sepp Blatter","Michel Platini","Gianni Infantino"],k:1,e:"Sepp Blatter était président de la FIFA en 2010."},
{c:"Compétitions",l:"Facile",q:"Tous les combien d'années la Coupe du monde masculine se déroule-t-elle normalement ?",a:["2 ans","3 ans","4 ans","5 ans"],k:2,e:"La Coupe du monde masculine se déroule normalement tous les quatre ans."},
{c:"Compétitions",l:"Facile",q:"Quel pays a remporté la Coupe du monde masculine 2018 ?",a:["Croatie","France","Brésil","Allemagne"],k:1,e:"La France a remporté la Coupe du monde 2018 en battant la Croatie en finale."},
{c:"Compétitions",l:"Moyen",q:"Quel pays a remporté la première Coupe du monde masculine, en 1930 ?",a:["Argentine","Italie","Uruguay","Brésil"],k:2,e:"L'Uruguay a remporté la première Coupe du monde, organisée chez lui en 1930."},
{c:"Compétitions",l:"Moyen",q:"Quelle compétition européenne oppose les sélections nationales ?",a:["Ligue des champions","Euro","Ligue Europa","Conference League"],k:1,e:"Le Championnat d'Europe des nations, appelé Euro, oppose les sélections européennes."},
{c:"Compétitions",l:"Difficile",q:"Quel club a remporté la première édition de la Coupe des clubs champions européens, en 1956 ?",a:["AC Milan","Real Madrid","Benfica","Stade de Reims"],k:1,e:"Le Real Madrid a remporté la première édition en 1956."},
{c:"Afrique",l:"Facile",q:"Quel pays a remporté la CAN 2023, disputée en 2024 ?",a:["Nigeria","Sénégal","Côte d'Ivoire","Maroc"],k:2,e:"La Côte d'Ivoire a remporté la CAN 2023, organisée en janvier et février 2024."},
{c:"Afrique",l:"Facile",q:"Quel pays a remporté la CAN 2019 ?",a:["Algérie","Égypte","Cameroun","Tunisie"],k:0,e:"L'Algérie a remporté la CAN 2019 en battant le Sénégal en finale."},
{c:"Afrique",l:"Moyen",q:"Quel pays africain a atteint les demi-finales de la Coupe du monde masculine 2022 ?",a:["Ghana","Maroc","Cameroun","Sénégal"],k:1,e:"Le Maroc est devenu le premier pays africain à atteindre les demi-finales d'une Coupe du monde masculine."},
{c:"Afrique",l:"Moyen",q:"Quel joueur ivoirien a remporté le Ballon d'Or africain 2013 ?",a:["Didier Drogba","Yaya Touré","Kolo Touré","Gervinho"],k:1,e:"Yaya Touré a remporté le titre de Joueur africain de l'année 2013."},
{c:"Afrique",l:"Difficile",q:"Quel pays a remporté la toute première édition de la CAN, en 1957 ?",a:["Égypte","Éthiopie","Soudan","Ghana"],k:0,e:"L'Égypte a remporté la première Coupe d'Afrique des nations en 1957."}
];

const $ = id => document.getElementById(id);
let round=[], index=0, score=0, timeLeft=20, clock=null, answered=false;
function show(id){["home","game","result"].forEach(x=>$(x).classList.toggle("hidden",x!==id));}
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5);}
function startGame(){
  const cat=$("category").value, level=$("level").value;
  let pool=QUESTIONS.filter(q=>(cat==="all"||q.c===cat)&&q.l===level);
  if(pool.length<10) pool=QUESTIONS.filter(q=>(cat==="all"||q.c===cat));
  if(pool.length<10){alert("Pas assez de questions dans cette catégorie. Choisis « Toutes les catégories ».");return;}
  round=shuffle(pool).slice(0,10); index=0; score=0; show("game"); renderQuestion();
}
function renderQuestion(){
  answered=false; timeLeft=20; $("feedback").textContent=""; $("next").classList.add("hidden");
  const q=round[index]; $("progress").textContent=`Question ${index+1}/10`;
  $("timer").textContent=`⏱ ${timeLeft} s`; $("progressbar").style.width=`${(index+1)*10}%`;
  $("qcategory").textContent=q.c; $("question").textContent=q.q;
  $("answers").innerHTML="";
  q.a.forEach((a,i)=>{const b=document.createElement("button");b.className="answer";b.textContent=`${String.fromCharCode(65+i)}. ${a}`;b.addEventListener("click",()=>choose(i));$("answers").appendChild(b);});
  clearInterval(clock); clock=setInterval(()=>{timeLeft--; $("timer").textContent=`⏱ ${timeLeft} s`; if(timeLeft<=0){clearInterval(clock);choose(-1);}},1000);
}
function choose(choice){
  if(answered)return; answered=true; clearInterval(clock);
  const q=round[index], buttons=[...$("answers").children];
  buttons.forEach((b,i)=>{b.disabled=true;if(i===q.k)b.classList.add("correct");else if(i===choice)b.classList.add("wrong");});
  if(choice===q.k){score++;$("feedback").innerHTML=`<strong>Bonne réponse !</strong> ${q.e}`;}
  else $("feedback").innerHTML=`<strong>${choice===-1?"Temps écoulé !":"Mauvaise réponse."}</strong> Bonne réponse : ${q.a[q.k]}. ${q.e}`;
  $("next").classList.remove("hidden"); $("next").textContent=index===9?"VOIR MON RÉSULTAT":"QUESTION SUIVANTE";
}
function next(){if(index<9){index++;renderQuestion();}else finish();}
function finish(){clearInterval(clock);show("result");$("score").textContent=score;$("result-title").textContent=score>=8?"Excellent !":score>=5?"Bien joué !":"Continue à t'entraîner !";$("result-message").textContent=score===10?"Sans faute ! Tu maîtrises le sujet.":`Tu as obtenu ${score} bonne(s) réponse(s) sur 10. Rejoue pour progresser !`;}
$("start").addEventListener("click",startGame);$("next").addEventListener("click",next);$("again").addEventListener("click",()=>show("home"));
