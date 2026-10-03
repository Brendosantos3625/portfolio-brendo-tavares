export type Project = {
  slug: string
  title: string
  category: string
  description: string
  note: string
  technologies: string[]
  whatBuilt: string[]
  repository?: string
  demo?: string
}

export const buildSolutions = [
  {
    title: 'Interfaces web',
    items: ['Dashboards', 'Landing pages', 'Sistemas web'],
  },
  {
    title: 'Integrações',
    items: ['APIs', 'Dados de serviços externos', 'Fluxos de dados'],
  },
  {
    title: 'Automação',
    items: ['n8n', 'Workflows', 'Automatização de tarefas'],
  },
]

export const projectEvolution = [
  {
    title: 'Base web',
    project: 'FinPlan',
    summary: 'Estrutura de marketing e apresentação de proposta de valor em interface estática.',
  },
  {
    title: 'Interface comercial',
    project: 'Elite Motors',
    summary: 'Catálogo e navegação com foco em apresentação visual e experiência do usuário.',
  },
  {
    title: 'Arquitetura e fluxo',
    project: 'AVESSO X GO',
    summary: 'Estrutura mais completa com organização em camadas e integração com serviços externos.',
  },
]

export const featuredProject = {
  slug: 'avesso-x-go',
  title: 'AVESSO X GO',
  category: 'Aplicativo · Eventos e ingressos',
  description:
    'Aplicativo mobile de eventos e ingressos com README e estrutura de projeto que documentam organização em camadas e execução local.',
  repository: 'https://github.com/Brendosantos3625/avesso-x-go',
  technologies: ['Flutter', 'Dart', 'Supabase'],
  problem:
    'Organizar a experiência de busca, compra e apresentação de eventos em um app com fluxo mais claro para o usuário.',
  solution: [
    'Estrutura de UI para navegação de eventos e ingressos.',
    'Separação de camadas para facilitar manutenção e evolução do app.',
    'Documentação pública que explica execução local e integração com serviços externos.',
  ],
  stack: ['Flutter', 'Dart', 'Supabase'],
  challenges: [
    'Organizar a lógica em camadas sem perder clareza em um app de fluxo médio.',
    'Documentar a execução local de forma simples para quem for testar ou evoluir o projeto.',
    'Pensar em integração com backend sem tornar o código rígido.',
  ],
  decisions: [
    'Uso de arquitetura por camadas para separar apresentação, regra e dados.',
    'Exploração de Supabase como camada de suporte para dados e persistência.',
    'Estrutura do README como ponto de entrada para uso e manutenção do projeto.',
  ],
  result:
    'O projeto comunica organização, intenção de arquitetura e entendimento de fluxo de app, mesmo sem tratar de métricas de produção.',
  architecture: ['Presentation', 'Controller', 'Repository', 'Data Source'],
  evidence: [
    { label: 'Execução local', value: 'O README documenta uma forma direta de rodar a demonstração.' },
    { label: 'Estrutura', value: 'Há organização por camadas e módulos no repositório.' },
    { label: 'Backend', value: 'Supabase está presente como suporte de dados e integração.' },
  ],
  sourceNote: 'Resumo baseado na documentação pública do projeto e na estrutura do repositório.',
}

export const projects: Project[] = [
  {
    slug: 'dashboard-financeiro',
    title: 'FinPlan',
    category: 'Web · Landing page',
    description:
      'Landing page de proposta para um produto financeiro com foco em clareza, diferenciais e apresentação do valor do serviço.',
    note:
      'Projeto estático e demonstrativo, com foco em comunicação visual e organização de conteúdo para apresentação de proposta.',
    technologies: ['HTML', 'CSS'],
    whatBuilt: ['Estrutura de marketing e proposta de valor', 'Seções de benefícios e etapas', 'Layout responsivo para apresentação do conceito'],
    repository: 'https://github.com/Brendosantos3625',
  },
  {
    slug: 'Elite-Motors',
    title: 'Elite Motors',
    category: 'Web · Catálogo',
    description:
      'Site de concessionária com catálogo demonstrativo, seções institucionais e navegação visual para apresentar o produto.',
    note:
      'O conteúdo e os dados do site são ilustrativos e servem como prova de interface e organização de informação em páginas públicas.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    whatBuilt: ['Catalogação visual de veículos', 'Estrutura de navegação e seções institucionais', 'Conteúdo com foco em apresentação e conversão'],
    demo: 'https://elite-motors-beta.vercel.app',
    repository: 'https://github.com/Brendosantos3625',
  },
]