const fetch = require('node-fetch');
const getPeople = require('./script2');

describe('get people', () => {
  it('calls swapi to get people', () => {
    expect.assertions(2);
    return getPeople(fetch).then(({ count, results }) => {
      expect(count).toEqual(87);
      expect(results.length).toBeGreaterThan(5);
    });
  });

  it('getPeople returns count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            count: 87,
            results: [0, 1, 2, 3, 4, 5],
          }),
      })
    );
    expect.assertions(4);
    return getPeople(mockFetch).then(({ count, results }) => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith('http://swapi.py4e.com/api/people/');
      expect(count).toEqual(87);
      expect(results.length).toBeGreaterThan(5);
    });
  });
});
