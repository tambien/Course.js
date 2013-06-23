/*=============================================================================
INTERPOLATE v0.1.0
=============================================================================*/

var INTERPOLATE = function() {

	/*
	 * scales an input value from the range min to max to the new range of minScale to maxScale
	 */
	var scale = function(value, min, max, minScale, maxScale, clip) {
		var ret = minScale + (value - min) / (max - min) * (maxScale - minScale);
		if(clip) {
			ret = clipValue(ret, minScale, maxScale);
		}
		return ret;
	}
	/*
	 * scales an input value from the range min to max to the new range of minScale to maxScale
	 */
	var scaleInt = function(value, min, max, minScale, maxScale, clip) {
		var ret = scale(value, min, max, minScale, maxScale, clip);
		return ~~(ret);
	}
	/*
	 * logarithmically scales an input value
	 */
	var scaleLog = function(value, min, max, minScale, maxScale, clip) {

		if(minScale < 1 || maxScale < 1) {
			console.error("the scaled to values must be at least 1");
			return value;
		}

		var minv = Math.log(minScale);
		var maxv = Math.log(maxScale);

		// calculate adjustment factor
		var scaled = (maxv - minv) / (max - min);
		var ret = Math.exp(minv + scaled * (value - min));
		if(clip) {
			ret = clipValue(ret, minScale, maxScale);
		}
		return ret;
	}
	/*
	 * exponentially scale a value
	 */
	var scaleExp = function(value, minScale, maxScale, min, max, clip) {
		if(minScale < 1 || maxScale < 1) {
			console.error("the scaled to values must be at least 1");
			return value;
		}
		var minv = Math.log(minScale);
		var maxv = Math.log(maxScale);

		// calculate adjustment factor
		var scaled = (maxv - minv) / (max - min);
		var ret = (Math.log(value) - minv) / scaled + min;
		if(clip) {
			ret = clipValue(ret, min, max);
		}
		return ret;
	}
	//since it'll be used a lot
	var pi2 = Math.PI * 2;
	/*
	 * scale a value sinusoidally
	 */
	var scaleSine = function(value, min, max, minScale, maxScale, clip) {
		//get the period
		var period = max - min;
		if(period === 0)
			return;
		period = pi2 / period;
		var sine = Math.sin(period * value);
		var ret = scale(sine, -1, 1, minScale, maxScale, clip);
		return ret;
	}
	/*
	 * ensures that value is between min and max
	 */
	var clipValue = function(value, min, max) {
		if(value < min)
			return min;
		if(value > max)
			return max;
		return value;
	};
	//API//////////////////////////////////////////////////////////////////////
	return {
		linear : scale,
		linearInt : scaleInt,
		logarithmic : scaleLog,
		exponential : scaleExp,
		sinusoidal : scaleSine,
	}
}();
