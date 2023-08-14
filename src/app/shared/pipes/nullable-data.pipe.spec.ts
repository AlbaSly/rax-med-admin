import { NullableDataPipe } from './nullable-data.pipe';

describe('NullableDataPipe', () => {
  it('create an instance', () => {
    const pipe = new NullableDataPipe();
    expect(pipe).toBeTruthy();
  });
});
