import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
const sinon = require('sinon');
import configureStore from '../../src/store/configureStore';

const store = configureStore();

jest.mock('../../src/shared/http');
import Post from '../../src/components/post/Post';
import Home from '../../src/pages/home';

describe('<Home/>', () => {
    describe('lifecycle methods', () => {
        const componentDidMountStub = sinon.stub(Home.prototype, 'componentDidMount');
        mount(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(componentDidMountStub.calledOnce).toBe(true);
    });

    describe('render methods', () => {
        it('should render posts', async () => {
            const wrapper = mount(
                <Provider store={store}>
                    <Home />
                </Provider>
            );
            expect(wrapper.find(Post).length).toBe(0);
        });
        it('should render', () => {
            const wrapper = mount(
                <Provider store={store}>
                    <Home />
                </Provider>
            );
            expect(wrapper.find('.home').length).toBe(1);
        });
    });
});
