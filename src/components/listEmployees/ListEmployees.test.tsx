import React from 'react';
import { render, screen } from '@testing-library/react';
import  ListEmployees from './ListEmployees';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
const warpeper = shallow(<ListEmployees/>)
expect(warpeper.find('#manager-btn').text).toBe('Manager')
describe("This is List Employee",() =>{
  test('render the title  ', () => {
    render(<ListEmployees/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
});
