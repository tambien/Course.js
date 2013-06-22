/*
	RANDOM v 0.1.0
*/

var RANDOM = function() {
	// From http://baagoe.com/en/RandomMusings/javascript/
	// Johannes BaagÃ¸e <baagoe@baagoe.com>, 2010
	function Mash() {
		var n = 0xefc8249d;
		var mash = function(data) {
			data = data.toString();
			var i;
			for( i = 0; i < data.length; i++) {
				n += data.charCodeAt(i);
				var h = 0.02519603282416938 * n;
				n = h >>> 0;
				h -= n;
				h *= n;
				n = h >>> 0;
				h -= n;
				n += h * 0x100000000;
				// 2^32
			}
			return (n >>> 0) * 2.3283064365386963e-10;
			// 2^-32
		};

		mash.version = 'Mash 0.9';
		return mash;
	};

	// From http://baagoe.com/en/RandomMusings/javascript/
	function Alea() {
		return ( function(args) {
			// Johannes BaagÃ¸e <baagoe@baagoe.com>, 2010
			var s0 = 0;
			var s1 = 0;
			var s2 = 0;
			var c = 1;

			if(args.length == 0) {
				args = [+new Date];
			}
			var mash = Mash();
			s0 = mash(' ');
			s1 = mash(' ');
			s2 = mash(' ');

			for(var i = 0; i < args.length; i++) {
				s0 -= mash(args[i]);
				if(s0 < 0) {
					s0 += 1;
				}
				s1 -= mash(args[i]);
				if(s1 < 0) {
					s1 += 1;
				}
				s2 -= mash(args[i]);
				if(s2 < 0) {
					s2 += 1;
				}
			}
			mash = null;

			var random = function() {
				var t = 2091639 * s0 + c * 2.3283064365386963e-10;
				// 2^-32
				s0 = s1;
				s1 = s2;
				return s2 = t - ( c = t | 0);
			};
			random.uint32 = function() {
				return random() * 0x100000000;
				// 2^32
			};
			random.fract53 = function() {
				return random() + (random() * 0x200000 | 0) * 1.1102230246251565e-16;
				// 2^-53
			};
			random.version = 'Alea 0.9';
			random.args = args;
			return random;

		}(Array.prototype.slice.call(arguments)));
	};

	/*
	 * random number generator that's better than Math.random().
	 * @parameters seed value if reproducibility is desired.
	 * @returns random value between 0. and 1.
	 * @example var random = Alea(); random(); // returns 0.6198398587293923
	 */
	var random = Alea();

	/*
	 * pass in an array, and it will choose randomly one of the elements.
	 */
	var choose = function(array) {
		return array[randomInt(array.length)];
	};
	/*
	 * sourced from http://snippets.dzone.com/posts/show/849
	 * @parameter array to be shuffled
	 * @returns a shuffled copy of the input array
	 */
	var shuffleArray = function(arr) {
		var o = arr.slice(0);
		for(var j, x, i = o.length; i; j = parseInt(random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	/*
	 * returns a random integer in the range of min to max
	 */
	var randomInt = function() {
		var min = 0;
		var max = 1;
		if(arguments.length === 1) {
			max = arguments[0];
		} else if(arguments.length === 2) {
			min = arguments[0];
			max = arguments[1];
		}
		return (~~((random() * (max - min)) + min));
	};
	/*
	 * returns a random float in the range of min to max
	 */
	var randomFloat = function() {
		var min = 0;
		var max = 1;
		if(arguments.length === 1) {
			max = arguments[0];
		} else if(arguments.length === 2) {
			min = arguments[0];
			max = arguments[1];
		}
		//if there is only one arg, that's the max
		return min + random() * (max - min);
	};
	/*
	 * flips a coin to give a random binary outcome
	 */
	var flipCoin = function() {
		return random() < .5;
	}
	/*
	 * chooses between the two options
	 */
	var pickWhich = function(a, b) {
		return flipCoin() ? a : b;
	}
	//API//////////////////////////////////////////////////////////////////////

	return {
		choose : choose,
		shuffle : shuffleArray,
		flipCoin : flipCoin,
		getInt : randomInt,
		getFloat : randomFloat,
		or : pickWhich,
	}
}();
