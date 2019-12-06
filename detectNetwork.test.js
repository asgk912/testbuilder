/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  // var expect = chai.expect;
 
  // FILL_ME_IN = 'has a prefix of 51~56 and a length of 16'

  // it(FILL_ME_IN, function() {
  //   expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  // });
 
  // it(FILL_ME_IN, function() {
  //   expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  // });
 
  // it(FILL_ME_IN, function() {
  //   expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  // });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();

  FILL_ME_IN = 'MasterCard'

  // Refactored from expect to should
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 
  // Not Refactored
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal(FILL_ME_IN);
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal(FILL_ME_IN);
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var assert = chai.assert;

  it('has a prefix of 6011 and a length of 16', function(){
    assert(detectNetwork('6011123456789012') === 'Discover');
  })
  it('has a prefix of 644 and a length of 16', function(){
    assert(detectNetwork('6441234567890123') === 'Discover');
  })
  it('has a prefix of 645 and a length of 16', function(){
    assert(detectNetwork('6451234567890123') === 'Discover');
  })
  it('has a prefix of 646 and a length of 16', function(){
    assert(detectNetwork('6461234567890123') === 'Discover');
  })
  it('has a prefix of 647 and a length of 16', function(){
    assert(detectNetwork('6471234567890123') === 'Discover');
  })
  it('has a prefix of 648 and a length of 16', function(){
    assert(detectNetwork('6481234567890123') === 'Discover');
  })
  it('has a prefix of 649 and a length of 16', function(){
    assert(detectNetwork('6491234567890123') === 'Discover');
  })
  it('has a prefix of 65 and a length of 16', function(){
    assert(detectNetwork('6512345678901234') === 'Discover');
  })
  it('has a prefix of 6011 and a length of 19', function(){
    assert(detectNetwork('6011123456789012345') === 'Discover');
  })
  it('has a prefix of 644 and a length of 19', function(){
    assert(detectNetwork('6441234567890123456') === 'Discover');
  })
  it('has a prefix of 645 and a length of 19', function(){
    assert(detectNetwork('6451234567890123456') === 'Discover');
  })
  it('has a prefix of 646 and a length of 19', function(){
    assert(detectNetwork('6461234567890123456') === 'Discover');
  })
  it('has a prefix of 647 and a length of 19', function(){
    assert(detectNetwork('6471234567890123456') === 'Discover');
  })
  it('has a prefix of 648 and a length of 19', function(){
    assert(detectNetwork('6481234567890123456') === 'Discover');
  })
  it('has a prefix of 649 and a length of 19', function(){
    assert(detectNetwork('6491234567890123456') === 'Discover');
  })
  it('has a prefix of 65 and a length of 19', function(){
    assert(detectNetwork('6512345678901234567') === 'Discover');
  })
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var assert = chai.assert;
  //prefix of 5018
  it('has a prefix of 5018 and a length of 12', function(){
    assert(detectNetwork('501812345678') === 'Maestro');
  })
  it('has a prefix of 5018 and a length of 13', function(){
    assert(detectNetwork('5018123456789') === 'Maestro');
  })
  it('has a prefix of 5018 and a length of 14', function(){
    assert(detectNetwork('50181234567890') === 'Maestro');
  })
  it('has a prefix of 5018 and a length of 15', function(){
    assert(detectNetwork('501812345678901') === 'Maestro');
  })
  it('has a prefix of 5018 and a length of 16', function(){
    assert(detectNetwork('5018123456789012') === 'Maestro');
  })
  it('has a prefix of 5018 and a length of 17', function(){
    assert(detectNetwork('50181234567890123') === 'Maestro');
  })
  it('has a prefix of 5018 and a length of 18', function(){
    assert(detectNetwork('501812345678901234') === 'Maestro');
  })
  it('has a prefix of 5018 and a length of 19', function(){
    assert(detectNetwork('5018123456789012345') === 'Maestro');
  })
  //prefix of 5020
  it('has a prefix of 5020 and a length of 12', function(){
    assert(detectNetwork('502012345678') === 'Maestro');
  })
  it('has a prefix of 5020 and a length of 13', function(){
    assert(detectNetwork('5020123456789') === 'Maestro');
  })
  it('has a prefix of 5020 and a length of 14', function(){
    assert(detectNetwork('50201234567890') === 'Maestro');
  })
  it('has a prefix of 5020 and a length of 15', function(){
    assert(detectNetwork('502012345678901') === 'Maestro');
  })
  it('has a prefix of 5020 and a length of 16', function(){
    assert(detectNetwork('5020123456789012') === 'Maestro');
  })
  it('has a prefix of 5020 and a length of 17', function(){
    assert(detectNetwork('50201234567890123') === 'Maestro');
  })
  it('has a prefix of 5020 and a length of 18', function(){
    assert(detectNetwork('502012345678901234') === 'Maestro');
  })
  it('has a prefix of 5020 and a length of 19', function(){
    assert(detectNetwork('5020123456789012345') === 'Maestro');
  })
  //prefix of 5038
  it('has a prefix of 5038 and a length of 12', function(){
    assert(detectNetwork('503812345678') === 'Maestro');
  })
  it('has a prefix of 5038 and a length of 13', function(){
    assert(detectNetwork('5038123456789') === 'Maestro');
  })
  it('has a prefix of 5038 and a length of 14', function(){
    assert(detectNetwork('50381234567890') === 'Maestro');
  })
  it('has a prefix of 5038 and a length of 15', function(){
    assert(detectNetwork('503812345678901') === 'Maestro');
  })
  it('has a prefix of 5038 and a length of 16', function(){
    assert(detectNetwork('5038123456789012') === 'Maestro');
  })
  it('has a prefix of 5038 and a length of 17', function(){
    assert(detectNetwork('50381234567890123') === 'Maestro');
  })
  it('has a prefix of 5038 and a length of 18', function(){
    assert(detectNetwork('503812345678901234') === 'Maestro');
  })
  it('has a prefix of 5038 and a length of 19', function(){
    assert(detectNetwork('5038123456789012345') === 'Maestro');
  })
  //prefix of 6304
  it('has a prefix of 6304 and a length of 12', function(){
    assert(detectNetwork('630412345678') === 'Maestro');
  })
  it('has a prefix of 6304 and a length of 13', function(){
    assert(detectNetwork('6304123456789') === 'Maestro');
  })
  it('has a prefix of 6304 and a length of 14', function(){
    assert(detectNetwork('63041234567890') === 'Maestro');
  })
  it('has a prefix of 6304 and a length of 15', function(){
    assert(detectNetwork('630412345678901') === 'Maestro');
  })
  it('has a prefix of 6304 and a length of 16', function(){
    assert(detectNetwork('6304123456789012') === 'Maestro');
  })
  it('has a prefix of 6304 and a length of 17', function(){
    assert(detectNetwork('63041234567890123') === 'Maestro');
  })
  it('has a prefix of 6304 and a length of 18', function(){
    assert(detectNetwork('630412345678901234') === 'Maestro');
  })
  it('has a prefix of 6304 and a length of 19', function(){
    assert(detectNetwork('6304123456789012345') === 'Maestro');
  })
});


