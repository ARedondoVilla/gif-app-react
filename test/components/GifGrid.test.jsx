import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"

describe('Pruebas en <GifGrid />', () => {
  const categoryTest = 'Iron Man'

  test('Debe mostrar el mensaje de Cargando... inicialmente', () => {
    render(<GifGrid category={categoryTest}/>);
    // screen.debug();
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(categoryTest));

  })
})