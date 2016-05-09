describe ('FizzBuzz', function(){
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });
  describe('multiple of 3', function(){
    it('returns fizz with 3', function(){
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
    it('returns fizz with 6', function(){
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });
  describe('multiple of 5', function(){
    it('returns buzz with 5', function(){
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
    it('returns buzz with 10', function(){
     expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });
  describe('multiple of 15', function(){
    it('returns fizzbuzz with 15', function(){
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
    it('returns fizzbuzz with 30', function(){
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });
  });
  describe('number with number', function(){
    it('returns 1 with 1', function(){
    expect(fizzBuzz.play(1)).toEqual(1);
   });
  });
});
