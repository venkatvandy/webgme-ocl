function State() {

    this.children=[];


    this.name = null;

}

function End() {

    this.children=[];


    this.name = null;

}

function Transition1() {

    this.children=[];


    this.name = null;

    this.event = null;

    this.src = null;

    this.dst = null;

}


var _m_z = new End();
_m_z.type ="End";

_m_z.name = "End";


var _m_l = new State();
_m_l.type ="State";

_m_l.name = "Faliure";

var _m_L = new State();
_m_L.type ="State";

_m_L.name = "instFinished";

var _m_G = new Transition1();
_m_G.type ="Transition";

_m_G.name = "Transition";

_m_G.event = "revert back";

_m_G.src = _m_l;

_m_G.dst = _m_z;

var OclEngine = require('ocl-js').default;
var myEngine;

myEngine = new OclEngine();

myEngine.addOclExpression('constraint Transition1 inv: self.src = _m_l');

//myEngine.addOclExpression('context And inv: self.children->select(c|c.name="OutputPort")->size() = 1');

//myEngine.addOclExpression('context And inv: self.children->size()=3');

var result = myEngine.evaluate(_m_G);

console.log(result);
