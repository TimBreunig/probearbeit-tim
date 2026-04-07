import '@testing-library/jest-dom'


class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver = ResizeObserver


beforeEach(() => {
  HTMLElement.prototype.scrollTo = function () {}
})