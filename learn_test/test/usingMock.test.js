describe('trying to use mock', () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    test('should be working', () => {

        // The mock function is called twice
        expect(mockCallback.mock.calls.length).toBe(2);

        // The first argument of the first call to the function was 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);

        // The first argument of the second call to the function was 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);

        // The return value of the first call to the function was 42
        expect(mockCallback.mock.results[0].value).toBe(42);
    })

    test('jest.fn recalls what it has been called with', () => {
        const mock = jest.fn();
        mock('a', 'b', 'c');
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith('a', 'b', 'c');
    });
})