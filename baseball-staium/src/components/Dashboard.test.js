import React from 'react';
import Display, {strike} from './Display'
import Dashboard, {setStrike} from './Dashboard'
import {render, fireEvent, getByText} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each';

describe('<Display />', () =>{ 
  it('Renders without crashing', ()=>{
  render(<Dashboard/>)  
  })  
  it('strike', ()=>{
    let clicked = false
    const {getByText} = render(<Dashboard/>)
    const strikeButton = getByText(/^Strike$/)
    fireEvent.click(strikeButton)
    expect(clicked).toBe(false)
  })
})
      
