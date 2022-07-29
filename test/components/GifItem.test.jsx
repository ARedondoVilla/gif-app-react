import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem Component", () => {
  const title = "Titulo";
  const url = "https://picsum.photos/id/237/200/300";
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar la imagen con el URL y el ALT', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug(); // IMPRIME EN CONSOLA EL HTML DEL COMPONENTE
    // CON screen PODEMOS TOMAR EL CONTENIDO DEL HTML PARA REALIZAR PRUEBAS
    // console.log('>> src de la imagen', screen.getByRole('img').src);
    // expect(screen.getByRole('img').src).toBe(url);
    const {src, alt} = screen.getByRole('img')
    expect(src).toBe(url);
    expect(alt).toBe(title);
  })

  test('Debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  })
});
