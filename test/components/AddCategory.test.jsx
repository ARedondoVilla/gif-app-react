import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
  test('Debe cambiar el valor de la caja de texto', () => {
    render(<AddCategory onAddCategory={() => {}}/>);
    const inputTest = screen.getByRole('textbox'); 

    // LANZAMOS UN EVENTO PARA INSERTAR UN VALOR EN EL input
    fireEvent.input(inputTest, {target: {value: 'Iron Man'}})
    // screen.debug();
  })
  test('Debe enviarse el valor del input al hacer submit', () => {
    const valueTest = 'Iron Man';
    render(<AddCategory onAddCategory={() => {}}/>);

    const inputTest = screen.getByRole('textbox'); 
    const formTest = screen.getByRole('form'); // LO ENCUENTRA A TRAVES DE LA ETIQUETA aria-label 

    fireEvent.input(inputTest, {target: {value: valueTest}})
    fireEvent.submit(formTest); // LIMPIA EL VALOR DEL value EN EL input
    screen.debug();

    expect(inputTest.value).toBe('')
  })
})