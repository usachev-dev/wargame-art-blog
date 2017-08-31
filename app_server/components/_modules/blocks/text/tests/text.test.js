'use strict';

import Text from '../text';

describe('Text View', function() {

  beforeEach(() => {
    this.text = new Text();
  });

  it('Should run a few assertions', () => {
    expect(this.text);
  });

});
