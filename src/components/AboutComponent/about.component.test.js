import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import AboutComponent from './about.component';

global.expect = expect;

describe('About Component', () => {
  it('should only return a render', () => {
    const summary = new JSDOM('<!doctype html><html><body></body></html>');
    const renderAbout = AboutComponent({ summary });
    // eslint-disable-next-line max-len
    expect(renderAbout).to.be.equal('<!doctype html><html><body></body></html>');
  });
});
