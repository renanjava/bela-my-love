/**
 * Timeline Data — Finais de semana de junho a agosto 2026
 * 
 * COMO EDITAR:
 * - Troque o "title" pelo título real do momento
 * - Troque a "description" pela descrição do que aconteceu
 * - Troque o "emoji" por um emoji que represente o momento
 * - Adicione "image" com o caminho da foto (ex: "/images/foto1.jpg")
 * 
 * Obs: O fim de semana de 19-20 de julho foi excluído conforme solicitado.
 */

const timelineData = [
  // ===== JUNHO 2026 =====
  {
    id: 'jun-27',
    date: '27 e 28 de junho',
    month: 'Junho 2026',
    title: 'Nossa primeira jogatina: Luma Island',
    description: 'Para nos conhecermos melhor, te convidei para jogarmos algum joguinho juntos. Você inicialmente queria jogar Mecca Chameleon, mas acabamos jogando Luma Island, o jogo da fazendinha.',
    emoji: '✨',
    images: [
      '/timeline/dates/jun-27-1.jpg',
      '/timeline/dates/jun-27-3.jpg',
    ],
    video: '/timeline/dates/jun-27-4.mp4',
    highlight: true,
  },

  // ===== JULHO 2026 =====
  {
    id: 'jun-30',
    date: '30 de junho',
    month: 'Junho 2026',
    title: 'Nosso primeiro encontro: Catedral, McDonald’s e Domitilla',
    description: 'Vi uma brecha no meio da semana em que eu iria a Maringá resolver um assunto da faculdade e aproveitei para te convidar para nos vermos pela primeira vez. Marcamos na Catedral, nós dois bem tímidos. Depois, com fome, pedi um McDonald’s para nós, e você só comeu batata kkkkkk. Em seguida, você me levou ao Domitilla. Fiquei com muita vergonha, mas foi uma experiência muito legal.',
    emoji: '💕',
    image: '/timeline/dates/jun-30-1.jpg',
    highlight: false,
  },
  {
    id: 'jul-11',
    date: '11 e 12 de julho',
    month: 'Julho 2026',
    title: 'Catedral, cinema e o nosso primeiro selinho',
    description: 'Nesse dia, fui ao shopping com minha mãe e aproveitei para ficar por lá esperando você. Comprei um relógio por causa da dor no meu pulso, causada pelos pinos, e te esperei por volta das 17h10 às 17h30, no Pamonhas do Cezar. Como ainda estava cedo para o filme, fomos caminhando até a Catedral para esperar o horário. Depois que sentamos, deitei no teu colo para conversarmos sobre a vida. Durante o filme, fiz bastante contato físico e, na hora de ir embora, tentamos sair de mãos dadas. Depois, sentamos nos banquinhos do Parque do Ingá para refletir sobre a vida e, no final, demos um selinho de despedida.',
    emoji: '🌙',
    images: ['/timeline/dates/jul-11-1.jpg', '/timeline/dates/jul-11-2.jpg', '/timeline/dates/jul-11-3.jpg'],
    highlight: false,
  },
  // 19-20 de Julho — EXCLUÍDO
  {
    id: 'jul-25',
    date: '25 e 26 de julho',
    month: 'Julho 2026',
    title: 'Eurogarden e o nosso primeiro beijo',
    description: 'Cheguei exatamente às 15h19 à rodoviária, e você estava me esperando. Ficamos constrangidos porque nos vimos de longe, e foram alguns passos até chegarmos um ao outro. Saímos de mãos dadas e pegamos um Uber para o Eurogarden. Conversamos um pouco no banco e, logo depois, fizemos um minipiquenique. Quase anoitecendo, demos uns beijinhos, e eu quis ir para outro lugar para ficarmos mais confortáveis. Caminhamos pelo Eurogarden, e precisei pegar sua blusa porque estava com muito frio. Até perguntei se eu estava meio afeminado com aquela blusa verde, coladinha e de lã. Como não encontrávamos nenhum lugar, começamos a andar sem rumo para fora do Eurogarden. Passamos pelo Hospital da Criança e, por ali, entramos em um beco e demos muitos beijinhos. Logo depois, você comprou duas latinhas de Skol Beats para ficar menos tímida, em um bar logo ao lado. Andamos mais um pouco e ficamos na praça conversando e tirando fotos. Até jogamos jogo da velha em um parquinho. Depois, fomos à famosa árvore que encontramos e ficamos muito tempo lá, dando beijinhos.',
    emoji: '🌹',
    images: ['/timeline/dates/jul-25-1.jpg', '/timeline/dates/jul-25-2.jpg', '/timeline/dates/jul-25-3.jpg', '/timeline/dates/jul-25-4.jpg', '/timeline/dates/jul-25-5.jpg'],
    highlight: true,
  },

  // ===== AGOSTO 2026 =====
  {
    id: 'ago-01',
    date: '1 e 2 de agosto',
    month: 'Agosto 2026',
    title: 'Nossa primeira noite juntos',
    description: 'Alugamos um Airbnb em frente ao terminal para passarmos uma noite juntos. Chegamos lá às 14h50, fizemos skincare, jogamos Uno e também tomamos um vinhozinho. Depois, nos arrumamos para assistir a Homem-Aranha no cinema, às 21h45. Tiramos uma fotinha no espelho antes e fomos ao Maringá Park. Durante o filme, brincamos que, toda vez que o Homem-Aranha soltasse uma teia, daríamos um selinho kkkkkk. Até encontrei um amigo meu cabeludo por lá. Depois que saímos, fomos ao Domitilla, compramos dois drinks e os tomamos enquanto caminhávamos de volta para o Airbnb. O meu era de morango, bem forte, e o seu era o de sempre, com blueberry, se não me engano KKKKKKK.',
    emoji: '🦋',
    images: ['/timeline/dates/ago-01-1.jpg', '/timeline/dates/ago-01-2.jpg', '/timeline/dates/ago-01-3.jpg', '/timeline/dates/ago-01-4.jpg'],
    highlight: true,
  },
  {
    id: 'ago-07',
    date: '7, 8 e 9 de agosto',
    month: 'Agosto 2026',
    title: 'Minha colação de grau e o encontro com a família',
    description: 'Numa decisão em cima da hora, te chamei para vir à minha colação de grau um dia antes KKKKK. Você ainda não tinha visto minha mãe pessoalmente, e foi lá que aconteceu o primeiro contato entre vocês. Foi muito louco! Depois, aproveitamos para comer uma pizza, e lá você conheceu o Victor, no nosso primeiro rolezinho com o rótulo de “namorados”. No dia seguinte, você me convidou para o aniversário da sua avó, e pude conhecer seu pai e sua mãe pela primeira vez, além do Patrick kkkkkk. Lá, tirei uma foto com toda a sua família reunida e também conheci a Bia e o Murilo. Fiquei horas conversando com seu pai sobre carros e motos. Depois, fomos para casa, tiramos uma fotinha e foi a primeira vez que postei uma foto nossa. Também foi a primeira vez que dormi na sua casa. Não encontrei a foto que tiramos comigo e com toda a sua família.',
    emoji: '💫',
    images: ['/timeline/dates/ago-07-1.jpg', '/timeline/dates/ago-07-2.jpg', '/timeline/dates/ago-07-3.jpg', '/timeline/dates/ago-07-4.jpg', '/timeline/dates/ago-07-5.jpg',],
    highlight: false,
  },
  {
    id: 'ago-15',
    date: '15 e 16 de agosto',
    month: 'Agosto 2026',
    title: 'Seu primeiro fim de semana em Itambé',
    description: 'Nosso fim de semana mais produtivo kkkkkk, no sábado você veio de ônibus pra Itambé (foi sua primeira vez pegando ele), chegando aqui eu fiquei te esperando de motinha cinza no primeiro ponto kkkk, ai a gente deu umas voltinhas de moto e você falou pra minha mãe depois que eu não paro nos quebra-molas kkkkkkkkk. Nós fomos no restaurante almoçar e minha mãe fez o frango à parmegiana que você gosta, e aí eu decidi pegar a biz branca pra gente ir fazer uma visita pra minha vó e logo depois pra minha tia. Um pouco mais de noite, a gente foi na minha academia treinar costas e bíceps, junto com o Victor e um amigo nosso, e depois a gente já emendou de ir comer uma pizza com meu pai, minha madrasta e o Victor, depois de comer e papear, eu dei a brilhante ideia de ir num bar extremamente duvidoso, que depois que contei pro meu pai e minha madrasta eles riram porque era um péssimo lugar pra ir, porém, eu tava querendo ir lá só pra ajudar o dono que não era muito bem financeiramente, eles ficaram mais chocados ainda depois que eu falei que a gente ia a pé kkkkkk. Foi aí que eles falaram "vamos lá de carro só pra vocês terem uma ideia", eles levaram a gente com o carro da auto-escola e no caminho a gente percebeu que era muito longe pra ir a pé, chegando lá, eu percebi que o lugar realmente tinha pessoas muito duvidosas, e pra não sair de lá com as mãos abanando eu pedi um Monster pro dono só pra não ficar esquisito, mas não tinha KKKKK. Ainda andando pela cidade, eles foram te mostrando como era as coisas e perto de casa, sem querer a gente achou um rodeio muito suspeito que era de cavalos, vimos um pouco lá e depois saímos andando, encontramos o Murilo doidinho que tava dançando (o corcundinha) falando sozinho, aí fomos numa conveniência e compramos 3 Skol Beats, uma pra mim, uma pra você e outra pro Victor, mas estava muito ruim. Depois disso, caminhamos a avenida da cidade inteira sentido a uma praça bem legalzinha, e lá a gente tirou umas fotinhas e postamos',
    emoji: '🌸',
    images: ['/timeline/dates/ago-15-1.jpg', '/timeline/dates/ago-15-2.jpg', '/timeline/dates/ago-15-3.jpg', '/timeline/dates/ago-15-4.jpg', '/timeline/dates/ago-15-5.jpg', '/timeline/dates/ago-15-6.jpg', '/timeline/dates/ago-15-7.jpg'],
    highlight: false,
  },
  {
    id: 'ago-22',
    date: '22 e 23 de agosto',
    month: 'Agosto 2026',
    title: 'Área 51, Race Park e o nascimento do “momo”',
    description: 'Do fim de semana anterior, a gente já combinou de ir no Race Park na próxima semana. fui aí na sexta-feira, 17:40 eu tava no ponto de ônibus e levei meu notebook pra trabalhar um pouco lá, como o ponto da faculdade é do lado, o Victor viu e me zoou que home office não é mil maravilhas kkkkk, na sexta-feira dormi na sua casa, levei meu perfume Cardamom que sua mãe amou (você até gravou um audio escondido dela elogiando) e deixei o frasco ai. No sábado, a gente, antes de ir no Race Park, passamos na Área 51 pra comer um lanche, o meu eu acabei não gostando por causa da maionese branca e o seu tinha um bacon muito gorduroso, a gente tirou umas fotinhas no meme lá porque o lugar era muito bonito. No race park (depois de ter roubado a jaqueta de couro do seu pai) a gente ficou vendo os drifts, as batalhas de ronco, os carrões, compramos uns adesivos e tentamos tirar umas fotos pra postar no feed (quase deu certo). Fomos embora e você dormiu em casa, como eu tava sem sono, eu fui jogar um pouquinho enquanto você dormia, depois de 1 hora e pouco, desliguei e fui dormir, fiquei com muita dó de te acordar, mas te acordei, e nesse momento eu percebi que eu amo te ver com soninho e nesse dia a gente bateu o martelo pro nosso novo apelido "momo" que deu muito certo e a gente usa até hoje, substituimos qualquer outra gíria como "mano/vei/cara" por "momo"',
    emoji: '🎵',
    images: ["/timeline/dates/ago-22-1.jpg", "/timeline/dates/ago-22-2.jpg", "/timeline/dates/ago-22-3.jpg", "/timeline/dates/ago-22-4.jpg", "/timeline/dates/ago-22-5.jpg", "/timeline/dates/ago-22-6.jpg"],
    audio: '/timeline/dates/ago-22-7.ogg',
    audioLabel: 'Marizete falando do perfume do Renan',
    highlight: false,
  },
  {
    id: 'ago-29',
    date: '29 e 30 de agosto',
    month: 'Agosto 2026',
    title: 'Maribel, cuidado e uma intoxicação alimentar',
    description: 'No rolê anterior do drift, vi que você tinha amado uma capivarinha no carro e achei que gostasse muito de capivaras. Fui ao Mercado Livre e comprei uma capivarinha de pelúcia porque ela era extremamente fofa. Quando cheguei à sua casa, perguntei se você gostava de capivara, e você disse “NÃO” KKKKKKKKKKK. Mais tarde, planejamos ir ao Jacaré Vermelho, mas ficamos enrolando e não deu mais tempo. Até hoje não fomos, mas uma hora sai. Como segunda opção, fomos caminhando ao McDonald’s perto da sua casa. Lá, soltávamos uns “momo” meio altos sem querer, e, em um momento específico, todo mundo ficou quieto e você soltou um “momo” bem alto. Não sabia onde enfiar a cabeça... Eu devorei um McMelt Duplo Cheddar, com uma batata grande e uma Coca-Cola, enquanto você pediu um Big Mac, uma Coca-Cola e uma batatinha. Porém, o McMelt estava muito cheddarzudo... Fomos para casa dormir, e sua mãe fez uma massagem em você que me deu inveja (queria que fosse em mim). Às 6 da manhã, comecei a sentir muita tontura. No início, ignorei, mas foi piorando: saí do seu quarto, vomitei e fomos ao HU. Chegando lá, disseram que só poderiam me internar. Então, pegamos um Uber para a UPA, onde tomei alguns remédios e melhorei. Voltamos para sua casa, e sua mãe foi um amor, fazendo de tudo para me ver bem. O balde em que vomitei umas 20 vezes foi o salvador da pátria. Depois, seu pai comprou um ar-condicionado para você, porque eu supostamente estava passando mal de calor no seu quarto KKKKKKKK. A pancada no dedinho mindinho do pé, que quase o quebrou, foi o sofrimento para pagar o ar depois de 26 anos sem KKKKKKKKKK. Nesse fim de semana, você comprou várias coisinhas que eu amo comer, e isso foi muito especial para mim, porque você cuidou tão bem de mim. Fiquei muito feliz com suas atitudes.',
    emoji: '🥂',
    images: ["/timeline/dates/ago-29-1.jpg", "/timeline/dates/ago-29-2.jpg", "/timeline/dates/ago-29-3.jpg", "/timeline/dates/ago-29-4.jpg", "/timeline/dates/ago-29-5.jpg"],
    highlight: false,
  },

  // ===== SETEMBRO 2026 =====
  {
    id: 'set-05',
    date: '5 e 6 de setembro',
    month: 'Setembro 2026',
    title: 'Calças baggy, chuva e o presente antecipado',
    description: 'Percebi que uma das suas maiores inseguranças é suas olheiras, comprei um produtinho pra isso no Mercado Livre e levei pra você, também aproveitei pra comprar seu presente de aniversário, um sapato da Bershka que um dia antes você tinha falado dessa marca dai eu tive que me fazer de besta pra não dar na cara, mas aí não consegui esperar o dia 15 de setembro e te entreguei nesse final de semana mesmo KKKKKKKK. Esse final de semana estava decidido que a gente ia no shopping porque minhas calças (todas skinny) eu estava 100% enjoado e eu queria experimentar outros tipos de calças, como Baggy e Reta, fomos na Renner e aproveitei pra usar umas roupas alternativas só pra experimentar KKKKKKK, levei 10 peças de roupas no provador e você foi opinando em tudo. No final a gente acabou indo pra Starpoint, eu e você gostamos de duas, uma Vans clara e outra mais escura, as duas eram baggy, porém, estava caro e eu só comprei a da Vans, mas saindo da loja o vendedor conseguiu fazer minha cabeça e levei a outra que eu tinha gostado, ele deu uns 200 reais de desconto KKKKKKKKKKK. Voltamos pra casa e eu fiquei todo todo mostrando as calças novas pra sua mãe e pro seu pai (claro, com muito medo deles acharem feias KKKKKKKKK). No dia seguinte a gente planejou de ir no Jacaré vermelho, mas não deu certo (de novo) porque minha mãe queria que a gente fosse na corrida da igreja Missionária (a que ela frequenta), como as ruas estavam todas fechadas em volta, o Uber deixou a gente quase 2km de distância e nós basicamente fizemos o percurso inteiro da corrida (inclusive era naquela rua suspeita kkkkkkkkkkkkkkk) a gente chegou lá na minha mãe, ela tirou uma fotinha com a gente e fomos no shopping comer um prato feito. Depois, minha mãe levou a gente embora pra sua casa e pegamos a maior chuva de todos os tempos, quase ela levou o carro embora, tive que tirar minha calça nova pra quando sair do carro não molhar. No dia seguinte, a gente pegou um busão no terminal pra Itambé umas 15:50 e passamos o domingo em casa, na segunda, era feriado e a gente foi de carro pro atacadão e aproveitei pra te deixar em casa, esse fim de semana eu dormi a maior parte do tempo porque eu fico com muito sono perto da minha momoladinha',
    emoji: '🍂',
    images: ["/timeline/dates/set-05-1.jpg", "/timeline/dates/set-05-2.jpg", "/timeline/dates/set-05-3.jpg", "/timeline/dates/set-05-4.jpg"],
    highlight: false,
  },
  {
    id: 'set-12',
    date: '12 e 13 de setembro',
    month: 'Setembro 2026',
    title: 'Um fim de semana caseiro, cheio de chuva e sono',
    description: 'Esse fim de semana eu estava com um hiperfoco absurdo na calça da MM, e como tava com previsão o fim de semana inteiro chovendo, combinamos de passar o fim de semana todo na minha casa, e eu já havia passado muito tempo na sua e eu queria deixar seus pais de boa e dar uma aliviada. Assistimos metade do UP altas aventuras (o seu desenhozinho favorito), eu não consegui porque na metade do filme eu comecei a cochilar dai a gente parou. Fizemos uma skincare que era pra ser feito há mais de 1 mês que você tinha comprado. Fiz a gente trabalhar um pouquinho na marra, porque somos um casal foda e referência. Depois tentamos assistir um pouquinho de Carros e o Frangoelho que você comentou que havia sido citado por um cara num podcast, mas eu não tava conseguindo porque eu dormi na metade também KKKKKKK. E eu não podia esquecer do momento marcante que você foi espirrar e acabou soltando um peido estrondoso KKKKKKKKKKKKK. A gente inventou de dar uma saidinha e enquanto você se maquiava, fui treinar com o Victor porque eu tava morrendo de vontade de usar a calça nova da Mental Madness. Saímos um pouco de carro à noite para floresta quase meia-noite procurando um lugar pra comer e acabamos comendo um dogão. Depois a gente tentou tirar umas fotinhas aesthetic gamer nerd mas não deu muito certo também kkk',
    emoji: '🎂',
    images: ["/timeline/dates/set-12-2.jpg", "/timeline/dates/set-12-5.jpg", "/timeline/dates/set-12-6.jpg", "/timeline/dates/set-12-7.jpg"],
    highlight: true,
  },
];

export default timelineData;
