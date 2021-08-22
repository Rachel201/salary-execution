import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow} from 'enzyme';


const warpeper = shallow(<App/>)
expect(warpeper.find("h1").text()).toBe('salary execution')
