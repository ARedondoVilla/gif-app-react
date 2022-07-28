import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
  test('Debe cambiar el valor de la caja de texto', () => {
    render(<AddCategory onAddCategory={() => {}}/>);
    const inputTest = screen.getByRole('textbox'); 

    // LANZAMOS UN EVENTO PARA INSERTAR UN VALOR EN EL input
    fireEvent.input(inputTest, {target: {value: 'Iron Man'}})
    screen.debug();
  })
})