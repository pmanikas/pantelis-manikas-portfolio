type storage = 'localStorage' | 'sessionStorage';

const get = (key: string, type: storage = "localStorage"): any => {
  return JSON.parse(window[type].getItem(key) || 'null');
};

const save = (key: string, state: any, type: storage = "localStorage"): void => {
  window[type].setItem(key, JSON.stringify(state));
};

const remove = (key: string, type: storage = "localStorage"): void => {
  window[type].removeItem(key);
};

const clear = (type: storage = "localStorage"): void => {
  window[type].clear();
};

export { get, save, remove, clear };
