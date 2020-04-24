// Assignment 2: Object

function calculate(args){
    let result;
    if(args.op==="+"){
        result=args.n1+args.n2;
    }else if(args.op==="-"){
        result=args.n1-args.n2;
    }else{
        result="Not supported";
    }
    return result;
}

// 第一個方法
calculate({n1:5, n2:6, op:"+"});

// 第二個方法
var arg1 = {
    n1: 10,
    n2: 4,
    op: "-"
};
calculate(arg1);

// 第三個方法
class allArgs {
    constructor(n1, n2, op){
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }
}
var arg2 = new allArgs(6,4,"+");
calculate(arg2);
