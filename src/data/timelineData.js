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
    date: '27-28 de Junho',
    month: 'Junho 2026',
    title: 'Nossa primeira jogatina juntos',
    description: 'Para nos conhecermos melhor, te convidei para jogar algum joguinho juntos, você inicialmente queria jogar Mecca chameleon, mas acabamos jogando o jogo da fazendinha Luma Island',
    emoji: '✨',
    images: [
      '/timeline/dates/jun-27-1.jpg',
      '/timeline/dates/jun-27-3.jpg',
    ],
    highlight: true,
  },

  // ===== JULHO 2026 =====
  {
    id: 'jun-30',
    date: '30 de Junho',
    month: 'Junho 2026',
    title: 'Catedral & Mc Donalds',
    description: 'Vi uma brecha no meio da semana que eu ia pra Maringá resolver um negócio da faculdade e aproveitei e te convitei pra gente se ver pela primeira vez e marcamos na Catedral, a gente bem timidozinhos, depois com fome, pedi um McDonalds pra gente e você só comeu batata kkkkkk e aí você me levou no Domitilla, fiquei com muita vergonha mas foi uma experiência muito legal',
    emoji: '💕',
    image: '/timeline/dates/jun-30-1.jpg',
    highlight: false,
  },
  {
    id: 'jul-11',
    date: '11-12 de Julho',
    month: 'Julho 2026',
    title: 'Catedral & Cinema',
    description: 'Nesse dia eu fui no shopping com minha mãe e aproveitei e fiquei por lá para te esperar, comprei um relógio por causa da dor do meu pulso por causa dos pinos e te esperei por volta das 17:10~17:30 lá no Pamonhas do Cezar, como tava muito cedo pro filme, fomos andando até a Catedral até dar o horário e depois que sentamos, deitei no teu colo pra gente conversar sobre a vida. No filme fiz muito contato físico e indo embora, tentamos sair de mãos dadas, depois sentamos nos banquinhos do Parque do Ingá para refletir sobre a vida, e no final demos um selinho de despedida',
    emoji: '🌙',
    images: ['/timeline/dates/jul-11-1.jpg', '/timeline/dates/jul-11-2.jpg', '/timeline/dates/jul-11-3.jpg'],
    highlight: false,
  },
  // 19-20 de Julho — EXCLUÍDO
  {
    id: 'jul-25',
    date: '25-26 de Julho',
    month: 'Julho 2026',
    title: 'Eurogarden & Nosso primeiro beijo',
    description: 'Cheguei exatamente às 15:19 na rodoviária e você estava me esperando, ficamos constrangidos porque a gente se viu já de longe e foi uns bons passos até a gente chegar no outro, saímos de mãos dadas e pegamos um Uber pro Eurogarden, conversamos um pouquinho no banco e logo depois a gente fez um mini-piquenique, quase anoitecendo, demos uns beijinhos e eu quis ir para outro lugar pra gente ficar mais confortáveis, caminhamos por volta do Eurogarden e eu tive que pegar sua blusa porque eu estava com muito frio, eu até perguntei para você se eu estava meio afeminado com aquela blusa coladinha e de lã verde. Não achando nenhum lugar, a gente começou a andar sem rumo pra fora do Eurogarden, passamos pelo Hospital da criança e por ali a gente entrou no beco e demos muitos beijinhos, logo depois você comprou duas latinhas de Skol Beats pra ficar menos timida num bar logo do lado, andamos mais um pouco e ficamos um pouco na praça conversando e tirando fotos, a gente até jogou jogo da velha num parquinho que tinha nessa praça, e aí a gente foi na famosa Árvore que a gente encontrou e aí ficamos muito tempo lá dando beijinhos',
    emoji: '🌹',
    images: ['/timeline/dates/jul-25-1.jpg', '/timeline/dates/jul-25-2.jpg', '/timeline/dates/jul-25-3.jpg', '/timeline/dates/jul-25-4.jpg', '/timeline/dates/jul-25-5.jpg'],
    highlight: true,
  },

  // ===== AGOSTO 2026 =====
  {
    id: 'ago-01',
    date: '01-02 de Agosto',
    month: 'Agosto 2026',
    title: 'Nossa primeira vez dormindo juntos',
    description: 'Aluguei um Airbnb na frente do terminal pra gente passar uma noite juntos, chegamos lá 14:50, fizemos skincare e jogamos um Uno enquanto isso e também tomamos um vinhozinho, depois a gente se arrumou pra ir assistir Homem Aranha no cinema 21:45, tiramos uma fotinha no espelho antes e fomos no Maringá Park, durante o filme nós brincamos de toda vez que o Homem Aranha soltasse teia a gente dava um selinho kkkkkk, eu até encontrei um amigo meu cabeludo lá, e aí depois que saímos, fomos no Domitilla e compramos dois drinks e tomamos enquanto a gente andava de volta pro Airbnb. O meu era de um morango bem forte e o seu era o de sempre com blueberry (se eu não me engano KKKKKKK)',
    emoji: '🦋',
    images: ['/timeline/dates/ago-01-1.jpg', '/timeline/dates/ago-01-2.jpg', '/timeline/dates/ago-01-3.jpg', '/timeline/dates/ago-01-4.jpg'],
    highlight: true,
  },
  {
    id: 'ago-07',
    date: '07-08-09 de Agosto',
    month: 'Agosto 2026',
    title: 'Minha colação de grau, conhecendo seus pais e a família toda',
    description: '[ESCREVA AQUI] O que aconteceu nesse fim de semana...',
    emoji: '💫',
    image: null,
    highlight: false,
  },
  {
    id: 'ago-15',
    date: '15-16 de Agosto',
    month: 'Agosto 2026',
    title: 'Sua primeira vez conhecendo minha cidade e minha família',
    description: '[ESCREVA AQUI] O que aconteceu nesse fim de semana...',
    emoji: '🌸',
    image: null,
    highlight: false,
  },
  {
    id: 'ago-22',
    date: '22-23 de Agosto',
    month: 'Agosto 2026',
    title: 'Area 51, rolê com o Victor e eventinho de drift',
    description: '[ESCREVA AQUI] O que aconteceu nesse fim de semana...',
    emoji: '🎵',
    image: null,
    highlight: false,
  },
  {
    id: 'ago-29',
    date: '29-30 de Agosto',
    month: 'Agosto 2026',
    title: 'Nascimento da Maribel e eu pegando intoxicação alimentar',
    description: '[ESCREVA AQUI] O que aconteceu nesse fim de semana...',
    emoji: '🥂',
    image: null,
    highlight: false,
  },

  // ===== SETEMBRO 2026 =====
  {
    id: 'set-05',
    date: '05-06 de Setembro',
    month: 'Setembro 2026',
    title: 'Eu comprando calças baggy e caindo na labia do vendedor da starpoint',
    description: '[ESCREVA AQUI] O que aconteceu nesse fim de semana...',
    emoji: '🍂',
    image: null,
    highlight: false,
  },
  {
    id: 'set-12',
    date: '12-13 de Setembro',
    month: 'Setembro 2026',
    title: 'Nosso fim de semana totalmente caseiro porque tava chovendo 24 horas, assistimos um pouco de UP altas aventuras, carros e frangoelho',
    description: 'Saímos um pouco de carro à noite para floresta quase meia-noite procurando um lugar pra comer e acabamos comendo um dogão. Fui treinar enquanto você se maquiava porque eu tava morrendo de vontade de usar a calça nova da Mental Madness',
    emoji: '🎂',
    image: null,
    highlight: true,
  },
];

export default timelineData;
