import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<App />, container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App HTML', () => {
  it("renders App without error", () => {
    expect(container).not.toBe('undefined');
  });

  it("renders App-header properly", () => {
    expect(container.getElementsByClassName('App-header').length).toBe(1);
  });

  it("renders App-body properly", () => {
    expect(container.getElementsByClassName('App-body').length).toBe(1);
  });

  it("renders App-footer properly", () => {
    expect(container.getElementsByClassName('App-footer').length).toBe(1);
  });

});
