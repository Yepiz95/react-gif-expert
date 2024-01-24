import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/> ', () => { 
    
    test('no debe de agregar una nueva categoria si se inserta la misma 2 veces', () => { 
        
        const inputValue = 'Lel';
        const onNewCategory = jest.fn();
        
        render( <GifExpertApp onNewCategory={ onNewCategory } /> );
        
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue } } );

        screen.debug();

        expect( onNewCategory ).toHaveBeenCalledTimes(1);
     });

 })