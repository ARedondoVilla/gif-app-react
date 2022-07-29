import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {
  test('Debe regresar el estado inicial', () => {
    const {result} = renderHook(() => useFetchGifs('Iron Man')) // SIMULA LA RESPUESTA INICAL DEL HOOK
    // SIN QUE SE HAYA REALIZADO LA PETICION fetch
    // console.log(result);
    const {gifs, isLoading} = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  })

  test('Debe retornar un array de gifs y el isLoading en false', async () => {
    const {result} = renderHook(() => useFetchGifs('Iron Man')) // SIMULA LA RESPUESTA DEL HOOK
    
    await waitFor( // USAMOS ESTA FUNCION PARA QUE ESPERE EL HOOK A TENER RESULTADOS DE LA LLAMADA
      () => expect(result.current.gifs.length).toBeGreaterThan(0)
    );

    const {gifs, isLoading} = result.current;
    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  })
})