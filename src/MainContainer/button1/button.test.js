import React from 'react'
import  {screen, render} from '@testing-library/react'
import Button from "./button"

describe('Test Button component', () => {
    it('Test click event', () => {
        render (<Button children={"mockbutton"} onclick={()=>{}}/>);
        const testbutton = screen.getByText("mockbutton");
        expect(testbutton).toBeTruthy();
    });
  });