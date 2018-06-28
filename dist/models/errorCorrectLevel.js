Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Error correction level to use for the QR Code.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
var ErrorCorrectLevel;
(function (ErrorCorrectLevel) {
    /**
     * 7%
     */
    ErrorCorrectLevel[ErrorCorrectLevel["L"] = 1] = "L";
    /**
     * 15%
     */
    ErrorCorrectLevel[ErrorCorrectLevel["M"] = 0] = "M";
    /**
     * 25%
     */
    ErrorCorrectLevel[ErrorCorrectLevel["Q"] = 3] = "Q";
    /**
     * 30%
     */
    ErrorCorrectLevel[ErrorCorrectLevel["H"] = 2] = "H";
})(ErrorCorrectLevel = exports.ErrorCorrectLevel || (exports.ErrorCorrectLevel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JDb3JyZWN0TGV2ZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2Vycm9yQ29ycmVjdExldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7QUFDSCxJQUFZLGlCQW9CWDtBQXBCRCxXQUFZLGlCQUFpQjtJQUN6Qjs7T0FFRztJQUNILG1EQUFLLENBQUE7SUFFTDs7T0FFRztJQUNILG1EQUFLLENBQUE7SUFFTDs7T0FFRztJQUNILG1EQUFLLENBQUE7SUFFTDs7T0FFRztJQUNILG1EQUFLLENBQUE7QUFDVCxDQUFDLEVBcEJXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBb0I1QiJ9