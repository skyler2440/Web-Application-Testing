import React from 'react';
import Display, {strike} from './Display'
import Dashboard, {setStrike} from './Dashboard'
import {render, fireEvent, getByText} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each';

describe('<Dashboard />', () =>{ 
  it('increments count by 1', ()=>{
      let strike = 0
      expect(strike(strike + 1))
  })  
})
      
