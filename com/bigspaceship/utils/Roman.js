/**
 * Roman by Big Spaceship. 2010
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

/**
 * The <code>Roman()</code> is a one function class to convert from binary (decimal) to roman numerals.
 *
 * @copyright       2010 Big Spaceship, LLC
 * @langversion     ActionScript 3.0
 * @playerversion   Flash 10.0.0
 * @version         1.0
 * @author          Stephen Koch
 * @since           2010.03.18
 */
var Roman       =   new(function() {

    // private
    var _self     =   this;

    // public
    this.name   =   "Roman";

    //http://www.roseindia.net/java/java-tips/45examples/misc/roman/roman.shtml
    // Parallel arrays used in the conversion process.
    this.RCODE = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    this.BVAL  = [1000, 900, 500, 400,  100, 90,   50,   40,  10,   9,    5,   4,    1];

    /**
    *   @param $decimal The decimal to convert (lower than 4000).
    *
    *   @return String  Roman Numeral
    *
    *   @langversion ActionScript 3.0
    *   @playerversion Flash 9.0
    *   @tiptext
    */
    this.decimalToRoman     =   function decimalToRoman($decimal){
        if ($decimal <= 0 || $decimal >= 4000){
            Out.error("Value outside roman numeral range.");
        }

        var roman   = "";

        // Loop from biggest value to smallest, successively subtracting,
        // from the binary value while adding to the roman representation.
        for(var i = 0; i < _self.RCODE.length; i++){
            while($decimal >= _self.BVAL[i]){
                $decimal -= _self.BVAL[i];
                roman    += _self.RCODE[i];
            }
        }

        return roman;
    }

})();
