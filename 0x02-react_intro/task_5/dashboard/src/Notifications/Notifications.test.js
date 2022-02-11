import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Notifications from './Notifications'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<Notifications />, container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App HTML', () => {
  it("renders Notifications without error", () => {
    expect(container).not.toBe('undefined');
  });

  it("renders three list elements properly", () => {
    const list = container.querySelector('.notification-list')
    expect(list.children.length).toBe(3);
  });

  it("renders correct text", () => {
    const paragraph = container.querySelector('.Notifications').querySelector('p');
    expect(paragraph.textContent).toBe('Here is the list of notifications');
  });
});
