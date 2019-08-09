import React from 'react';
import Display, {strike} from './Display'
import Dashboard, {setStrike} from './Dashboard'
import {render, fireEvent, getByText} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each';

describe('<Display />', () =>{ 
  it('Renders without crashing', ()=>{
  render(<Display/>)  
  })  
  it('props work', ()=>{
    const display = render(<Display strike={2} ball={3} foul={4}/>)

    display.getByText(/player has 2 strikes/i)
    display.getByText(/player has 3 balls/i)
    display.getByText(/player has 4 fouls/i)
  })
  it('props work', ()=>{
    const display = render(<Display strike={1} ball={1} foul={1}/>)

    display.getByText(/player has 1 strikes/i)
    display.getByText(/player has 1 balls/i)
    display.getByText(/player has 1 fouls/i)
  })
})
      
