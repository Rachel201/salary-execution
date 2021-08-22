import React from 'react';
import { render, screen } from '@testing-library/react';
import Manager from './Manager';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
const warpeper = shallow(<Manager/>)
expect(warpeper.find("h1").text()).toBe('salary execution')
