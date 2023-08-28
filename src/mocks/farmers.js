import green from '../assets/farmers/green.png';
import salad from '../assets/farmers/salad.png';
import jennyJack from '../assets/farmers/jenny-jack.png';
import grow from '../assets/farmers/grow.png';
import potager from '../assets/farmers/potager.png';

import aspargos from '../assets/verduras/Aspargos.png';
import tomate from '../assets/verduras/Tomate.png';
import brocolis from '../assets/verduras/Brocolis.png';
import batata from '../assets/verduras/Batata.png';
import pepino from '../assets/verduras/Pepino.png';
import abobora from '../assets/verduras/Abobora.png';
import cenoura from '../assets/verduras/Cenouras.png';
import cenoura2 from '../assets/verduras/Cenouras2.png';
import verduras from '../assets/verduras/Verduras.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const farmers = {
  list: [
    {
      name: "Green",
      image: green,
      distance: gerarNumeroAleatorio(1, 500),
      stars: gerarNumeroAleatorio(1, 5),
      hampers: [
        {
          details: {
            name: "Brócolis e Pepino",
            description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            price: "R$ 40,00",
            image: pepino
          },
          itens: [
            {
              name: "Brócolis",
              image: brocolis,
            },
            {
              name: "Pepino",
              image: pepino,
            },
          ]
        },
        {
          details: {
            name: "Brócolis",
            description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            price: "R$ 40,00",

            image: brocolis
          },
          itens: [
            {
              name: "Brócolis",
              image: brocolis,
            },
          ]
        }
      ]
    },
    {
      name: "Salad",
      image: salad,
      distance: gerarNumeroAleatorio(1, 500),
      stars: gerarNumeroAleatorio(1, 5),
      hampers: [
        {
          details: {
            name: "Salada completa",
            description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            price: "R$ 40,00",

            image: verduras
          },
          itens: [
            {
              name: "Tomate",
              image: tomate,
            },
            {
              name: "Brócolis",
              image: brocolis,
            },
            {
              name: "Pepino",
              image: pepino,
            },
          ]
        },
        {
          details: {
            name: "Tomate e pepino",
            description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            price: "R$ 40,00",

            image: tomate
          },
          itens: [
            {
              name: "Tomate",
              image: tomate,
            },
            {
              name: "Pepino",
              image: pepino,
            },
          ]
        }
      ]
    },
    {
      name: "Jenny Jack Farm",
      image: jennyJack,
      distance: gerarNumeroAleatorio(1, 500),
      stars: gerarNumeroAleatorio(1, 5),
      hampers: [
        {
          details: {
            name: "Muita Batata",
            description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            price: "R$ 40,00",

            image: batata
          },
          itens: [
            {
              name: "Batata",
              image: batata,
            },
          ]
        },
        {
          details: {
            name: "Tomate e Brócolis",
            description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            price: "R$ 40,00",

            image: brocolis
          },
          itens: [
            {
              name: "Tomate",
              image: tomate,
            },
            {
              name: "Brócolis",
              image: brocolis,
            },
          ]
        }
      ]
    },
    {
      name: "Grow",
      image: grow,
      distance: gerarNumeroAleatorio(1, 500),
      stars: gerarNumeroAleatorio(1, 5),
      hampers: [
        {
          details: {
            name: "Abobora e Aspargos",
            description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            price: "R$ 40,00",

            image: aspargos
          },
          itens: [
            {
              name: "Abóbora",
              image: abobora,
            },
            {
              name: "Aspargos",
              image: aspargos,
            }
          ]
        },
        {
          details: {
            name: "Tomate e Abobora",
            description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            price: "R$ 40,00",

            image: abobora
          },
          itens: [
            {
              name: "Tomate",
              image: tomate,
            },
            {
              name: "Abóbora",
              image: abobora,
            }
          ]
        }
      ]
    },
    {
      name: "Potager",
      image: potager,
      distance: gerarNumeroAleatorio(1, 500),
      stars: gerarNumeroAleatorio(1, 5),
      hampers: [
        {
          details: {
            name: "Pepinos",
            description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            price: "R$ 40,00",

            image: pepino
          },
          itens: [
            {
              name: "Pepino",
              image: pepino,
            },
          ]
        },
        {
          details: {
            name: "Brócolis, Aspargos e Cenoura",
            description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            price: "R$ 40,00",

            image: cenoura2
          },
          itens: [
            {
              name: "Brócolis",
              image: brocolis,
            },
            {
              name: "Aspargos",
              image: aspargos,
            },
            {
              name: "Cenoura",
              image: cenoura,
            }
          ]
        }
      ]
    }
  ]
};

export default farmers;
