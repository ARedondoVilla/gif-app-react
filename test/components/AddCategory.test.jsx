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
    const onAddCategoryTest = jest.fn();
    // render(<AddCategory onAddCategory={() => {}}/>);
    render(<AddCategory onAddCategory={onAddCategoryTest}/>);

    const inputTest = screen.getByRole('textbox'); 
    const formTest = screen.getByRole('form'); // LO ENCUENTRA A TRAVES DE LA ETIQUETA aria-label 

    fireEvent.input(inputTest, {target: {value: valueTest}})
    fireEvent.submit(formTest); // LIMPIA EL VALOR DEL value EN EL input
    // screen.debug();

    expect(inputTest.value).toBe('');
    expect(onAddCategoryTest).toHaveBeenCalled();
    // PRUEBA SI LA FUNCION FUE LLAMADA Y SI SE LE HA PASADO EL PARAMETRO INDICADO valueTest
    expect(onAddCategoryTest).toHaveBeenCalledWith(valueTest);
  })

  test('No debe mandarse ningun valor si el input esta vacio', () => {
    // SI EL INPUT TIENE UN VALOR CON LONGUITUD UNO O MENOR NUNCA SE LANZA EL submit

    const onAddCategoryTest = jest.fn();
    render(<AddCategory onAddCategory={onAddCategoryTest}/>);

    const formTest = screen.getByRole('form'); // LO ENCUENTRA A TRAVES DE LA ETIQUETA aria-label 
    fireEvent.submit(formTest); // LIMPIA EL VALOR DEL value EN EL input

    // expect(onAddCategoryTest).toHaveBeenCalledTimes(0)
    // CODIGO EQUIVALENTE
    expect(onAddCategoryTest).not.toHaveBeenCalled();
  })
})