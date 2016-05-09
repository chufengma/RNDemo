/**
 * Created by yfchu on 2016/5/9.
 */

class Log {
    static i(logStr) {
        console.disableYellowBox = true;
        console.info("----------" + logStr);
    }
}

module.exports = Log;