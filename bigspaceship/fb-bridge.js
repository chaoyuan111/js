/**
 * fb-bridge.js by Big Spaceship. 2010
 *
 * To contact Big Spaceship, email info@bigspaceship.com or write to us at 45 Main Street #716, Brooklyn, NY, 11201.
 * Visit http://labs.bigspaceship.com for documentation, updates and more free code.
 *
 *
 * Copyright (c) 2010 Big Spaceship, LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 **/

// jk: this script assumes:
//		1) You are using the Facebook OAuth API and have already called FB.init on your site.
//		2) You are using jQuery.

if(!com) var com = {};
if(!com.bigspaceship) com.bigspaceship = {};
if(!com.bigspaceship.facebook) {
	com.bigspaceship.facebook = {};

	com.bigspaceship.facebook.setSwfId = function($id) {
		com.bigspaceship.facebook.swfId = $id;
	}
	
	com.bigspaceship.facebook.login = function($opts) {
		if(!com.bigspaceship.facebook.swfId) com.bigspaceship.facebook.setSwfId('site');
		if(!$opts) $opts = {};

		FB.login(function(response) {
			if(response.session) {
				$("#" + com.bigspaceship.facebook.swfId)[0].handleFacebookLogin(FB._apiKey,FB.getSession(),response.perms);
			} else {
				$("#" + com.bigspaceship.facebook.swfId)[0].handleFacebookLoginCancel();
			}
		},$opts);
	}

	com.bigspaceship.facebook.logout = function() {
		if(!com.bigspaceship.facebook.swfId) com.bigspaceship.facebook.setSwfId('site');

		FB.logout(function(response) {});
		$("#" + com.bigspaceship.facebook.swfId)[0].handleFacebookLogout();
	}
}