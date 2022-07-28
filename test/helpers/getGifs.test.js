import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas sobre getGifs()', () => {
  test('Debe de retornar un array de gifs', async () => {
    const gifs = await getGifs('one punch');
    // console.log('>> listado de gifs', gifs);

    // COMPROBAMOS QUE EL ARRAY NO VENGA VACIO
    expect(gifs.length).toBeGreaterThan(0); 

    // COMPROBAMOS QUE LOS ELEMENTOS DEL ARRAY TENGAN LAS key DEFINIDAS
    // // PARA COMPROBAR OBJETOS SE DEBE USAR toEqual() Y NO toBe()
    expect(gifs[0]).toEqual(
      {
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
      }
    )
  })
})