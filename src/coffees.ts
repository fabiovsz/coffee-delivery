export interface ICoffee {
  id: number
  name: string
  type: string[]
  description: string
  price: number
  imgName: string
}

export const coffees: Array<ICoffee> = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    type: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imgName: 'tradicional',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    type: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imgName: 'americano',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    type: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imgName: 'cremoso',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    type: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imgName: 'gelado',
  },
  {
    id: 5,
    name: 'Café com Leite',
    type: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    imgName: 'cafe-com-leite',
  },
  {
    id: 6,
    name: 'Latte',
    type: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imgName: 'latte',
  },
  {
    id: 7,
    name: 'Cappucino',
    type: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    imgName: 'capuccino',
  },
  {
    id: 8,
    name: 'Macchiato',
    type: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    imgName: 'macchiatto',
  },
  {
    id: 9,
    name: 'Mocaccino',
    type: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    imgName: 'mocaccino',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    type: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    imgName: 'chocolate-quente',
  },
  {
    id: 11,
    name: 'Cubano',
    type: ['especial', 'gelado', 'alcoólico'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    imgName: 'cubano',
  },
  {
    id: 12,
    name: 'Havaiano',
    type: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    imgName: 'havaiano',
  },
  {
    id: 13,
    name: 'Árabe',
    type: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    imgName: 'arabe',
  },
  {
    id: 14,
    name: 'Irlandês',
    type: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imgName: 'irlandes',
  },
]