describe('China UnionPay', function() {
  // has a prefix of 624-626, 6282-6288, or 622126-622925 and a length of 16-19
  var assert = chai.assert;

  var suffix = '12345678901234567890'

  for(var prefix=624; prefix<=626; prefix++){
    (function(prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,13)) === 'China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,14)) === 'China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,15)) === 'China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,16)) === 'China UnionPay');
      })
    })(prefix)
  }

  for(var prefix=6282; prefix<=6288; prefix++){
    (function(prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,12)) === 'China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,13)) === 'China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,14)) === 'China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,15)) === 'China UnionPay');
      })
    })(prefix)
  }

  for(var prefix=622126; prefix<=622925; prefix++){
    (function(prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,10)) === 'China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,11)) === 'China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,12)) === 'China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        assert(detectNetwork(prefix.toString() + suffix.substring(0,13)) === 'China UnionPay');
      })
    })(prefix)
  }
});


describe('Switch', function() {
  //has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19
  var assert = chai.assert;
  //prefix of 4903
  it('has a prefix of 4903 and a length of 16', function(){
    assert(detectNetwork('4903123456789012') === 'Switch');
  })
  it('has a prefix of 4903 and a length of 18', function(){
    assert(detectNetwork('490312345678901234') === 'Switch');
  })
  it('has a prefix of 4903 and a length of 19', function(){
    assert(detectNetwork('4903123456789012345') === 'Switch');
  })
  //prefix of 4905
  it('has a prefix of 4905 and a length of 16', function(){
    assert(detectNetwork('4905123456789012') === 'Switch');
  })
  it('has a prefix of 4905 and a length of 18', function(){
    assert(detectNetwork('490512345678901234') === 'Switch');
  })
  it('has a prefix of 4905 and a length of 19', function(){
    assert(detectNetwork('4905123456789012345') === 'Switch');
  })
  //prefix of 4911
  it('has a prefix of 4911 and a length of 16', function(){
    assert(detectNetwork('4911123456789012') === 'Switch');
  })
  it('has a prefix of 4911 and a length of 18', function(){
    assert(detectNetwork('491112345678901234') === 'Switch');
  })
  it('has a prefix of 4911 and a length of 19', function(){
    assert(detectNetwork('4911123456789012345') === 'Switch');
  })
  //prefix of 4936
  it('has a prefix of 4936 and a length of 16', function(){
    assert(detectNetwork('4936123456789012') === 'Switch');
  })
  it('has a prefix of 4936 and a length of 18', function(){
    assert(detectNetwork('493612345678901234') === 'Switch');
  })
  it('has a prefix of 4936 and a length of 19', function(){
    assert(detectNetwork('4936123456789012345') === 'Switch');
  })
  //prefix of 564182
  it('has a prefix of 564182 and a length of 16', function(){
    assert(detectNetwork('5641821234567890') === 'Switch');
  })
  it('has a prefix of 564182 and a length of 18', function(){
    assert(detectNetwork('564182123456789012') === 'Switch');
  })
  it('has a prefix of 564182 and a length of 19', function(){
    assert(detectNetwork('5641821234567890123') === 'Switch');
  })
  //prefix of 633110
  it('has a prefix of 633110 and a length of 16', function(){
    assert(detectNetwork('6331101234567890') === 'Switch');
  })
  it('has a prefix of 633110 and a length of 18', function(){
    assert(detectNetwork('633110123456789012') === 'Switch');
  })
  it('has a prefix of 633110 and a length of 19', function(){
    assert(detectNetwork('6331101234567890123') === 'Switch');
  })
  //prefix of 6333
  it('has a prefix of 6333 and a length of 16', function(){
    assert(detectNetwork('6333123456789012') === 'Switch');
  })
  it('has a prefix of 6333 and a length of 18', function(){
    assert(detectNetwork('633312345678901234') === 'Switch');
  })
  it('has a prefix of 6333 and a length of 19', function(){
    assert(detectNetwork('6333123456789012345') === 'Switch');
  })
  //prefix of 6759
  it('has a prefix of 6759 and a length of 16', function(){
    assert(detectNetwork('6759123456789012') === 'Switch');
  })
  it('has a prefix of 6759 and a length of 18', function(){
    assert(detectNetwork('675912345678901234') === 'Switch');
  })
  it('has a prefix of 6759 and a length of 19', function(){
    assert(detectNetwork('6759123456789012345') === 'Switch');
  })
});

