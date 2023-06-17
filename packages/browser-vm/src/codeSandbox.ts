export class CodeSandbox {
  global: Window & typeof globalThis;

  constructor() {
    const iframe = document.createElement('iframe');
    iframe.src = 'about:blank';

    // Append to body temporarily to get the iframe window object.
    document.body.append(iframe);
    const innerWindow = iframe.contentWindow!;
    iframe.remove();

    // After detached from DOM, timers in the iframe won't work,
    // so we replace them with working ones.
    innerWindow.setInterval = window.setInterval;
    innerWindow.clearInterval = window.clearInterval;
    innerWindow.setTimeout = window.setTimeout;
    innerWindow.clearTimeout = window.clearTimeout;
    innerWindow.requestAnimationFrame = window.requestAnimationFrame;
    innerWindow.cancelAnimationFrame = window.cancelAnimationFrame;
    innerWindow.requestIdleCallback = window.requestIdleCallback;
    innerWindow.cancelIdleCallback = window.cancelIdleCallback;

    this.global = innerWindow as Window & typeof globalThis;
  }

  runCode(code: string, params?: Record<string, any>) {
    if (params) {
      const wrapperFunction = this.global.eval(
        `(function _sandboxed_(${Object.keys(params).join(',')}){${code}})`,
      );
      wrapperFunction(...Object.values(params));
    } else {
      return this.global.eval(code);
    }
  }
}
