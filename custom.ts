
/**
* 使用這個文件來定義自訂的函式和積木。
* 進一步了解：https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}

const MAPPING = {
    'a': '(false+"")[1]',
    'b': '([]["entries"]()+"")[2]',
    'c': '([]["at"]+"")[3]',
    'd': '(undefined+"")[2]',
    'e': '(true+"")[3]',
    'f': '(false+"")[0]',
    'g': '(false+[0]+String)[20]',
    'h': '(+(101))["to"+String["name"]](21)[1]',
    'i': '([false]+undefined)[10]',
    'j': '([]["entries"]()+"")[3]',
    'k': '(+(20))["to"+String["name"]](21)',
    'l': '(false+"")[2]',
    'm': '(Number+"")[11]',
    'n': '(undefined+"")[1]',
    'o': '(true+[]["at"])[10]',
    'p': '(+(211))["to"+String["name"]](31)[1]',
    'q': '("")["fontcolor"]([0]+false+")[20]',
    'r': '(true+"")[1]',
    's': '(false+"")[3]',
    't': '(true+"")[0]',
    'u': '(undefined+"")[0]',
    'v': '(+(31))["to"+String["name"]](32)',
    'w': '(+(32))["to"+String["name"]](33)',
    'x': '(+(101))["to"+String["name"]](34)[1]',
    'y': '(NaN+[Infinity])[10]',
    'z': '(+(35))["to"+String["name"]](36)',

    'A': '(NaN+[]["entries"]())[11]',
    'B': '(+[]+Boolean)[10]',
    'C': 'Function("return escape")()(("")["italics"]())[2]',
    'D': 'Function("return escape")()([]["at"])["at"]("-1")',
    'E': '(RegExp+"")[12]',
    'F': '(+[]+Function)[10]',
    'G': '(false+Function("return Date")()())[30]',
    
    'I': '(Infinity+"")[0]',
    
    'M': '(true+Function("return Date")()())[30]',
    'N': '(NaN+"")[0]',
    
    'R': '(+[]+RegExp)[10]',
    'S': '(+[]+String)[10]',
    'T': '(NaN+Function("return Date")()())[30]',
    
    ' ': '(NaN+[]["at"])[11]',
    
    '"': '("")["fontcolor"]()[12]',
    
    '%': 'Function("return escape")()([]["at"])[22]',
    '&': '("")["fontcolor"](")[13]',
    
    '(': '([]["at"]+"")[11]',
    ')': '(""+[]["at"])[12]',
    
    '+': '(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[2]',
    ',': '[[]]["concat"]([[]])+""',
    '-': '(+(.+[0000001])+"")[2]',
    '.': '(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]',
    '/': '(false+[0])["italics"]()[10]',
    ':': '(RegExp()+"")[3]',
    ';': '("")["fontcolor"](NaN+")[21]',
    '<': '("")["italics"]()[0]',
    '=': '("")["fontcolor"]()[11]',
    '>': '("")["italics"]()[2]',
    '?': '(RegExp()+"")[2]',
    
    '[': '([]["entries"]()+"")[0]',
    '\\': '(RegExp("/")+"")[1]',
    ']': '([]["entries"]()+"")[22]',

    '{': '([0]+false+[]["at"])[20]',
    
    '}': '([]["at"]+"")["at"]("-1")'
    
};


namespace deam{
    export function apple():void{}
}
