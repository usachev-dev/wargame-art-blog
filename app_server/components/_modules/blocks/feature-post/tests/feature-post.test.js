'use strict';

import FeaturePost from '../feature-post';

describe('FeaturePost View', function() {

  beforeEach(() => {
    this.featurePost = new FeaturePost();
  });

  it('Should run a few assertions', () => {
    expect(this.featurePost);
  });

});
