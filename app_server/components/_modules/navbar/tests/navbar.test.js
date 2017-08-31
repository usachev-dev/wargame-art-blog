'use strict';

import Navbar from '../navbar';

describe('Navbar View', function() {

  beforeEach(() => {
    this.navbar = new Navbar();
  });

  it('Should run a few assertions', () => {
    expect(this.navbar);
  });

});
