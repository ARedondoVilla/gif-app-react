import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {
  const categoryTest = 'Iron Man'

  test('Debe mostrar el mensaje de Cargando... inicialmente', () => {

    useFetchGifs.mockReturnValue({ // SIMULA EL VALOR DE RETORNO DE UN HOOK
      gifs: [],
      isLoading: true
    })

    render(<GifGrid category={categoryTest}/>);
    // screen.debug();
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(categoryTest));

  })

  test('Debe mostrar elementos de gifs extraidos de useFetchGifs', () => {
    const gifTest = [
      {
        id: 'afdfd',
        title: 'Capitan America',
        url: 'https://www.pruebas.es/capitanamerica'
      },
      {
        id: 'kjkañdl',
        title: 'Spiderman',
        url: 'https://www.pruebas.es/spiderman'
      }
    ];

    useFetchGifs.mockReturnValue({ // SIMULA EL VALOR DE RETORNO DE UN HOOK
      gifs: gifTest,
      isLoading: false
    })

    render(<GifGrid category={categoryTest}/>);
    // screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2);
  })
})