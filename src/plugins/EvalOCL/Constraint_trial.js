/**
 * Created by Venki on 11/29/2016.
 */
function LogicGatesMetaLanguage() {

    this.children=[];


    this.name = null;

}

function PortBase() {


    this.name = null;

}

function UserOutput() {


    this.name = null;

}

function PortConnection() {


    this.name = null;

}

function UserInput() {


    this.name = null;

}

function PortBase2UserIOBase() {


    this.name = null;

    this.dst = null;

    this.src = null;

}

function NumericIOBase() {


    this.name = null;

    this.Value = null;

    this.SelRep = null;

    this.Bits = null;

}

function Clock() {


    this.name = null;

    this.Milliseconds = null;

}

function LogicGatesDiagrams() {

    this.children=[];


    this.name = null;

}

function UserIOBase() {


    this.name = null;

}

function SimpleLogicGate() {

    this.children=[];


    this.name = null;

}

function UserIOBase2PortBase() {


    this.name = null;

    this.dst = null;

    this.src = null;

}

function ComplexLogicGate() {

    this.children=[];


    this.name = null;

}

function Not() {

    this.children=[];


    this.name = null;

}

function Buffer() {

    this.children=[];


    this.name = null;

}

function NumericInput() {

    this.children=[];


    this.name = null;

    this.Value = null;

    this.SelRep = null;

    this.Bits = null;

}

function UserIOBase2UserIOBase() {


    this.name = null;

    this.dst = null;

    this.src = null;

}

function And() {

    this.children=[];


    this.name = null;

}

function Or() {

    this.children=[];


    this.name = null;

}

function Nand() {

    this.children=[];


    this.name = null;

}

function Xnor() {

    this.children=[];


    this.name = null;

}

function Xor() {

    this.children=[];


    this.name = null;

}

function Nor() {

    this.children=[];


    this.name = null;

}

function LogicCircuit() {

    this.children=[];


    this.name = null;

    this.fanout = null;

}

function InputPort() {


    this.name = null;

}

function OutputPort() {


    this.name = null;

}

function OutputPort2InputPort() {


    this.name = null;

    this.dst = null;

    this.src = null;

}

function UserInput2InputPort() {


    this.name = null;

    this.dst = null;

    this.src = null;

}

function OutputPort2UserOutput() {


    this.name = null;

    this.dst = null;

    this.src = null;

}

function UserInputBase2UserOutput() {


    this.name = null;

    this.dst = null;

    this.src = null;

}

function NumericOutput() {

    this.children=[];


    this.name = null;

    this.Value = null;

    this.SelRep = null;

    this.Bits = null;

}

function LogicGateBase() {

    this.children=[];


    this.name = null;

}

function UserInputBase() {


    this.name = null;

}

var _2_65_97_99 = new InputPort();

_2_65_97_99.name = "InputPort";

var _2_65_97_98 = new InputPort();

_2_65_97_98.name = "InputPort";

var _2_65_97_101 = new OutputPort();

_2_65_97_101.name = "OutputPort";

var _2_65_97_100 = new InputPort();

_2_65_97_100.name = "InputPort";

var _2_65_97 = new And();

_2_65_97.name = "And";

_2_65_97.children.push(_2_65_97_101);

_2_65_97.children.push(_2_65_97_98);

_2_65_97.children.push(_2_65_97_99);

_2_65_97.children.push(_2_65_97_100);

var _2_65_88_96 = new OutputPort();

_2_65_88_96.name = "OutputPort";

var _2_65_88_95 = new InputPort();

_2_65_88_95.name = "InputPort";

var _2_65_88_94 = new InputPort();

_2_65_88_94.name = "InputPort";

var _2_65_88_93 = new InputPort();

_2_65_88_93.name = "InputPort";

var _2_65_88_1 = new InputPort();

_2_65_88_1.name = "InputPort";

var _2_65_88 = new And();

_2_65_88.name = "And";

_2_65_88.children.push(_2_65_88_94);

_2_65_88.children.push(_2_65_88_95);

_2_65_88.children.push(_2_65_88_96);

_2_65_88.children.push(_2_65_88_1);

_2_65_88.children.push(_2_65_88_93);

var _2_65_85_87 = new OutputPort();

_2_65_85_87.name = "OutputPort";

var _2_65_85_86 = new InputPort();

_2_65_85_86.name = "InputPort";

var _2_65_85 = new Not();

_2_65_85.name = "Not";

_2_65_85.children.push(_2_65_85_87);

_2_65_85.children.push(_2_65_85_86);

var _2_65_78_80 = new OutputPort();

_2_65_78_80.name = "OutputPort";

var _2_65_78_79 = new InputPort();

_2_65_78_79.name = "InputPort";

var _2_65_78 = new Not();

_2_65_78.name = "Not";

_2_65_78.children.push(_2_65_78_80);

_2_65_78.children.push(_2_65_78_79);

var _2_65_2 = new OutputPort2InputPort();

_2_65_2.name = "OutputPort2InputPort";

_2_65_2.dst = _2_65_88_93;

_2_65_2.src = _2_65_78_80;

var _2_65_148 = new OutputPort2UserOutput();

_2_65_148.name = "OutputPort2UserOutput";

_2_65_148.dst = _2_65_137;

_2_65_148.src = _2_65_112_117;

var _2_65_147 = new UserInput2InputPort();

_2_65_147.name = "UserInput2InputPort";

_2_65_147.dst = _2_65_88_95;

_2_65_147.src = _2_65_133;

var _2_65_146 = new UserInput2InputPort();

_2_65_146.name = "UserInput2InputPort";

_2_65_146.dst = _2_65_97_100;

_2_65_146.src = _2_65_134;

var _2_65_145 = new UserInput2InputPort();

_2_65_145.name = "UserInput2InputPort";

_2_65_145.dst = _2_65_102_105;

_2_65_145.src = _2_65_135;

var _2_65_144 = new UserInput2InputPort();

_2_65_144.name = "UserInput2InputPort";

_2_65_144.dst = _2_65_107_110;

_2_65_144.src = _2_65_136;

var _2_65_143 = new UserInput2InputPort();

_2_65_143.name = "UserInput2InputPort";

_2_65_143.dst = _2_65_107_109;

_2_65_143.src = _2_65_132;

var _2_65_142 = new UserInput2InputPort();

_2_65_142.name = "UserInput2InputPort";

_2_65_142.dst = _2_65_107_108;

_2_65_142.src = _2_65_132;

var _2_65_141 = new UserInput2InputPort();

_2_65_141.name = "UserInput2InputPort";

_2_65_141.dst = _2_65_97_99;

_2_65_141.src = _2_65_132;

var _2_65_140 = new UserInput2InputPort();

_2_65_140.name = "UserInput2InputPort";

_2_65_140.dst = _2_65_85_86;

_2_65_140.src = _2_65_132;

var _2_65_139 = new UserInput2InputPort();

_2_65_139.name = "UserInput2InputPort";

_2_65_139.dst = _2_65_102_103;

_2_65_139.src = _2_65_131;

var _2_65_138 = new UserInput2InputPort();

_2_65_138.name = "UserInput2InputPort";

_2_65_138.dst = _2_65_78_79;

_2_65_138.src = _2_65_131;

var _2_65_137 = new UserOutput();

_2_65_137.name = "Output";

var _2_65_136 = new UserInput();

_2_65_136.name = "Z";

var _2_65_135 = new UserInput();

_2_65_135.name = "Y";

var _2_65_134 = new UserInput();

_2_65_134.name = "X";

var _2_65_133 = new UserInput();

_2_65_133.name = "W";

var _2_65_132 = new UserInput();

_2_65_132.name = "B";

var _2_65_131 = new UserInput();

_2_65_131.name = "A";

var _2_65_126 = new OutputPort2InputPort();

_2_65_126.name = "OutputPort2InputPort";

_2_65_126.dst = _2_65_112_116;

_2_65_126.src = _2_65_107_111;

var _2_65_125 = new OutputPort2InputPort();

_2_65_125.name = "OutputPort2InputPort";

_2_65_125.dst = _2_65_112_115;

_2_65_125.src = _2_65_102_106;

var _2_65_124 = new OutputPort2InputPort();

_2_65_124.name = "OutputPort2InputPort";

_2_65_124.dst = _2_65_112_114;

_2_65_124.src = _2_65_97_101;

var _2_65_123 = new OutputPort2InputPort();

_2_65_123.name = "OutputPort2InputPort";

_2_65_123.dst = _2_65_112_113;

_2_65_123.src = _2_65_88_96;

var _2_65_122 = new OutputPort2InputPort();

_2_65_122.name = "OutputPort2InputPort";

_2_65_122.dst = _2_65_102_104;

_2_65_122.src = _2_65_85_87;

var _2_65_121 = new OutputPort2InputPort();

_2_65_121.name = "OutputPort2InputPort";

_2_65_121.dst = _2_65_88_94;

_2_65_121.src = _2_65_85_87;

var _2_65_120 = new OutputPort2InputPort();

_2_65_120.name = "OutputPort2InputPort";

_2_65_120.dst = _2_65_97_98;

_2_65_120.src = _2_65_78_80;

var _2_65_112_117 = new OutputPort();

_2_65_112_117.name = "OutputPort";

var _2_65_112_116 = new InputPort();

_2_65_112_116.name = "InputPort";

var _2_65_112_115 = new InputPort();

_2_65_112_115.name = "InputPort";

var _2_65_112_114 = new InputPort();

_2_65_112_114.name = "InputPort";

var _2_65_112_113 = new InputPort();

_2_65_112_113.name = "InputPort";

var _2_65_112 = new Or();

_2_65_112.name = "Or";

_2_65_112.children.push(_2_65_112_115);

_2_65_112.children.push(_2_65_112_116);

_2_65_112.children.push(_2_65_112_117);

_2_65_112.children.push(_2_65_112_113);

_2_65_112.children.push(_2_65_112_114);

var _2_65_107_111 = new OutputPort();

_2_65_107_111.name = "OutputPort";

var _2_65_107_110 = new InputPort();

_2_65_107_110.name = "InputPort";

var _2_65_107_109 = new InputPort();

_2_65_107_109.name = "InputPort";

var _2_65_107_108 = new InputPort();

_2_65_107_108.name = "InputPort";

var _2_65_107 = new And();

_2_65_107.name = "And";

_2_65_107.children.push(_2_65_107_109);

_2_65_107.children.push(_2_65_107_110);

_2_65_107.children.push(_2_65_107_111);

_2_65_107.children.push(_2_65_107_108);

var _2_65_102_106 = new OutputPort();

_2_65_102_106.name = "OutputPort";

var _2_65_102_105 = new InputPort();

_2_65_102_105.name = "InputPort";

var _2_65_102_104 = new InputPort();

_2_65_102_104.name = "InputPort";

var _2_65_102_103 = new InputPort();

_2_65_102_103.name = "InputPort";

var _2_65_102 = new And();

_2_65_102.name = "And";

_2_65_102.children.push(_2_65_102_104);

_2_65_102.children.push(_2_65_102_105);

_2_65_102.children.push(_2_65_102_106);

_2_65_102.children.push(_2_65_102_103);

var _2_65 = new LogicCircuit();

_2_65.name = "Multiplexer";

_2_65.children.push(_2_65_78);

_2_65.children.push(_2_65_85);

_2_65.children.push(_2_65_88);

_2_65.children.push(_2_65_102);

_2_65.children.push(_2_65_107);

_2_65.children.push(_2_65_112);

_2_65.children.push(_2_65_120);

_2_65.children.push(_2_65_121);

_2_65.children.push(_2_65_122);

_2_65.children.push(_2_65_97);

_2_65.children.push(_2_65_123);

_2_65.children.push(_2_65_124);

_2_65.children.push(_2_65_125);

_2_65.children.push(_2_65_126);

_2_65.children.push(_2_65_131);

_2_65.children.push(_2_65_132);

_2_65.children.push(_2_65_133);

_2_65.children.push(_2_65_134);

_2_65.children.push(_2_65_135);

_2_65.children.push(_2_65_136);

_2_65.children.push(_2_65_137);

_2_65.children.push(_2_65_138);

_2_65.children.push(_2_65_139);

_2_65.children.push(_2_65_140);

_2_65.children.push(_2_65_141);

_2_65.children.push(_2_65_142);

_2_65.children.push(_2_65_143);

_2_65.children.push(_2_65_144);

_2_65.children.push(_2_65_145);

_2_65.children.push(_2_65_146);

_2_65.children.push(_2_65_147);

_2_65.children.push(_2_65_148);

_2_65.children.push(_2_65_2);

_2_65.fanout = "null";

var _2_6 = new LogicGatesDiagrams();

_2_6.name = "LogicGatesDiagrams";

var _2_5_9_12 = new OutputPort();

_2_5_9_12.name = "OutputPort";

var _2_5_9_11 = new InputPort();

_2_5_9_11.name = "InputPort";

var _2_5_9_10 = new InputPort();

_2_5_9_10.name = "InputPort";

var _2_5_9 = new And();

_2_5_9.name = "And";

_2_5_9.children.push(_2_5_9_10);

_2_5_9.children.push(_2_5_9_11);

_2_5_9.children.push(_2_5_9_12);

var _2_5_7 = new UserInput();

_2_5_7.name = "UserInput";

var _2_5_6 = new Clock();

_2_5_6.name = "Clock";

_2_5_6.Milliseconds = "0";

var _2_5_56 = new OutputPort2InputPort();

_2_5_56.name = "OutputPort2InputPort";

_2_5_56.dst = _2_5_9_11;

_2_5_56.src = _2_5_21_24;

var _2_5_55 = new OutputPort2InputPort();

_2_5_55.name = "OutputPort2InputPort";

_2_5_55.dst = _2_5_9_10;

_2_5_55.src = _2_5_13_16;

var _2_5_54 = new OutputPort2InputPort();

_2_5_54.name = "OutputPort2InputPort";

_2_5_54.dst = _2_5_34_36;

_2_5_54.src = _2_5_19_44;

var _2_5_53 = new OutputPort2InputPort();

_2_5_53.name = "OutputPort2InputPort";

_2_5_53.dst = _2_5_34_35;

_2_5_53.src = _2_5_17_19;

var _2_5_52 = new UserIOBase2PortBase();

_2_5_52.name = "UserIOBase2PortBase";

_2_5_52.dst = _2_5_17_18;

_2_5_52.src = _2_5_6;

var _2_5_51 = new UserIOBase2PortBase();

_2_5_51.name = "UserIOBase2PortBase";

_2_5_51.dst = _2_5_19_43;

_2_5_51.src = _2_5_6;

var _2_5_50 = new UserIOBase2PortBase();

_2_5_50.name = "UserIOBase2PortBase";

_2_5_50.dst = _2_5_13_14;

_2_5_50.src = _2_5_6;

var _2_5_49 = new UserIOBase2PortBase();

_2_5_49.name = "UserIOBase2PortBase";

_2_5_49.dst = _2_5_21_22;

_2_5_49.src = _2_5_6;

var _2_5_48 = new UserIOBase2PortBase();

_2_5_48.name = "UserIOBase2PortBase";

_2_5_48.dst = _2_5_19_45;

_2_5_48.src = _2_5_7;

var _2_5_47 = new UserIOBase2PortBase();

_2_5_47.name = "UserIOBase2PortBase";

_2_5_47.dst = _2_5_13_15;

_2_5_47.src = _2_5_7;

var _2_5_46 = new UserInput2InputPort();

_2_5_46.name = "UserInput2InputPort";

_2_5_46.dst = _2_5_21_23;

_2_5_46.src = _2_5_7;

var _2_5_4 = new PortBase2UserIOBase();

_2_5_4.name = "PortBase2UserIOBase";

_2_5_4.dst = _2_5_29;

_2_5_4.src = _2_5_30_33;

var _2_5_34_57 = new InputPort();

_2_5_34_57.name = "InputPort";

var _2_5_34_37 = new OutputPort();

_2_5_34_37.name = "OutputPort";

var _2_5_34_36 = new InputPort();

_2_5_34_36.name = "InputPort";

var _2_5_34_35 = new InputPort();

_2_5_34_35.name = "InputPort";

var _2_5_34 = new Or();

_2_5_34.name = "Or";

_2_5_34.children.push(_2_5_34_36);

_2_5_34.children.push(_2_5_34_37);

_2_5_34.children.push(_2_5_34_57);

_2_5_34.children.push(_2_5_34_35);

var _2_5_30_33 = new OutputPort();

_2_5_30_33.name = "OutputPort";

var _2_5_30_32 = new InputPort();

_2_5_30_32.name = "InputPort";

var _2_5_30_31 = new InputPort();

_2_5_30_31.name = "InputPort";

var _2_5_30 = new Nand();

_2_5_30.name = "Nand";

_2_5_30.children.push(_2_5_30_31);

_2_5_30.children.push(_2_5_30_32);

_2_5_30.children.push(_2_5_30_33);

var _2_5_3 = new OutputPort2InputPort();

_2_5_3.name = "OutputPort2InputPort";

_2_5_3.dst = _2_5_30_31;

_2_5_3.src = _2_5_34_37;

var _2_5_29 = new UserOutput();

_2_5_29.name = "UserOutput";

var _2_5_21_24 = new OutputPort();

_2_5_21_24.name = "OutputPort";

var _2_5_21_23 = new InputPort();

_2_5_21_23.name = "InputPort";

var _2_5_21_22 = new InputPort();

_2_5_21_22.name = "InputPort";

var _2_5_21 = new And();

_2_5_21.name = "And";

_2_5_21.children.push(_2_5_21_22);

_2_5_21.children.push(_2_5_21_23);

_2_5_21.children.push(_2_5_21_24);

var _2_5_2 = new OutputPort2InputPort();

_2_5_2.name = "OutputPort2InputPort";

_2_5_2.dst = _2_5_30_32;

_2_5_2.src = _2_5_9_12;

var _2_5_19_45 = new InputPort();

_2_5_19_45.name = "InputPort";

var _2_5_19_44 = new OutputPort();

_2_5_19_44.name = "OutputPort";

var _2_5_19_43 = new InputPort();

_2_5_19_43.name = "InputPort";

var _2_5_19 = new Xnor();

_2_5_19.name = "Xnor";

_2_5_19.children.push(_2_5_19_43);

_2_5_19.children.push(_2_5_19_44);

_2_5_19.children.push(_2_5_19_45);

var _2_5_17_19 = new OutputPort();

_2_5_17_19.name = "OutputPort";

var _2_5_17_18 = new InputPort();

_2_5_17_18.name = "InputPort";

var _2_5_17 = new Not();

_2_5_17.name = "Not";

_2_5_17.children.push(_2_5_17_19);

_2_5_17.children.push(_2_5_17_18);

var _2_5_16 = new UserInput();

_2_5_16.name = "UserInput";

var _2_5_13_16 = new OutputPort();

_2_5_13_16.name = "OutputPort";

var _2_5_13_15 = new InputPort();

_2_5_13_15.name = "InputPort";

var _2_5_13_14 = new InputPort();

_2_5_13_14.name = "InputPort";

var _2_5_13 = new Or();

_2_5_13.name = "Or";

_2_5_13.children.push(_2_5_13_14);

_2_5_13.children.push(_2_5_13_15);

_2_5_13.children.push(_2_5_13_16);

var _2_5_1 = new OutputPort2InputPort();

_2_5_1.name = "OutputPort2InputPort";

_2_5_1.dst = _2_5_34_57;

_2_5_1.src = _2_5_13_16;

var _2_5 = new LogicCircuit();

_2_5.name = "SimpleModel";

_2_5.children.push(_2_5_56);

_2_5.children.push(_2_5_6);

_2_5.children.push(_2_5_7);

_2_5.children.push(_2_5_1);

_2_5.children.push(_2_5_13);

_2_5.children.push(_2_5_9);

_2_5.children.push(_2_5_16);

_2_5.children.push(_2_5_17);

_2_5.children.push(_2_5_19);

_2_5.children.push(_2_5_2);

_2_5.children.push(_2_5_21);

_2_5.children.push(_2_5_29);

_2_5.children.push(_2_5_3);

_2_5.children.push(_2_5_30);

_2_5.children.push(_2_5_34);

_2_5.children.push(_2_5_4);

_2_5.children.push(_2_5_46);

_2_5.children.push(_2_5_47);

_2_5.children.push(_2_5_48);

_2_5.children.push(_2_5_49);

_2_5.children.push(_2_5_50);

_2_5.children.push(_2_5_51);

_2_5.children.push(_2_5_52);

_2_5.children.push(_2_5_53);

_2_5.children.push(_2_5_54);

_2_5.children.push(_2_5_55);

_2_5.fanout = "null";

var _2_4_9_1284596102 = new OutputPort2UserOutput();

_2_4_9_1284596102.name = "OutputPort2UserOutput";

_2_4_9_1284596102.dst = _2_4_9_60;

_2_4_9_1284596102.src = _2_4_9_55_58;

var _2_4_9_9 = new OutputPort2InputPort();

_2_4_9_9.name = "OutputPort2InputPort";

_2_4_9_9.dst = _2_4_9_41_48;

_2_4_9_9.src = _2_4_9_50_54;

var _2_4_9_8 = new OutputPort2InputPort();

_2_4_9_8.name = "OutputPort2InputPort";

_2_4_9_8.dst = _2_4_9_55_57;

_2_4_9_8.src = _2_4_9_50_54;

var _2_4_9_7 = new OutputPort2InputPort();

_2_4_9_7.name = "OutputPort2InputPort";

_2_4_9_7.dst = _2_4_9_50_8;

_2_4_9_7.src = _2_4_9_55_58;

var _2_4_9_60 = new UserOutput();

_2_4_9_60.name = "!Q";

var _2_4_9_6 = new OutputPort2InputPort();

_2_4_9_6.name = "OutputPort2InputPort";

_2_4_9_6.dst = _2_4_9_55_56;

_2_4_9_6.src = _2_4_9_41_49;

var _2_4_9_59 = new UserOutput();

_2_4_9_59.name = "Q";

var _2_4_9_55_58 = new OutputPort();

_2_4_9_55_58.name = "OutputPort";

var _2_4_9_55_57 = new InputPort();

_2_4_9_55_57.name = "InputPort";

var _2_4_9_55_56 = new InputPort();

_2_4_9_55_56.name = "InputPort";

var _2_4_9_55 = new Nand();

_2_4_9_55.name = "Nand";

_2_4_9_55.children.push(_2_4_9_55_58);

_2_4_9_55.children.push(_2_4_9_55_56);

_2_4_9_55.children.push(_2_4_9_55_57);

var _2_4_9_50_8 = new InputPort();

_2_4_9_50_8.name = "InputPort";

var _2_4_9_50_54 = new OutputPort();

_2_4_9_50_54.name = "OutputPort";

var _2_4_9_50_51 = new InputPort();

_2_4_9_50_51.name = "InputPort";

var _2_4_9_50 = new Nand();

_2_4_9_50.name = "Nand";

_2_4_9_50.children.push(_2_4_9_50_8);

_2_4_9_50.children.push(_2_4_9_50_51);

_2_4_9_50.children.push(_2_4_9_50_54);

var _2_4_9_5 = new UserInput2InputPort();

_2_4_9_5.name = "UserInput2InputPort";

_2_4_9_5.dst = _2_4_9_41_47;

_2_4_9_5.src = _2_4_9_20;

var _2_4_9_41_49 = new OutputPort();

_2_4_9_41_49.name = "OutputPort";

var _2_4_9_41_48 = new InputPort();

_2_4_9_41_48.name = "InputPort";

var _2_4_9_41_47 = new InputPort();

_2_4_9_41_47.name = "InputPort";

var _2_4_9_41_46 = new InputPort();

_2_4_9_41_46.name = "InputPort";

var _2_4_9_41 = new Nand();

_2_4_9_41.name = "Nand";

_2_4_9_41.children.push(_2_4_9_41_49);

_2_4_9_41.children.push(_2_4_9_41_46);

_2_4_9_41.children.push(_2_4_9_41_47);

_2_4_9_41.children.push(_2_4_9_41_48);

var _2_4_9_32_40 = new OutputPort();

_2_4_9_32_40.name = "OutputPort";

var _2_4_9_32_39 = new InputPort();

_2_4_9_32_39.name = "InputPort";

var _2_4_9_32_38 = new InputPort();

_2_4_9_32_38.name = "InputPort";

var _2_4_9_32_33 = new InputPort();

_2_4_9_32_33.name = "InputPort";

var _2_4_9_32 = new Nand();

_2_4_9_32.name = "Nand";

_2_4_9_32.children.push(_2_4_9_32_40);

_2_4_9_32.children.push(_2_4_9_32_33);

_2_4_9_32.children.push(_2_4_9_32_38);

_2_4_9_32.children.push(_2_4_9_32_39);

var _2_4_9_3 = new UserInput2InputPort();

_2_4_9_3.name = "UserInput2InputPort";

_2_4_9_3.dst = _2_4_9_32_33;

_2_4_9_3.src = _2_4_9_19;

var _2_4_9_21 = new Clock();

_2_4_9_21.name = "Clk";

_2_4_9_21.Milliseconds = "0";

var _2_4_9_20 = new UserInput();

_2_4_9_20.name = "K";

var _2_4_9_2 = new OutputPort2InputPort();

_2_4_9_2.name = "OutputPort2InputPort";

_2_4_9_2.dst = _2_4_9_50_51;

_2_4_9_2.src = _2_4_9_32_40;

var _2_4_9_19 = new UserInput();

_2_4_9_19.name = "J";

var _2_4_9_15 = new UserIOBase2PortBase();

_2_4_9_15.name = "UserIOBase2PortBase";

_2_4_9_15.dst = _2_4_9_41_46;

_2_4_9_15.src = _2_4_9_21;

var _2_4_9_14 = new UserIOBase2PortBase();

_2_4_9_14.name = "UserIOBase2PortBase";

_2_4_9_14.dst = _2_4_9_32_39;

_2_4_9_14.src = _2_4_9_21;

var _2_4_9_11 = new OutputPort2InputPort();

_2_4_9_11.name = "OutputPort2InputPort";

_2_4_9_11.dst = _2_4_9_32_38;

_2_4_9_11.src = _2_4_9_55_58;

var _2_4_9_1 = new OutputPort2UserOutput();

_2_4_9_1.name = "OutputPort2UserOutput";

_2_4_9_1.dst = _2_4_9_59;

_2_4_9_1.src = _2_4_9_50_54;

var _2_4_9 = new LogicCircuit();

_2_4_9.name = "JKFFNew";

_2_4_9.children.push(_2_4_9_1284596102);

_2_4_9.children.push(_2_4_9_7);

_2_4_9.children.push(_2_4_9_8);

_2_4_9.children.push(_2_4_9_9);

_2_4_9.children.push(_2_4_9_1);

_2_4_9.children.push(_2_4_9_11);

_2_4_9.children.push(_2_4_9_14);

_2_4_9.children.push(_2_4_9_15);

_2_4_9.children.push(_2_4_9_19);

_2_4_9.children.push(_2_4_9_2);

_2_4_9.children.push(_2_4_9_20);

_2_4_9.children.push(_2_4_9_21);

_2_4_9.children.push(_2_4_9_3);

_2_4_9.children.push(_2_4_9_32);

_2_4_9.children.push(_2_4_9_41);

_2_4_9.children.push(_2_4_9_5);

_2_4_9.children.push(_2_4_9_50);

_2_4_9.children.push(_2_4_9_55);

_2_4_9.children.push(_2_4_9_59);

_2_4_9.children.push(_2_4_9_6);

_2_4_9.children.push(_2_4_9_60);

_2_4_9.fanout = "null";

var _2_4_8_14 = new OutputPort();

_2_4_8_14.name = "OutputPort";

var _2_4_8_13 = new InputPort();

_2_4_8_13.name = "InputPort";

var _2_4_8_12 = new InputPort();

_2_4_8_12.name = "InputPort";

var _2_4_8 = new And();

_2_4_8.name = "And";

_2_4_8.children.push(_2_4_8_12);

_2_4_8.children.push(_2_4_8_13);

_2_4_8.children.push(_2_4_8_14);

var _2_4_7 = new OutputPort2InputPort();

_2_4_7.name = "OutputPort2InputPort";

_2_4_7.dst = _2_4_49_51;

_2_4_7.src = _2_4_30_33;

var _2_4_63_37 = new UserOutput();

_2_4_63_37.name = "UserOutput";

var _2_4_63 = new NumericOutput();

_2_4_63.name = "NumericOutput";

_2_4_63.children.push(_2_4_63_37);

_2_4_63.Value = "0000";

_2_4_63.SelRep = "2";

_2_4_63.Bits = "4";

var _2_4_60_62 = new OutputPort();

_2_4_60_62.name = "OutputPort";

var _2_4_60_61 = new InputPort();

_2_4_60_61.name = "InputPort";

var _2_4_60 = new Buffer();

_2_4_60.name = "Buffer";

_2_4_60.children.push(_2_4_60_62);

_2_4_60.children.push(_2_4_60_61);

var _2_4_6 = new OutputPort2InputPort();

_2_4_6.name = "OutputPort2InputPort";

_2_4_6.dst = _2_4_49_50;

_2_4_6.src = _2_4_25_28;

var _2_4_57_59 = new OutputPort();

_2_4_57_59.name = "OutputPort";

var _2_4_57_58 = new InputPort();

_2_4_57_58.name = "InputPort";

var _2_4_57 = new Not();

_2_4_57.name = "Not";

_2_4_57.children.push(_2_4_57_59);

_2_4_57.children.push(_2_4_57_58);

var _2_4_53_56 = new OutputPort();

_2_4_53_56.name = "OutputPort";

var _2_4_53_55 = new InputPort();

_2_4_53_55.name = "InputPort";

var _2_4_53_54 = new InputPort();

_2_4_53_54.name = "InputPort";

var _2_4_53 = new Nand();

_2_4_53.name = "Nand";

_2_4_53.children.push(_2_4_53_54);

_2_4_53.children.push(_2_4_53_55);

_2_4_53.children.push(_2_4_53_56);

var _2_4_5_6 = new UserInput();

_2_4_5_6.name = "UserInput";

var _2_4_5_38 = new UserInput();

_2_4_5_38.name = "UserInput";

var _2_4_5 = new NumericInput();

_2_4_5.name = "NumericInput";

_2_4_5.children.push(_2_4_5_6);

_2_4_5.children.push(_2_4_5_38);

_2_4_5.Value = "0000";

_2_4_5.SelRep = "2";

_2_4_5.Bits = "2";

var _2_4_49_52 = new OutputPort();

_2_4_49_52.name = "OutputPort";

var _2_4_49_51 = new InputPort();

_2_4_49_51.name = "InputPort";

var _2_4_49_50 = new InputPort();

_2_4_49_50.name = "InputPort";

var _2_4_49 = new And();

_2_4_49.name = "And";

_2_4_49.children.push(_2_4_49_50);

_2_4_49.children.push(_2_4_49_51);

_2_4_49.children.push(_2_4_49_52);

var _2_4_48 = new UserOutput();

_2_4_48.name = "UserOutput";

var _2_4_47 = new UserOutput();

_2_4_47.name = "UserOutput";

var _2_4_42 = new OutputPort2InputPort();

_2_4_42.name = "OutputPort2InputPort";

_2_4_42.dst = _2_4_8_12;

_2_4_42.src = _2_4_16_19;

var _2_4_41 = new UserInput2InputPort();

_2_4_41.name = "UserInput2InputPort";

_2_4_41.dst = _2_4_16_18;

_2_4_41.src = _2_4_40;

var _2_4_40 = new UserInput();

_2_4_40.name = "UserInput";

var _2_4_4 = new OutputPort2InputPort();

_2_4_4.name = "OutputPort2InputPort";

_2_4_4.dst = _2_4_30_32;

_2_4_4.src = _2_4_25_28;

var _2_4_39_42 = new OutputPort();

_2_4_39_42.name = "OutputPort";

var _2_4_39_41 = new InputPort();

_2_4_39_41.name = "InputPort";

var _2_4_39_40 = new InputPort();

_2_4_39_40.name = "InputPort";

var _2_4_39 = new Nor();

_2_4_39.name = "Nor";

_2_4_39.children.push(_2_4_39_40);

_2_4_39.children.push(_2_4_39_41);

_2_4_39.children.push(_2_4_39_42);

var _2_4_38_46 = new OutputPort();

_2_4_38_46.name = "OutputPort";

var _2_4_38_45 = new InputPort();

_2_4_38_45.name = "InputPort";

var _2_4_38_44 = new InputPort();

_2_4_38_44.name = "InputPort";

var _2_4_38_43 = new InputPort();

_2_4_38_43.name = "InputPort";

var _2_4_38 = new And();

_2_4_38.name = "And3";

_2_4_38.children.push(_2_4_38_44);

_2_4_38.children.push(_2_4_38_45);

_2_4_38.children.push(_2_4_38_46);

_2_4_38.children.push(_2_4_38_43);

var _2_4_36 = new UserIOBase2PortBase();

_2_4_36.name = "UserIOBase2PortBase";

_2_4_36.dst = _2_4_8_13;

_2_4_36.src = _2_4_15;

var _2_4_35 = new PortBase2UserIOBase();

_2_4_35.name = "PortBase2UserIOBase";

_2_4_35.dst = _2_4_48;

_2_4_35.src = _2_4_57_59;

var _2_4_34_37 = new OutputPort();

_2_4_34_37.name = "OutputPort";

var _2_4_34_36 = new InputPort();

_2_4_34_36.name = "InputPort";

var _2_4_34_35 = new InputPort();

_2_4_34_35.name = "InputPort";

var _2_4_34 = new And();

_2_4_34.name = "And";

_2_4_34.children.push(_2_4_34_35);

_2_4_34.children.push(_2_4_34_36);

_2_4_34.children.push(_2_4_34_37);

var _2_4_33 = new OutputPort2InputPort();

_2_4_33.name = "OutputPort2InputPort";

_2_4_33.dst = _2_4_60_61;

_2_4_33.src = _2_4_53_56;

var _2_4_32 = new OutputPort2InputPort();

_2_4_32.name = "OutputPort2InputPort";

_2_4_32.dst = _2_4_57_58;

_2_4_32.src = _2_4_49_52;

var _2_4_31 = new OutputPort2InputPort();

_2_4_31.name = "OutputPort2InputPort";

_2_4_31.dst = _2_4_38_44;

_2_4_31.src = _2_4_39_42;

var _2_4_30_33 = new OutputPort();

_2_4_30_33.name = "OutputPort";

var _2_4_30_32 = new InputPort();

_2_4_30_32.name = "InputPort";

var _2_4_30_31 = new InputPort();

_2_4_30_31.name = "InputPort";

var _2_4_30 = new Xnor();

_2_4_30.name = "Xnor";

_2_4_30.children.push(_2_4_30_31);

_2_4_30.children.push(_2_4_30_32);

_2_4_30.children.push(_2_4_30_33);

var _2_4_3 = new UserInput2InputPort();

_2_4_3.name = "UserInput2InputPort";

_2_4_3.dst = _2_4_25_27;

_2_4_3.src = _2_4_24;

var _2_4_29 = new OutputPort2InputPort();

_2_4_29.name = "OutputPort2InputPort";

_2_4_29.dst = _2_4_34_36;

_2_4_29.src = _2_4_49_52;

var _2_4_27 = new OutputPort2UserOutput();

_2_4_27.name = "OutputPort2UserOutput";

_2_4_27.dst = _2_4_47;

_2_4_27.src = _2_4_39_42;

var _2_4_26 = new OutputPort2InputPort();

_2_4_26.name = "OutputPort2InputPort";

_2_4_26.dst = _2_4_38_45;

_2_4_26.src = _2_4_34_37;

var _2_4_25_28 = new OutputPort();

_2_4_25_28.name = "OutputPort";

var _2_4_25_27 = new InputPort();

_2_4_25_27.name = "InputPort";

var _2_4_25_26 = new InputPort();

_2_4_25_26.name = "InputPort";

var _2_4_25 = new Nor();

_2_4_25.name = "Nor";

_2_4_25.children.push(_2_4_25_26);

_2_4_25.children.push(_2_4_25_27);

_2_4_25.children.push(_2_4_25_28);

var _2_4_24 = new UserInput();

_2_4_24.name = "UserInput1";

var _2_4_23 = new UserInput2InputPort();

_2_4_23.name = "UserInput2InputPort";

_2_4_23.dst = _2_4_38_43;

_2_4_23.src = _2_4_21;

var _2_4_22 = new UserInput2InputPort();

_2_4_22.name = "UserInput2InputPort";

_2_4_22.dst = _2_4_39_41;

_2_4_22.src = _2_4_21;

var _2_4_21 = new UserInput();

_2_4_21.name = "UserInput2";

var _2_4_20_23 = new OutputPort();

_2_4_20_23.name = "OutputPort";

var _2_4_20_22 = new InputPort();

_2_4_20_22.name = "InputPort";

var _2_4_20_21 = new InputPort();

_2_4_20_21.name = "InputPort";

var _2_4_20 = new Nand();

_2_4_20.name = "Nand";

_2_4_20.children.push(_2_4_20_21);

_2_4_20.children.push(_2_4_20_22);

_2_4_20.children.push(_2_4_20_23);

var _2_4_2 = new OutputPort2InputPort();

_2_4_2.name = "OutputPort2InputPort";

_2_4_2.dst = _2_4_20_21;

_2_4_2.src = _2_4_16_19;

var _2_4_19 = new OutputPort2InputPort();

_2_4_19.name = "OutputPort2InputPort";

_2_4_19.dst = _2_4_39_40;

_2_4_19.src = _2_4_34_37;

var _2_4_18 = new UserIOBase2UserIOBase();

_2_4_18.name = "UserIOBase2UserIOBase";

_2_4_18.dst = "null";

_2_4_18.src = _2_4_9_59;

var _2_4_17 = new OutputPort2InputPort();

_2_4_17.name = "OutputPort2InputPort";

_2_4_17.dst = _2_4_34_35;

_2_4_17.src = _2_4_20_23;

var _2_4_16_19 = new OutputPort();

_2_4_16_19.name = "OutputPort";

var _2_4_16_18 = new InputPort();

_2_4_16_18.name = "InputPort";

var _2_4_16_17 = new InputPort();

_2_4_16_17.name = "InputPort";

var _2_4_16 = new Or();

_2_4_16.name = "Or";

_2_4_16.children.push(_2_4_16_17);

_2_4_16.children.push(_2_4_16_18);

_2_4_16.children.push(_2_4_16_19);

var _2_4_15 = new Clock();

_2_4_15.name = "Clock";

_2_4_15.Milliseconds = "0";

var _2_4_14 = new OutputPort2InputPort();

_2_4_14.name = "OutputPort2InputPort";

_2_4_14.dst = _2_4_39_40;

_2_4_14.src = _2_4_57_59;

var _2_4_12_14 = new UserOutput();

_2_4_12_14.name = "UserOutput";

var _2_4_12_13 = new UserOutput();

_2_4_12_13.name = "UserOutput";

var _2_4_12 = new NumericOutput();

_2_4_12.name = "NumericOutput";

_2_4_12.children.push(_2_4_12_14);

_2_4_12.children.push(_2_4_12_13);

_2_4_12.Value = "0000";

_2_4_12.SelRep = "2";

_2_4_12.Bits = "2";

var _2_4_11 = new OutputPort2InputPort();

_2_4_11.name = "OutputPort2InputPort";

_2_4_11.dst = _2_4_53_55;

_2_4_11.src = _2_4_20_23;

var _2_4_10 = new OutputPort2InputPort();

_2_4_10.name = "OutputPort2InputPort";

_2_4_10.dst = _2_4_53_54;

_2_4_10.src = _2_4_30_33;

var _2_4_1 = new OutputPort2InputPort();

_2_4_1.name = "OutputPort2InputPort";

_2_4_1.dst = _2_4_16_17;

_2_4_1.src = _2_4_8_14;

var _2_4 = new LogicCircuit();

_2_4.name = "ComplexModel";

_2_4.children.push(_2_4_63);

_2_4.children.push(_2_4_7);

_2_4.children.push(_2_4_8);

_2_4.children.push(_2_4_1);

_2_4.children.push(_2_4_10);

_2_4.children.push(_2_4_11);

_2_4.children.push(_2_4_12);

_2_4.children.push(_2_4_14);

_2_4.children.push(_2_4_15);

_2_4.children.push(_2_4_16);

_2_4.children.push(_2_4_9);

_2_4.children.push(_2_4_17);

_2_4.children.push(_2_4_18);

_2_4.children.push(_2_4_19);

_2_4.children.push(_2_4_2);

_2_4.children.push(_2_4_20);

_2_4.children.push(_2_4_21);

_2_4.children.push(_2_4_22);

_2_4.children.push(_2_4_23);

_2_4.children.push(_2_4_24);

_2_4.children.push(_2_4_25);

_2_4.children.push(_2_4_26);

_2_4.children.push(_2_4_27);

_2_4.children.push(_2_4_29);

_2_4.children.push(_2_4_3);

_2_4.children.push(_2_4_30);

_2_4.children.push(_2_4_31);

_2_4.children.push(_2_4_32);

_2_4.children.push(_2_4_33);

_2_4.children.push(_2_4_34);

_2_4.children.push(_2_4_35);

_2_4.children.push(_2_4_36);

_2_4.children.push(_2_4_38);

_2_4.children.push(_2_4_39);

_2_4.children.push(_2_4_4);

_2_4.children.push(_2_4_40);

_2_4.children.push(_2_4_41);

_2_4.children.push(_2_4_42);

_2_4.children.push(_2_4_47);

_2_4.children.push(_2_4_48);

_2_4.children.push(_2_4_49);

_2_4.children.push(_2_4_5);

_2_4.children.push(_2_4_53);

_2_4.children.push(_2_4_57);

_2_4.children.push(_2_4_6);

_2_4.children.push(_2_4_60);

_2_4.fanout = "null";

var _2_3_9 = new OutputPort2InputPort();

_2_3_9.name = "OutputPort2InputPort";

_2_3_9.dst = _2_3_8_29;

_2_3_9.src = _2_3_4_21;

var _2_3_8_30 = new OutputPort();

_2_3_8_30.name = "OutputPort";

var _2_3_8_29 = new InputPort();

_2_3_8_29.name = "InputPort";

var _2_3_8_28 = new InputPort();

_2_3_8_28.name = "InputPort";

var _2_3_8 = new Or();

_2_3_8.name = "Or";

_2_3_8.children.push(_2_3_8_28);

_2_3_8.children.push(_2_3_8_29);

_2_3_8.children.push(_2_3_8_30);

var _2_3_7_18 = new OutputPort();

_2_3_7_18.name = "OutputPort";

var _2_3_7_17 = new InputPort();

_2_3_7_17.name = "InputPort";

var _2_3_7_16 = new InputPort();

_2_3_7_16.name = "InputPort";

var _2_3_7 = new Xor();

_2_3_7.name = "Xor";

_2_3_7.children.push(_2_3_7_16);

_2_3_7.children.push(_2_3_7_17);

_2_3_7.children.push(_2_3_7_18);

var _2_3_6_24 = new OutputPort();

_2_3_6_24.name = "OutputPort";

var _2_3_6_23 = new InputPort();

_2_3_6_23.name = "InputPort";

var _2_3_6_22 = new InputPort();

_2_3_6_22.name = "InputPort";

var _2_3_6 = new Xor();

_2_3_6.name = "Xor";

_2_3_6.children.push(_2_3_6_22);

_2_3_6.children.push(_2_3_6_23);

_2_3_6.children.push(_2_3_6_24);

var _2_3_5_27 = new OutputPort();

_2_3_5_27.name = "OutputPort";

var _2_3_5_26 = new InputPort();

_2_3_5_26.name = "InputPort";

var _2_3_5_25 = new InputPort();

_2_3_5_25.name = "InputPort";

var _2_3_5 = new And();

_2_3_5.name = "And";

_2_3_5.children.push(_2_3_5_25);

_2_3_5.children.push(_2_3_5_26);

_2_3_5.children.push(_2_3_5_27);

var _2_3_4_21 = new OutputPort();

_2_3_4_21.name = "OutputPort";

var _2_3_4_20 = new InputPort();

_2_3_4_20.name = "InputPort";

var _2_3_4_19 = new InputPort();

_2_3_4_19.name = "InputPort";

var _2_3_4 = new And();

_2_3_4.name = "And";

_2_3_4.children.push(_2_3_4_19);

_2_3_4.children.push(_2_3_4_20);

_2_3_4.children.push(_2_3_4_21);

var _2_3_3 = new OutputPort2InputPort();

_2_3_3.name = "OutputPort2InputPort";

_2_3_3.dst = _2_3_6_22;

_2_3_3.src = _2_3_7_18;

var _2_3_23 = new OutputPort2UserOutput();

_2_3_23.name = "OutputPort2UserOutput";

_2_3_23.dst = _2_3_11;

_2_3_23.src = _2_3_8_30;

var _2_3_22 = new OutputPort2UserOutput();

_2_3_22.name = "OutputPort2UserOutput";

_2_3_22.dst = _2_3_12;

_2_3_22.src = _2_3_6_24;

var _2_3_20 = new UserInput2InputPort();

_2_3_20.name = "UserInput2InputPort";

_2_3_20.dst = _2_3_5_26;

_2_3_20.src = _2_3_13;

var _2_3_2 = new UserInput2InputPort();

_2_3_2.name = "UserInput2InputPort";

_2_3_2.dst = _2_3_7_17;

_2_3_2.src = _2_3_14;

var _2_3_19 = new UserInput2InputPort();

_2_3_19.name = "UserInput2InputPort";

_2_3_19.dst = _2_3_5_25;

_2_3_19.src = _2_3_14;

var _2_3_18 = new OutputPort2InputPort();

_2_3_18.name = "OutputPort2InputPort";

_2_3_18.dst = _2_3_8_28;

_2_3_18.src = _2_3_5_27;

var _2_3_17 = new OutputPort2InputPort();

_2_3_17.name = "OutputPort2InputPort";

_2_3_17.dst = _2_3_4_20;

_2_3_17.src = _2_3_7_18;

var _2_3_16 = new OutputPort2InputPort();

_2_3_16.name = "OutputPort2InputPort";

_2_3_16.dst = _2_3_4_19;

_2_3_16.src = _2_3_7_18;

var _2_3_15 = new UserInput();

_2_3_15.name = "Cin";

var _2_3_14 = new UserInput();

_2_3_14.name = "B";

var _2_3_13 = new UserInput();

_2_3_13.name = "A";

var _2_3_12 = new UserOutput();

_2_3_12.name = "S";

var _2_3_11 = new UserOutput();

_2_3_11.name = "Cout";

var _2_3_10 = new UserInput2InputPort();

_2_3_10.name = "UserInput2InputPort";

_2_3_10.dst = _2_3_6_23;

_2_3_10.src = _2_3_15;

var _2_3_1 = new UserInput2InputPort();

_2_3_1.name = "UserInput2InputPort";

_2_3_1.dst = _2_3_7_16;

_2_3_1.src = _2_3_13;

var _2_3 = new LogicCircuit();

_2_3.name = "TwoBitAdder";

_2_3.children.push(_2_3_6);

_2_3.children.push(_2_3_7);

_2_3.children.push(_2_3_8);

_2_3.children.push(_2_3_1);

_2_3.children.push(_2_3_10);

_2_3.children.push(_2_3_11);

_2_3.children.push(_2_3_12);

_2_3.children.push(_2_3_13);

_2_3.children.push(_2_3_9);

_2_3.children.push(_2_3_14);

_2_3.children.push(_2_3_15);

_2_3.children.push(_2_3_16);

_2_3.children.push(_2_3_17);

_2_3.children.push(_2_3_18);

_2_3.children.push(_2_3_19);

_2_3.children.push(_2_3_2);

_2_3.children.push(_2_3_20);

_2_3.children.push(_2_3_22);

_2_3.children.push(_2_3_23);

_2_3.children.push(_2_3_3);

_2_3.children.push(_2_3_4);

_2_3.children.push(_2_3_5);

_2_3.fanout = "null";

var _2_2_1284596102 = new OutputPort2UserOutput();

_2_2_1284596102.name = "OutputPort2UserOutput";

_2_2_1284596102.dst = _2_2_60;

_2_2_1284596102.src = _2_2_55_58;

var _2_2_9 = new OutputPort2InputPort();

_2_2_9.name = "OutputPort2InputPort";

_2_2_9.dst = _2_2_41_48;

_2_2_9.src = _2_2_50_54;

var _2_2_8 = new OutputPort2InputPort();

_2_2_8.name = "OutputPort2InputPort";

_2_2_8.dst = _2_2_55_57;

_2_2_8.src = _2_2_50_54;

var _2_2_7 = new OutputPort2InputPort();

_2_2_7.name = "OutputPort2InputPort";

_2_2_7.dst = _2_2_50_8;

_2_2_7.src = _2_2_55_58;

var _2_2_60 = new UserOutput();

_2_2_60.name = "!Q";

var _2_2_6 = new OutputPort2InputPort();

_2_2_6.name = "OutputPort2InputPort";

_2_2_6.dst = _2_2_55_56;

_2_2_6.src = _2_2_41_49;

var _2_2_59 = new UserOutput();

_2_2_59.name = "Q";

var _2_2_55_58 = new OutputPort();

_2_2_55_58.name = "OutputPort";

var _2_2_55_57 = new InputPort();

_2_2_55_57.name = "InputPort";

var _2_2_55_56 = new InputPort();

_2_2_55_56.name = "InputPort";

var _2_2_55 = new Nand();

_2_2_55.name = "Nand";

_2_2_55.children.push(_2_2_55_56);

_2_2_55.children.push(_2_2_55_57);

_2_2_55.children.push(_2_2_55_58);

var _2_2_50_8 = new InputPort();

_2_2_50_8.name = "InputPort";

var _2_2_50_54 = new OutputPort();

_2_2_50_54.name = "OutputPort";

var _2_2_50_51 = new InputPort();

_2_2_50_51.name = "InputPort";

var _2_2_50 = new Nand();

_2_2_50.name = "Nand";

_2_2_50.children.push(_2_2_50_51);

_2_2_50.children.push(_2_2_50_54);

_2_2_50.children.push(_2_2_50_8);

var _2_2_5 = new UserInput2InputPort();

_2_2_5.name = "UserInput2InputPort";

_2_2_5.dst = _2_2_41_47;

_2_2_5.src = _2_2_20;

var _2_2_41_49 = new OutputPort();

_2_2_41_49.name = "OutputPort";

var _2_2_41_48 = new InputPort();

_2_2_41_48.name = "InputPort";

var _2_2_41_47 = new InputPort();

_2_2_41_47.name = "InputPort";

var _2_2_41_46 = new InputPort();

_2_2_41_46.name = "InputPort";

var _2_2_41 = new Nand();

_2_2_41.name = "Nand";

_2_2_41.children.push(_2_2_41_47);

_2_2_41.children.push(_2_2_41_48);

_2_2_41.children.push(_2_2_41_49);

_2_2_41.children.push(_2_2_41_46);

var _2_2_32_40 = new OutputPort();

_2_2_32_40.name = "OutputPort";

var _2_2_32_39 = new InputPort();

_2_2_32_39.name = "InputPort";

var _2_2_32_38 = new InputPort();

_2_2_32_38.name = "InputPort";

var _2_2_32_33 = new InputPort();

_2_2_32_33.name = "InputPort";

var _2_2_32 = new Nand();

_2_2_32.name = "Nand";

_2_2_32.children.push(_2_2_32_38);

_2_2_32.children.push(_2_2_32_39);

_2_2_32.children.push(_2_2_32_40);

_2_2_32.children.push(_2_2_32_33);

var _2_2_3 = new UserInput2InputPort();

_2_2_3.name = "UserInput2InputPort";

_2_2_3.dst = _2_2_32_33;

_2_2_3.src = _2_2_19;

var _2_2_21 = new Clock();

_2_2_21.name = "Clk";

_2_2_21.Milliseconds = "0";

var _2_2_20 = new UserInput();

_2_2_20.name = "K";

var _2_2_2 = new OutputPort2InputPort();

_2_2_2.name = "OutputPort2InputPort";

_2_2_2.dst = _2_2_50_51;

_2_2_2.src = _2_2_32_40;

var _2_2_19 = new UserInput();

_2_2_19.name = "J";

var _2_2_15 = new UserIOBase2PortBase();

_2_2_15.name = "UserIOBase2PortBase";

_2_2_15.dst = _2_2_41_46;

_2_2_15.src = _2_2_21;

var _2_2_14 = new UserIOBase2PortBase();

_2_2_14.name = "UserIOBase2PortBase";

_2_2_14.dst = _2_2_32_39;

_2_2_14.src = _2_2_21;

var _2_2_11 = new OutputPort2InputPort();

_2_2_11.name = "OutputPort2InputPort";

_2_2_11.dst = _2_2_32_38;

_2_2_11.src = _2_2_55_58;

var _2_2_1 = new OutputPort2UserOutput();

_2_2_1.name = "OutputPort2UserOutput";

_2_2_1.dst = _2_2_59;

_2_2_1.src = _2_2_50_54;

var _2_2 = new LogicCircuit();

_2_2.name = "JKFFNew";

_2_2.children.push(_2_2_1284596102);

_2_2.children.push(_2_2_60);

_2_2.children.push(_2_2_7);

_2_2.children.push(_2_2_8);

_2_2.children.push(_2_2_1);

_2_2.children.push(_2_2_11);

_2_2.children.push(_2_2_14);

_2_2.children.push(_2_2_15);

_2_2.children.push(_2_2_19);

_2_2.children.push(_2_2_2);

_2_2.children.push(_2_2_20);

_2_2.children.push(_2_2_21);

_2_2.children.push(_2_2_9);

_2_2.children.push(_2_2_3);

_2_2.children.push(_2_2_32);

_2_2.children.push(_2_2_41);

_2_2.children.push(_2_2_5);

_2_2.children.push(_2_2_50);

_2_2.children.push(_2_2_55);

_2_2.children.push(_2_2_59);

_2_2.children.push(_2_2_6);

_2_2.fanout = "null";

var _2_1_9 = new UserInput();

_2_1_9.name = "UserInput";

var _2_1_8_1284596102 = new OutputPort2UserOutput();

_2_1_8_1284596102.name = "OutputPort2UserOutput";

_2_1_8_1284596102.dst = _2_1_8_60;

_2_1_8_1284596102.src = _2_1_8_55_58;

var _2_1_8_9 = new OutputPort2InputPort();

_2_1_8_9.name = "OutputPort2InputPort";

_2_1_8_9.dst = _2_1_8_41_48;

_2_1_8_9.src = _2_1_8_50_54;

var _2_1_8_8 = new OutputPort2InputPort();

_2_1_8_8.name = "OutputPort2InputPort";

_2_1_8_8.dst = _2_1_8_55_57;

_2_1_8_8.src = _2_1_8_50_54;

var _2_1_8_7 = new OutputPort2InputPort();

_2_1_8_7.name = "OutputPort2InputPort";

_2_1_8_7.dst = _2_1_8_50_8;

_2_1_8_7.src = _2_1_8_55_58;

var _2_1_8_60 = new UserOutput();

_2_1_8_60.name = "!Q";

var _2_1_8_6 = new OutputPort2InputPort();

_2_1_8_6.name = "OutputPort2InputPort";

_2_1_8_6.dst = _2_1_8_55_56;

_2_1_8_6.src = _2_1_8_41_49;

var _2_1_8_59 = new UserOutput();

_2_1_8_59.name = "Q";

var _2_1_8_55_58 = new OutputPort();

_2_1_8_55_58.name = "OutputPort";

var _2_1_8_55_57 = new InputPort();

_2_1_8_55_57.name = "InputPort";

var _2_1_8_55_56 = new InputPort();

_2_1_8_55_56.name = "InputPort";

var _2_1_8_55 = new Nand();

_2_1_8_55.name = "Nand";

_2_1_8_55.children.push(_2_1_8_55_58);

_2_1_8_55.children.push(_2_1_8_55_56);

_2_1_8_55.children.push(_2_1_8_55_57);

var _2_1_8_50_8 = new InputPort();

_2_1_8_50_8.name = "InputPort";

var _2_1_8_50_54 = new OutputPort();

_2_1_8_50_54.name = "OutputPort";

var _2_1_8_50_51 = new InputPort();

_2_1_8_50_51.name = "InputPort";

var _2_1_8_50 = new Nand();

_2_1_8_50.name = "Nand";

_2_1_8_50.children.push(_2_1_8_50_8);

_2_1_8_50.children.push(_2_1_8_50_51);

_2_1_8_50.children.push(_2_1_8_50_54);

var _2_1_8_5 = new UserInput2InputPort();

_2_1_8_5.name = "UserInput2InputPort";

_2_1_8_5.dst = _2_1_8_41_47;

_2_1_8_5.src = _2_1_8_20;

var _2_1_8_41_49 = new OutputPort();

_2_1_8_41_49.name = "OutputPort";

var _2_1_8_41_48 = new InputPort();

_2_1_8_41_48.name = "InputPort";

var _2_1_8_41_47 = new InputPort();

_2_1_8_41_47.name = "InputPort";

var _2_1_8_41_46 = new InputPort();

_2_1_8_41_46.name = "InputPort";

var _2_1_8_41 = new Nand();

_2_1_8_41.name = "Nand";

_2_1_8_41.children.push(_2_1_8_41_49);

_2_1_8_41.children.push(_2_1_8_41_46);

_2_1_8_41.children.push(_2_1_8_41_47);

_2_1_8_41.children.push(_2_1_8_41_48);

var _2_1_8_32_40 = new OutputPort();

_2_1_8_32_40.name = "OutputPort";

var _2_1_8_32_39 = new InputPort();

_2_1_8_32_39.name = "InputPort";

var _2_1_8_32_38 = new InputPort();

_2_1_8_32_38.name = "InputPort";

var _2_1_8_32_33 = new InputPort();

_2_1_8_32_33.name = "InputPort";

var _2_1_8_32 = new Nand();

_2_1_8_32.name = "Nand";

_2_1_8_32.children.push(_2_1_8_32_40);

_2_1_8_32.children.push(_2_1_8_32_33);

_2_1_8_32.children.push(_2_1_8_32_38);

_2_1_8_32.children.push(_2_1_8_32_39);

var _2_1_8_3 = new UserInput2InputPort();

_2_1_8_3.name = "UserInput2InputPort";

_2_1_8_3.dst = _2_1_8_32_33;

_2_1_8_3.src = _2_1_8_19;

var _2_1_8_21 = new Clock();

_2_1_8_21.name = "Clk";

_2_1_8_21.Milliseconds = "0";

var _2_1_8_20 = new UserInput();

_2_1_8_20.name = "K";

var _2_1_8_2 = new OutputPort2InputPort();

_2_1_8_2.name = "OutputPort2InputPort";

_2_1_8_2.dst = _2_1_8_50_51;

_2_1_8_2.src = _2_1_8_32_40;

var _2_1_8_19 = new UserInput();

_2_1_8_19.name = "J";

var _2_1_8_15 = new UserIOBase2PortBase();

_2_1_8_15.name = "UserIOBase2PortBase";

_2_1_8_15.dst = _2_1_8_41_46;

_2_1_8_15.src = _2_1_8_21;

var _2_1_8_14 = new UserIOBase2PortBase();

_2_1_8_14.name = "UserIOBase2PortBase";

_2_1_8_14.dst = _2_1_8_32_39;

_2_1_8_14.src = _2_1_8_21;

var _2_1_8_11 = new OutputPort2InputPort();

_2_1_8_11.name = "OutputPort2InputPort";

_2_1_8_11.dst = _2_1_8_32_38;

_2_1_8_11.src = _2_1_8_55_58;

var _2_1_8_1 = new OutputPort2UserOutput();

_2_1_8_1.name = "OutputPort2UserOutput";

_2_1_8_1.dst = _2_1_8_59;

_2_1_8_1.src = _2_1_8_50_54;

var _2_1_8 = new LogicCircuit();

_2_1_8.name = "JKFF 13";

_2_1_8.children.push(_2_1_8_1284596102);

_2_1_8.children.push(_2_1_8_7);

_2_1_8.children.push(_2_1_8_8);

_2_1_8.children.push(_2_1_8_9);

_2_1_8.children.push(_2_1_8_1);

_2_1_8.children.push(_2_1_8_11);

_2_1_8.children.push(_2_1_8_14);

_2_1_8.children.push(_2_1_8_15);

_2_1_8.children.push(_2_1_8_19);

_2_1_8.children.push(_2_1_8_2);

_2_1_8.children.push(_2_1_8_20);

_2_1_8.children.push(_2_1_8_21);

_2_1_8.children.push(_2_1_8_3);

_2_1_8.children.push(_2_1_8_32);

_2_1_8.children.push(_2_1_8_41);

_2_1_8.children.push(_2_1_8_5);

_2_1_8.children.push(_2_1_8_50);

_2_1_8.children.push(_2_1_8_55);

_2_1_8.children.push(_2_1_8_59);

_2_1_8.children.push(_2_1_8_6);

_2_1_8.children.push(_2_1_8_60);

_2_1_8.fanout = "null";

var _2_1_7 = new UserOutput();

_2_1_7.name = "UserOutput";

var _2_1_6 = new OutputPort2InputPort();

_2_1_6.name = "OutputPort2InputPort";

_2_1_6.dst = _2_1_3_4;

_2_1_6.src = _2_1_5_8;

var _2_1_5_8 = new OutputPort();

_2_1_5_8.name = "OutputPort";

var _2_1_5_6 = new InputPort();

_2_1_5_6.name = "InputPort";

var _2_1_5_4 = new InputPort();

_2_1_5_4.name = "InputPort";

var _2_1_5_3 = new InputPort();

_2_1_5_3.name = "InputPort";

var _2_1_5 = new Or();

_2_1_5.name = "Or";

_2_1_5.children.push(_2_1_5_4);

_2_1_5.children.push(_2_1_5_6);

_2_1_5.children.push(_2_1_5_8);

_2_1_5.children.push(_2_1_5_3);

var _2_1_4_1284596102 = new OutputPort2UserOutput();

_2_1_4_1284596102.name = "OutputPort2UserOutput";

_2_1_4_1284596102.dst = _2_1_4_60;

_2_1_4_1284596102.src = _2_1_4_55_58;

var _2_1_4_9 = new OutputPort2InputPort();

_2_1_4_9.name = "OutputPort2InputPort";

_2_1_4_9.dst = _2_1_4_41_48;

_2_1_4_9.src = _2_1_4_50_54;

var _2_1_4_8 = new OutputPort2InputPort();

_2_1_4_8.name = "OutputPort2InputPort";

_2_1_4_8.dst = _2_1_4_55_57;

_2_1_4_8.src = _2_1_4_50_54;

var _2_1_4_7 = new OutputPort2InputPort();

_2_1_4_7.name = "OutputPort2InputPort";

_2_1_4_7.dst = _2_1_4_50_8;

_2_1_4_7.src = _2_1_4_55_58;

var _2_1_4_60 = new UserOutput();

_2_1_4_60.name = "!Q";

var _2_1_4_6 = new OutputPort2InputPort();

_2_1_4_6.name = "OutputPort2InputPort";

_2_1_4_6.dst = _2_1_4_55_56;

_2_1_4_6.src = _2_1_4_41_49;

var _2_1_4_59 = new UserOutput();

_2_1_4_59.name = "Q";

var _2_1_4_55_58 = new OutputPort();

_2_1_4_55_58.name = "OutputPort";

var _2_1_4_55_57 = new InputPort();

_2_1_4_55_57.name = "InputPort";

var _2_1_4_55_56 = new InputPort();

_2_1_4_55_56.name = "InputPort";

var _2_1_4_55 = new Nand();

_2_1_4_55.name = "Nand";

_2_1_4_55.children.push(_2_1_4_55_57);

_2_1_4_55.children.push(_2_1_4_55_58);

_2_1_4_55.children.push(_2_1_4_55_56);

var _2_1_4_50_8 = new InputPort();

_2_1_4_50_8.name = "InputPort";

var _2_1_4_50_54 = new OutputPort();

_2_1_4_50_54.name = "OutputPort";

var _2_1_4_50_51 = new InputPort();

_2_1_4_50_51.name = "InputPort";

var _2_1_4_50 = new Nand();

_2_1_4_50.name = "Nand";

_2_1_4_50.children.push(_2_1_4_50_54);

_2_1_4_50.children.push(_2_1_4_50_8);

_2_1_4_50.children.push(_2_1_4_50_51);

var _2_1_4_5 = new UserInput2InputPort();

_2_1_4_5.name = "UserInput2InputPort";

_2_1_4_5.dst = _2_1_4_41_47;

_2_1_4_5.src = _2_1_4_20;

var _2_1_4_41_49 = new OutputPort();

_2_1_4_41_49.name = "OutputPort";

var _2_1_4_41_48 = new InputPort();

_2_1_4_41_48.name = "InputPort";

var _2_1_4_41_47 = new InputPort();

_2_1_4_41_47.name = "InputPort";

var _2_1_4_41_46 = new InputPort();

_2_1_4_41_46.name = "InputPort";

var _2_1_4_41 = new Nand();

_2_1_4_41.name = "Nand";

_2_1_4_41.children.push(_2_1_4_41_48);

_2_1_4_41.children.push(_2_1_4_41_49);

_2_1_4_41.children.push(_2_1_4_41_46);

_2_1_4_41.children.push(_2_1_4_41_47);

var _2_1_4_32_40 = new OutputPort();

_2_1_4_32_40.name = "OutputPort";

var _2_1_4_32_39 = new InputPort();

_2_1_4_32_39.name = "InputPort";

var _2_1_4_32_38 = new InputPort();

_2_1_4_32_38.name = "InputPort";

var _2_1_4_32_33 = new InputPort();

_2_1_4_32_33.name = "InputPort";

var _2_1_4_32 = new Nand();

_2_1_4_32.name = "Nand";

_2_1_4_32.children.push(_2_1_4_32_39);

_2_1_4_32.children.push(_2_1_4_32_40);

_2_1_4_32.children.push(_2_1_4_32_33);

_2_1_4_32.children.push(_2_1_4_32_38);

var _2_1_4_3 = new UserInput2InputPort();

_2_1_4_3.name = "UserInput2InputPort";

_2_1_4_3.dst = _2_1_4_32_33;

_2_1_4_3.src = _2_1_4_19;

var _2_1_4_21 = new Clock();

_2_1_4_21.name = "Clk";

_2_1_4_21.Milliseconds = "0";

var _2_1_4_20 = new UserInput();

_2_1_4_20.name = "K";

var _2_1_4_2 = new OutputPort2InputPort();

_2_1_4_2.name = "OutputPort2InputPort";

_2_1_4_2.dst = _2_1_4_50_51;

_2_1_4_2.src = _2_1_4_32_40;

var _2_1_4_19 = new UserInput();

_2_1_4_19.name = "J";

var _2_1_4_15 = new UserIOBase2PortBase();

_2_1_4_15.name = "UserIOBase2PortBase";

_2_1_4_15.dst = _2_1_4_41_46;

_2_1_4_15.src = _2_1_4_21;

var _2_1_4_14 = new UserIOBase2PortBase();

_2_1_4_14.name = "UserIOBase2PortBase";

_2_1_4_14.dst = _2_1_4_32_39;

_2_1_4_14.src = _2_1_4_21;

var _2_1_4_11 = new OutputPort2InputPort();

_2_1_4_11.name = "OutputPort2InputPort";

_2_1_4_11.dst = _2_1_4_32_38;

_2_1_4_11.src = _2_1_4_55_58;

var _2_1_4_1 = new OutputPort2UserOutput();

_2_1_4_1.name = "OutputPort2UserOutput";

_2_1_4_1.dst = _2_1_4_59;

_2_1_4_1.src = _2_1_4_50_54;

var _2_1_4 = new LogicCircuit();

_2_1_4.name = "JKFF 11";

_2_1_4.children.push(_2_1_4_1284596102);

_2_1_4.children.push(_2_1_4_7);

_2_1_4.children.push(_2_1_4_8);

_2_1_4.children.push(_2_1_4_9);

_2_1_4.children.push(_2_1_4_1);

_2_1_4.children.push(_2_1_4_11);

_2_1_4.children.push(_2_1_4_14);

_2_1_4.children.push(_2_1_4_15);

_2_1_4.children.push(_2_1_4_19);

_2_1_4.children.push(_2_1_4_2);

_2_1_4.children.push(_2_1_4_20);

_2_1_4.children.push(_2_1_4_21);

_2_1_4.children.push(_2_1_4_3);

_2_1_4.children.push(_2_1_4_32);

_2_1_4.children.push(_2_1_4_41);

_2_1_4.children.push(_2_1_4_5);

_2_1_4.children.push(_2_1_4_50);

_2_1_4.children.push(_2_1_4_55);

_2_1_4.children.push(_2_1_4_59);

_2_1_4.children.push(_2_1_4_6);

_2_1_4.children.push(_2_1_4_60);

_2_1_4.fanout = "null";

var _2_1_3_5 = new OutputPort();

_2_1_3_5.name = "OutputPort";

var _2_1_3_4 = new InputPort();

_2_1_3_4.name = "InputPort";

var _2_1_3 = new Buffer();

_2_1_3.name = "Buffer";

_2_1_3.children.push(_2_1_3_5);

_2_1_3.children.push(_2_1_3_4);

var _2_1_20_1284596102 = new OutputPort2UserOutput();

_2_1_20_1284596102.name = "OutputPort2UserOutput";

_2_1_20_1284596102.dst = _2_1_20_60;

_2_1_20_1284596102.src = _2_1_20_55_58;

var _2_1_20_9 = new OutputPort2InputPort();

_2_1_20_9.name = "OutputPort2InputPort";

_2_1_20_9.dst = _2_1_20_41_48;

_2_1_20_9.src = _2_1_20_50_54;

var _2_1_20_8 = new OutputPort2InputPort();

_2_1_20_8.name = "OutputPort2InputPort";

_2_1_20_8.dst = _2_1_20_55_57;

_2_1_20_8.src = _2_1_20_50_54;

var _2_1_20_7 = new OutputPort2InputPort();

_2_1_20_7.name = "OutputPort2InputPort";

_2_1_20_7.dst = _2_1_20_50_8;

_2_1_20_7.src = _2_1_20_55_58;

var _2_1_20_60 = new UserOutput();

_2_1_20_60.name = "!Q";

var _2_1_20_6 = new OutputPort2InputPort();

_2_1_20_6.name = "OutputPort2InputPort";

_2_1_20_6.dst = _2_1_20_55_56;

_2_1_20_6.src = _2_1_20_41_49;

var _2_1_20_59 = new UserOutput();

_2_1_20_59.name = "Q";

var _2_1_20_55_58 = new OutputPort();

_2_1_20_55_58.name = "OutputPort";

var _2_1_20_55_57 = new InputPort();

_2_1_20_55_57.name = "InputPort";

var _2_1_20_55_56 = new InputPort();

_2_1_20_55_56.name = "InputPort";

var _2_1_20_55 = new Nand();

_2_1_20_55.name = "Nand";

_2_1_20_55.children.push(_2_1_20_55_57);

_2_1_20_55.children.push(_2_1_20_55_58);

_2_1_20_55.children.push(_2_1_20_55_56);

var _2_1_20_50_8 = new InputPort();

_2_1_20_50_8.name = "InputPort";

var _2_1_20_50_54 = new OutputPort();

_2_1_20_50_54.name = "OutputPort";

var _2_1_20_50_51 = new InputPort();

_2_1_20_50_51.name = "InputPort";

var _2_1_20_50 = new Nand();

_2_1_20_50.name = "Nand";

_2_1_20_50.children.push(_2_1_20_50_54);

_2_1_20_50.children.push(_2_1_20_50_8);

_2_1_20_50.children.push(_2_1_20_50_51);

var _2_1_20_5 = new UserInput2InputPort();

_2_1_20_5.name = "UserInput2InputPort";

_2_1_20_5.dst = _2_1_20_41_47;

_2_1_20_5.src = _2_1_20_20;

var _2_1_20_41_49 = new OutputPort();

_2_1_20_41_49.name = "OutputPort";

var _2_1_20_41_48 = new InputPort();

_2_1_20_41_48.name = "InputPort";

var _2_1_20_41_47 = new InputPort();

_2_1_20_41_47.name = "InputPort";

var _2_1_20_41_46 = new InputPort();

_2_1_20_41_46.name = "InputPort";

var _2_1_20_41 = new Nand();

_2_1_20_41.name = "Nand";

_2_1_20_41.children.push(_2_1_20_41_48);

_2_1_20_41.children.push(_2_1_20_41_49);

_2_1_20_41.children.push(_2_1_20_41_46);

_2_1_20_41.children.push(_2_1_20_41_47);

var _2_1_20_32_40 = new OutputPort();

_2_1_20_32_40.name = "OutputPort";

var _2_1_20_32_39 = new InputPort();

_2_1_20_32_39.name = "InputPort";

var _2_1_20_32_38 = new InputPort();

_2_1_20_32_38.name = "InputPort";

var _2_1_20_32_33 = new InputPort();

_2_1_20_32_33.name = "InputPort";

var _2_1_20_32 = new Nand();

_2_1_20_32.name = "Nand";

_2_1_20_32.children.push(_2_1_20_32_39);

_2_1_20_32.children.push(_2_1_20_32_40);

_2_1_20_32.children.push(_2_1_20_32_33);

_2_1_20_32.children.push(_2_1_20_32_38);

var _2_1_20_3 = new UserInput2InputPort();

_2_1_20_3.name = "UserInput2InputPort";

_2_1_20_3.dst = _2_1_20_32_33;

_2_1_20_3.src = _2_1_20_19;

var _2_1_20_21 = new Clock();

_2_1_20_21.name = "Clk";

_2_1_20_21.Milliseconds = "0";

var _2_1_20_20 = new UserInput();

_2_1_20_20.name = "K";

var _2_1_20_2 = new OutputPort2InputPort();

_2_1_20_2.name = "OutputPort2InputPort";

_2_1_20_2.dst = _2_1_20_50_51;

_2_1_20_2.src = _2_1_20_32_40;

var _2_1_20_19 = new UserInput();

_2_1_20_19.name = "J";

var _2_1_20_15 = new UserIOBase2PortBase();

_2_1_20_15.name = "UserIOBase2PortBase";

_2_1_20_15.dst = _2_1_20_41_46;

_2_1_20_15.src = _2_1_20_21;

var _2_1_20_14 = new UserIOBase2PortBase();

_2_1_20_14.name = "UserIOBase2PortBase";

_2_1_20_14.dst = _2_1_20_32_39;

_2_1_20_14.src = _2_1_20_21;

var _2_1_20_11 = new OutputPort2InputPort();

_2_1_20_11.name = "OutputPort2InputPort";

_2_1_20_11.dst = _2_1_20_32_38;

_2_1_20_11.src = _2_1_20_55_58;

var _2_1_20_1 = new OutputPort2UserOutput();

_2_1_20_1.name = "OutputPort2UserOutput";

_2_1_20_1.dst = _2_1_20_59;

_2_1_20_1.src = _2_1_20_50_54;

var _2_1_20 = new LogicCircuit();

_2_1_20.name = "JKFF 14";

_2_1_20.children.push(_2_1_20_1284596102);

_2_1_20.children.push(_2_1_20_7);

_2_1_20.children.push(_2_1_20_8);

_2_1_20.children.push(_2_1_20_9);

_2_1_20.children.push(_2_1_20_1);

_2_1_20.children.push(_2_1_20_11);

_2_1_20.children.push(_2_1_20_14);

_2_1_20.children.push(_2_1_20_15);

_2_1_20.children.push(_2_1_20_19);

_2_1_20.children.push(_2_1_20_2);

_2_1_20.children.push(_2_1_20_20);

_2_1_20.children.push(_2_1_20_21);

_2_1_20.children.push(_2_1_20_3);

_2_1_20.children.push(_2_1_20_32);

_2_1_20.children.push(_2_1_20_41);

_2_1_20.children.push(_2_1_20_5);

_2_1_20.children.push(_2_1_20_50);

_2_1_20.children.push(_2_1_20_55);

_2_1_20.children.push(_2_1_20_59);

_2_1_20.children.push(_2_1_20_6);

_2_1_20.children.push(_2_1_20_60);

_2_1_20.fanout = "null";

var _2_1_2 = new OutputPort2InputPort();

_2_1_2.name = "OutputPort2InputPort";

_2_1_2.dst = _2_1_5_6;

_2_1_2.src = _2_1_1_3;

var _2_1_17 = new UserIOBase2UserIOBase();

_2_1_17.name = "UserIOBase2UserIOBase";

_2_1_17.dst = _2_1_8_20;

_2_1_17.src = _2_1_4_60;

var _2_1_16_1284596102 = new OutputPort2UserOutput();

_2_1_16_1284596102.name = "OutputPort2UserOutput";

_2_1_16_1284596102.dst = _2_1_16_60;

_2_1_16_1284596102.src = _2_1_16_55_58;

var _2_1_16_9 = new OutputPort2InputPort();

_2_1_16_9.name = "OutputPort2InputPort";

_2_1_16_9.dst = _2_1_16_41_48;

_2_1_16_9.src = _2_1_16_50_54;

var _2_1_16_8 = new OutputPort2InputPort();

_2_1_16_8.name = "OutputPort2InputPort";

_2_1_16_8.dst = _2_1_16_55_57;

_2_1_16_8.src = _2_1_16_50_54;

var _2_1_16_7 = new OutputPort2InputPort();

_2_1_16_7.name = "OutputPort2InputPort";

_2_1_16_7.dst = _2_1_16_50_8;

_2_1_16_7.src = _2_1_16_55_58;

var _2_1_16_60 = new UserOutput();

_2_1_16_60.name = "!Q";

var _2_1_16_6 = new OutputPort2InputPort();

_2_1_16_6.name = "OutputPort2InputPort";

_2_1_16_6.dst = _2_1_16_55_56;

_2_1_16_6.src = _2_1_16_41_49;

var _2_1_16_59 = new UserOutput();

_2_1_16_59.name = "Q";

var _2_1_16_55_58 = new OutputPort();

_2_1_16_55_58.name = "OutputPort";

var _2_1_16_55_57 = new InputPort();

_2_1_16_55_57.name = "InputPort";

var _2_1_16_55_56 = new InputPort();

_2_1_16_55_56.name = "InputPort";

var _2_1_16_55 = new Nand();

_2_1_16_55.name = "Nand";

_2_1_16_55.children.push(_2_1_16_55_58);

_2_1_16_55.children.push(_2_1_16_55_56);

_2_1_16_55.children.push(_2_1_16_55_57);

var _2_1_16_50_8 = new InputPort();

_2_1_16_50_8.name = "InputPort";

var _2_1_16_50_54 = new OutputPort();

_2_1_16_50_54.name = "OutputPort";

var _2_1_16_50_51 = new InputPort();

_2_1_16_50_51.name = "InputPort";

var _2_1_16_50 = new Nand();

_2_1_16_50.name = "Nand";

_2_1_16_50.children.push(_2_1_16_50_8);

_2_1_16_50.children.push(_2_1_16_50_51);

_2_1_16_50.children.push(_2_1_16_50_54);

var _2_1_16_5 = new UserInput2InputPort();

_2_1_16_5.name = "UserInput2InputPort";

_2_1_16_5.dst = _2_1_16_41_47;

_2_1_16_5.src = _2_1_16_20;

var _2_1_16_41_49 = new OutputPort();

_2_1_16_41_49.name = "OutputPort";

var _2_1_16_41_48 = new InputPort();

_2_1_16_41_48.name = "InputPort";

var _2_1_16_41_47 = new InputPort();

_2_1_16_41_47.name = "InputPort";

var _2_1_16_41_46 = new InputPort();

_2_1_16_41_46.name = "InputPort";

var _2_1_16_41 = new Nand();

_2_1_16_41.name = "Nand";

_2_1_16_41.children.push(_2_1_16_41_49);

_2_1_16_41.children.push(_2_1_16_41_46);

_2_1_16_41.children.push(_2_1_16_41_47);

_2_1_16_41.children.push(_2_1_16_41_48);

var _2_1_16_32_40 = new OutputPort();

_2_1_16_32_40.name = "OutputPort";

var _2_1_16_32_39 = new InputPort();

_2_1_16_32_39.name = "InputPort";

var _2_1_16_32_38 = new InputPort();

_2_1_16_32_38.name = "InputPort";

var _2_1_16_32_33 = new InputPort();

_2_1_16_32_33.name = "InputPort";

var _2_1_16_32 = new Nand();

_2_1_16_32.name = "Nand";

_2_1_16_32.children.push(_2_1_16_32_40);

_2_1_16_32.children.push(_2_1_16_32_33);

_2_1_16_32.children.push(_2_1_16_32_38);

_2_1_16_32.children.push(_2_1_16_32_39);

var _2_1_16_3 = new UserInput2InputPort();

_2_1_16_3.name = "UserInput2InputPort";

_2_1_16_3.dst = _2_1_16_32_33;

_2_1_16_3.src = _2_1_16_19;

var _2_1_16_21 = new Clock();

_2_1_16_21.name = "Clk";

_2_1_16_21.Milliseconds = "0";

var _2_1_16_20 = new UserInput();

_2_1_16_20.name = "K";

var _2_1_16_2 = new OutputPort2InputPort();

_2_1_16_2.name = "OutputPort2InputPort";

_2_1_16_2.dst = _2_1_16_50_51;

_2_1_16_2.src = _2_1_16_32_40;

var _2_1_16_19 = new UserInput();

_2_1_16_19.name = "J";

var _2_1_16_15 = new UserIOBase2PortBase();

_2_1_16_15.name = "UserIOBase2PortBase";

_2_1_16_15.dst = _2_1_16_41_46;

_2_1_16_15.src = _2_1_16_21;

var _2_1_16_14 = new UserIOBase2PortBase();

_2_1_16_14.name = "UserIOBase2PortBase";

_2_1_16_14.dst = _2_1_16_32_39;

_2_1_16_14.src = _2_1_16_21;

var _2_1_16_11 = new OutputPort2InputPort();

_2_1_16_11.name = "OutputPort2InputPort";

_2_1_16_11.dst = _2_1_16_32_38;

_2_1_16_11.src = _2_1_16_55_58;

var _2_1_16_1 = new OutputPort2UserOutput();

_2_1_16_1.name = "OutputPort2UserOutput";

_2_1_16_1.dst = _2_1_16_59;

_2_1_16_1.src = _2_1_16_50_54;

var _2_1_16 = new LogicCircuit();

_2_1_16.name = "JKFF 12";

_2_1_16.children.push(_2_1_16_1284596102);

_2_1_16.children.push(_2_1_16_7);

_2_1_16.children.push(_2_1_16_8);

_2_1_16.children.push(_2_1_16_9);

_2_1_16.children.push(_2_1_16_1);

_2_1_16.children.push(_2_1_16_11);

_2_1_16.children.push(_2_1_16_14);

_2_1_16.children.push(_2_1_16_15);

_2_1_16.children.push(_2_1_16_19);

_2_1_16.children.push(_2_1_16_2);

_2_1_16.children.push(_2_1_16_20);

_2_1_16.children.push(_2_1_16_21);

_2_1_16.children.push(_2_1_16_3);

_2_1_16.children.push(_2_1_16_32);

_2_1_16.children.push(_2_1_16_41);

_2_1_16.children.push(_2_1_16_5);

_2_1_16.children.push(_2_1_16_50);

_2_1_16.children.push(_2_1_16_55);

_2_1_16.children.push(_2_1_16_59);

_2_1_16.children.push(_2_1_16_6);

_2_1_16.children.push(_2_1_16_60);

_2_1_16.fanout = "null";

var _2_1_15 = new UserIOBase2UserIOBase();

_2_1_15.name = "UserIOBase2UserIOBase";

_2_1_15.dst = _2_1_20_20;

_2_1_15.src = _2_1_4_59;

var _2_1_14 = new PortBase2UserIOBase();

_2_1_14.name = "PortBase2UserIOBase";

_2_1_14.dst = _2_1_16_19;

_2_1_14.src = _2_1_1_3;

var _2_1_13 = new PortBase2UserIOBase();

_2_1_13.name = "PortBase2UserIOBase";

_2_1_13.dst = _2_1_4_20;

_2_1_13.src = _2_1_5_8;

var _2_1_12_1284596102 = new OutputPort2UserOutput();

_2_1_12_1284596102.name = "OutputPort2UserOutput";

_2_1_12_1284596102.dst = _2_1_12_60;

_2_1_12_1284596102.src = _2_1_12_55_58;

var _2_1_12_9 = new OutputPort2InputPort();

_2_1_12_9.name = "OutputPort2InputPort";

_2_1_12_9.dst = _2_1_12_41_48;

_2_1_12_9.src = _2_1_12_50_54;

var _2_1_12_8 = new OutputPort2InputPort();

_2_1_12_8.name = "OutputPort2InputPort";

_2_1_12_8.dst = _2_1_12_55_57;

_2_1_12_8.src = _2_1_12_50_54;

var _2_1_12_7 = new OutputPort2InputPort();

_2_1_12_7.name = "OutputPort2InputPort";

_2_1_12_7.dst = _2_1_12_50_8;

_2_1_12_7.src = _2_1_12_55_58;

var _2_1_12_60 = new UserOutput();

_2_1_12_60.name = "!Q";

var _2_1_12_6 = new OutputPort2InputPort();

_2_1_12_6.name = "OutputPort2InputPort";

_2_1_12_6.dst = _2_1_12_55_56;

_2_1_12_6.src = _2_1_12_41_49;

var _2_1_12_59 = new UserOutput();

_2_1_12_59.name = "Q";

var _2_1_12_55_58 = new OutputPort();

_2_1_12_55_58.name = "OutputPort";

var _2_1_12_55_57 = new InputPort();

_2_1_12_55_57.name = "InputPort";

var _2_1_12_55_56 = new InputPort();

_2_1_12_55_56.name = "InputPort";

var _2_1_12_55 = new Nand();

_2_1_12_55.name = "Nand";

_2_1_12_55.children.push(_2_1_12_55_58);

_2_1_12_55.children.push(_2_1_12_55_56);

_2_1_12_55.children.push(_2_1_12_55_57);

var _2_1_12_50_8 = new InputPort();

_2_1_12_50_8.name = "InputPort";

var _2_1_12_50_54 = new OutputPort();

_2_1_12_50_54.name = "OutputPort";

var _2_1_12_50_51 = new InputPort();

_2_1_12_50_51.name = "InputPort";

var _2_1_12_50 = new Nand();

_2_1_12_50.name = "Nand";

_2_1_12_50.children.push(_2_1_12_50_8);

_2_1_12_50.children.push(_2_1_12_50_51);

_2_1_12_50.children.push(_2_1_12_50_54);

var _2_1_12_5 = new UserInput2InputPort();

_2_1_12_5.name = "UserInput2InputPort";

_2_1_12_5.dst = _2_1_12_41_47;

_2_1_12_5.src = _2_1_12_20;

var _2_1_12_41_49 = new OutputPort();

_2_1_12_41_49.name = "OutputPort";

var _2_1_12_41_48 = new InputPort();

_2_1_12_41_48.name = "InputPort";

var _2_1_12_41_47 = new InputPort();

_2_1_12_41_47.name = "InputPort";

var _2_1_12_41_46 = new InputPort();

_2_1_12_41_46.name = "InputPort";

var _2_1_12_41 = new Nand();

_2_1_12_41.name = "Nand";

_2_1_12_41.children.push(_2_1_12_41_49);

_2_1_12_41.children.push(_2_1_12_41_46);

_2_1_12_41.children.push(_2_1_12_41_47);

_2_1_12_41.children.push(_2_1_12_41_48);

var _2_1_12_32_40 = new OutputPort();

_2_1_12_32_40.name = "OutputPort";

var _2_1_12_32_39 = new InputPort();

_2_1_12_32_39.name = "InputPort";

var _2_1_12_32_38 = new InputPort();

_2_1_12_32_38.name = "InputPort";

var _2_1_12_32_33 = new InputPort();

_2_1_12_32_33.name = "InputPort";

var _2_1_12_32 = new Nand();

_2_1_12_32.name = "Nand";

_2_1_12_32.children.push(_2_1_12_32_40);

_2_1_12_32.children.push(_2_1_12_32_33);

_2_1_12_32.children.push(_2_1_12_32_38);

_2_1_12_32.children.push(_2_1_12_32_39);

var _2_1_12_3 = new UserInput2InputPort();

_2_1_12_3.name = "UserInput2InputPort";

_2_1_12_3.dst = _2_1_12_32_33;

_2_1_12_3.src = _2_1_12_19;

var _2_1_12_21 = new Clock();

_2_1_12_21.name = "Clk";

_2_1_12_21.Milliseconds = "0";

var _2_1_12_20 = new UserInput();

_2_1_12_20.name = "K";

var _2_1_12_2 = new OutputPort2InputPort();

_2_1_12_2.name = "OutputPort2InputPort";

_2_1_12_2.dst = _2_1_12_50_51;

_2_1_12_2.src = _2_1_12_32_40;

var _2_1_12_19 = new UserInput();

_2_1_12_19.name = "J";

var _2_1_12_15 = new UserIOBase2PortBase();

_2_1_12_15.name = "UserIOBase2PortBase";

_2_1_12_15.dst = _2_1_12_41_46;

_2_1_12_15.src = _2_1_12_21;

var _2_1_12_14 = new UserIOBase2PortBase();

_2_1_12_14.name = "UserIOBase2PortBase";

_2_1_12_14.dst = _2_1_12_32_39;

_2_1_12_14.src = _2_1_12_21;

var _2_1_12_11 = new OutputPort2InputPort();

_2_1_12_11.name = "OutputPort2InputPort";

_2_1_12_11.dst = _2_1_12_32_38;

_2_1_12_11.src = _2_1_12_55_58;

var _2_1_12_1 = new OutputPort2UserOutput();

_2_1_12_1.name = "OutputPort2UserOutput";

_2_1_12_1.dst = _2_1_12_59;

_2_1_12_1.src = _2_1_12_50_54;

var _2_1_12 = new LogicCircuit();

_2_1_12.name = "JKFFNew";

_2_1_12.children.push(_2_1_12_1284596102);

_2_1_12.children.push(_2_1_12_7);

_2_1_12.children.push(_2_1_12_8);

_2_1_12.children.push(_2_1_12_9);

_2_1_12.children.push(_2_1_12_1);

_2_1_12.children.push(_2_1_12_11);

_2_1_12.children.push(_2_1_12_14);

_2_1_12.children.push(_2_1_12_15);

_2_1_12.children.push(_2_1_12_19);

_2_1_12.children.push(_2_1_12_2);

_2_1_12.children.push(_2_1_12_20);

_2_1_12.children.push(_2_1_12_21);

_2_1_12.children.push(_2_1_12_3);

_2_1_12.children.push(_2_1_12_32);

_2_1_12.children.push(_2_1_12_41);

_2_1_12.children.push(_2_1_12_5);

_2_1_12.children.push(_2_1_12_50);

_2_1_12.children.push(_2_1_12_55);

_2_1_12.children.push(_2_1_12_59);

_2_1_12.children.push(_2_1_12_6);

_2_1_12.children.push(_2_1_12_60);

_2_1_12.fanout = "null";

var _2_1_11 = new PortBase2UserIOBase();

_2_1_11.name = "PortBase2UserIOBase";

_2_1_11.dst = _2_1_10_19;

_2_1_11.src = _2_1_3_5;

var _2_1_10_1284596102 = new OutputPort2UserOutput();

_2_1_10_1284596102.name = "OutputPort2UserOutput";

_2_1_10_1284596102.dst = _2_1_10_60;

_2_1_10_1284596102.src = _2_1_10_55_58;

var _2_1_10_9 = new OutputPort2InputPort();

_2_1_10_9.name = "OutputPort2InputPort";

_2_1_10_9.dst = _2_1_10_41_48;

_2_1_10_9.src = _2_1_10_50_54;

var _2_1_10_8 = new OutputPort2InputPort();

_2_1_10_8.name = "OutputPort2InputPort";

_2_1_10_8.dst = _2_1_10_55_57;

_2_1_10_8.src = _2_1_10_50_54;

var _2_1_10_7 = new OutputPort2InputPort();

_2_1_10_7.name = "OutputPort2InputPort";

_2_1_10_7.dst = _2_1_10_50_8;

_2_1_10_7.src = _2_1_10_55_58;

var _2_1_10_60 = new UserOutput();

_2_1_10_60.name = "!Q";

var _2_1_10_6 = new OutputPort2InputPort();

_2_1_10_6.name = "OutputPort2InputPort";

_2_1_10_6.dst = _2_1_10_55_56;

_2_1_10_6.src = _2_1_10_41_49;

var _2_1_10_59 = new UserOutput();

_2_1_10_59.name = "Q";

var _2_1_10_55_58 = new OutputPort();

_2_1_10_55_58.name = "OutputPort";

var _2_1_10_55_57 = new InputPort();

_2_1_10_55_57.name = "InputPort";

var _2_1_10_55_56 = new InputPort();

_2_1_10_55_56.name = "InputPort";

var _2_1_10_55 = new Nand();

_2_1_10_55.name = "Nand";

_2_1_10_55.children.push(_2_1_10_55_58);

_2_1_10_55.children.push(_2_1_10_55_56);

_2_1_10_55.children.push(_2_1_10_55_57);

var _2_1_10_50_8 = new InputPort();

_2_1_10_50_8.name = "InputPort";

var _2_1_10_50_54 = new OutputPort();

_2_1_10_50_54.name = "OutputPort";

var _2_1_10_50_51 = new InputPort();

_2_1_10_50_51.name = "InputPort";

var _2_1_10_50 = new Nand();

_2_1_10_50.name = "Nand";

_2_1_10_50.children.push(_2_1_10_50_8);

_2_1_10_50.children.push(_2_1_10_50_51);

_2_1_10_50.children.push(_2_1_10_50_54);

var _2_1_10_5 = new UserInput2InputPort();

_2_1_10_5.name = "UserInput2InputPort";

_2_1_10_5.dst = _2_1_10_41_47;

_2_1_10_5.src = _2_1_10_20;

var _2_1_10_41_49 = new OutputPort();

_2_1_10_41_49.name = "OutputPort";

var _2_1_10_41_48 = new InputPort();

_2_1_10_41_48.name = "InputPort";

var _2_1_10_41_47 = new InputPort();

_2_1_10_41_47.name = "InputPort";

var _2_1_10_41_46 = new InputPort();

_2_1_10_41_46.name = "InputPort";

var _2_1_10_41 = new Nand();

_2_1_10_41.name = "Nand";

_2_1_10_41.children.push(_2_1_10_41_49);

_2_1_10_41.children.push(_2_1_10_41_46);

_2_1_10_41.children.push(_2_1_10_41_47);

_2_1_10_41.children.push(_2_1_10_41_48);

var _2_1_10_32_40 = new OutputPort();

_2_1_10_32_40.name = "OutputPort";

var _2_1_10_32_39 = new InputPort();

_2_1_10_32_39.name = "InputPort";

var _2_1_10_32_38 = new InputPort();

_2_1_10_32_38.name = "InputPort";

var _2_1_10_32_33 = new InputPort();

_2_1_10_32_33.name = "InputPort";

var _2_1_10_32 = new Nand();

_2_1_10_32.name = "Nand";

_2_1_10_32.children.push(_2_1_10_32_40);

_2_1_10_32.children.push(_2_1_10_32_33);

_2_1_10_32.children.push(_2_1_10_32_38);

_2_1_10_32.children.push(_2_1_10_32_39);

var _2_1_10_3 = new UserInput2InputPort();

_2_1_10_3.name = "UserInput2InputPort";

_2_1_10_3.dst = _2_1_10_32_33;

_2_1_10_3.src = _2_1_10_19;

var _2_1_10_21 = new Clock();

_2_1_10_21.name = "Clk";

_2_1_10_21.Milliseconds = "0";

var _2_1_10_20 = new UserInput();

_2_1_10_20.name = "K";

var _2_1_10_2 = new OutputPort2InputPort();

_2_1_10_2.name = "OutputPort2InputPort";

_2_1_10_2.dst = _2_1_10_50_51;

_2_1_10_2.src = _2_1_10_32_40;

var _2_1_10_19 = new UserInput();

_2_1_10_19.name = "J";

var _2_1_10_15 = new UserIOBase2PortBase();

_2_1_10_15.name = "UserIOBase2PortBase";

_2_1_10_15.dst = _2_1_10_41_46;

_2_1_10_15.src = _2_1_10_21;

var _2_1_10_14 = new UserIOBase2PortBase();

_2_1_10_14.name = "UserIOBase2PortBase";

_2_1_10_14.dst = _2_1_10_32_39;

_2_1_10_14.src = _2_1_10_21;

var _2_1_10_11 = new OutputPort2InputPort();

_2_1_10_11.name = "OutputPort2InputPort";

_2_1_10_11.dst = _2_1_10_32_38;

_2_1_10_11.src = _2_1_10_55_58;

var _2_1_10_1 = new OutputPort2UserOutput();

_2_1_10_1.name = "OutputPort2UserOutput";

_2_1_10_1.dst = _2_1_10_59;

_2_1_10_1.src = _2_1_10_50_54;

var _2_1_10 = new LogicCircuit();

_2_1_10.name = "JKFFNew";

_2_1_10.children.push(_2_1_10_1284596102);

_2_1_10.children.push(_2_1_10_7);

_2_1_10.children.push(_2_1_10_8);

_2_1_10.children.push(_2_1_10_9);

_2_1_10.children.push(_2_1_10_1);

_2_1_10.children.push(_2_1_10_11);

_2_1_10.children.push(_2_1_10_14);

_2_1_10.children.push(_2_1_10_15);

_2_1_10.children.push(_2_1_10_19);

_2_1_10.children.push(_2_1_10_2);

_2_1_10.children.push(_2_1_10_20);

_2_1_10.children.push(_2_1_10_21);

_2_1_10.children.push(_2_1_10_3);

_2_1_10.children.push(_2_1_10_32);

_2_1_10.children.push(_2_1_10_41);

_2_1_10.children.push(_2_1_10_5);

_2_1_10.children.push(_2_1_10_50);

_2_1_10.children.push(_2_1_10_55);

_2_1_10.children.push(_2_1_10_59);

_2_1_10.children.push(_2_1_10_6);

_2_1_10.children.push(_2_1_10_60);

_2_1_10.fanout = "null";

var _2_1_1_4 = new InputPort();

_2_1_1_4.name = "InputPort";

var _2_1_1_3 = new OutputPort();

_2_1_1_3.name = "OutputPort";

var _2_1_1_2 = new InputPort();

_2_1_1_2.name = "InputPort";

var _2_1_1 = new And();

_2_1_1.name = "And";

_2_1_1.children.push(_2_1_1_2);

_2_1_1.children.push(_2_1_1_3);

_2_1_1.children.push(_2_1_1_4);

var _2_1 = new LogicCircuit();

_2_1.name = "mydiag";

_2_1.children.push(_2_1_16);

_2_1.children.push(_2_1_20);

_2_1.children.push(_2_1_4);

_2_1.children.push(_2_1_1);

_2_1.children.push(_2_1_11);

_2_1.children.push(_2_1_13);

_2_1.children.push(_2_1_14);

_2_1.children.push(_2_1_8);

_2_1.children.push(_2_1_15);

_2_1.children.push(_2_1_17);

_2_1.children.push(_2_1_2);

_2_1.children.push(_2_1_3);

_2_1.children.push(_2_1_5);

_2_1.children.push(_2_1_6);

_2_1.children.push(_2_1_7);

_2_1.children.push(_2_1_9);

_2_1.children.push(_2_1_10);

_2_1.children.push(_2_1_12);

_2_1.fanout = "null";

var _2 = new LogicGatesDiagrams();

_2.name = "Example Diagrams";

_2.children.push(_2_4);

_2.children.push(_2_5);

_2.children.push(_2_6);

_2.children.push(_2_1);

_2.children.push(_2_2);

_2.children.push(_2_65);

_2.children.push(_2_3);

var _149_9 = new UserInputBase();

_149_9.name = "UserInputBase";

var _149_8 = new LogicGateBase();

_149_8.name = "LogicGateBase";

var _149_7 = new NumericOutput();

_149_7.name = "NumericOutput";

_149_7.Value = "0000";

_149_7.SelRep = "2";

_149_7.Bits = "4";

var _149_63 = new UserInputBase2UserOutput();

_149_63.name = "UserInputBase2UserOutput";

_149_63.dst = "null";

_149_63.src = "null";

var _149_60 = new OutputPort2UserOutput();

_149_60.name = "OutputPort2UserOutput";

_149_60.dst = "null";

_149_60.src = "null";

var _149_57 = new UserInput2InputPort();

_149_57.name = "UserInput2InputPort";

_149_57.dst = "null";

_149_57.src = "null";

var _149_54 = new OutputPort2InputPort();

_149_54.name = "OutputPort2InputPort";

_149_54.dst = "null";

_149_54.src = "null";

var _149_53 = new OutputPort();

_149_53.name = "OutputPort";

var _149_50 = new InputPort();

_149_50.name = "InputPort";

var _149_5 = new LogicCircuit();

_149_5.name = "LogicCircuit";

_149_5.fanout = "null";

var _149_49 = new Nor();

_149_49.name = "Nor";

var _149_48 = new Xor();

_149_48.name = "Xor";

var _149_47 = new Xnor();

_149_47.name = "Xnor";

var _149_44 = new Nand();

_149_44.name = "Nand";

var _149_41 = new Or();

_149_41.name = "Or";

var _149_38 = new And();

_149_38.name = "And";

var _149_31 = new UserIOBase2UserIOBase();

_149_31.name = "UserIOBase2UserIOBase";

_149_31.dst = "null";

_149_31.src = "null";

var _149_3 = new NumericInput();

_149_3.name = "NumericInput";

_149_3.Value = "0000";

_149_3.SelRep = "2";

_149_3.Bits = "4";

var _149_28 = new Buffer();

_149_28.name = "Buffer";

var _149_25 = new Not();

_149_25.name = "Not";

var _149_24 = new ComplexLogicGate();

_149_24.name = "ComplexLogicGate";

var _149_23 = new UserIOBase2PortBase();

_149_23.name = "UserIOBase2PortBase";

_149_23.dst = "null";

_149_23.src = "null";

var _149_21 = new SimpleLogicGate();

_149_21.name = "SimpleLogicGate";

var _149_20 = new UserIOBase();

_149_20.name = "UserIOBase";

var _149_2 = new LogicGatesDiagrams();

_149_2.name = "LogicGatesDiagrams";

var _149_19 = new Clock();

_149_19.name = "Clock";

_149_19.Milliseconds = "0";

var _149_17 = new NumericIOBase();

_149_17.name = "NumericIOBase";

_149_17.Value = "0000";

_149_17.SelRep = "2";

_149_17.Bits = "4";

var _149_16 = new PortBase2UserIOBase();

_149_16.name = "PortBase2UserIOBase";

_149_16.dst = "null";

_149_16.src = "null";

var _149_15 = new UserInput();

_149_15.name = "UserInput";

var _149_14 = new PortConnection();

_149_14.name = "PortConnection";

var _149_13 = new UserOutput();

_149_13.name = "UserOutput";

var _149_11 = new PortBase();

_149_11.name = "PortBase";

var _149 = new LogicGatesMetaLanguage();

_149.name = "LogicGatesMetaLanguage";

_149.children.push(_149_49);

_149.children.push(_149_9);

_149.children.push(_149_15);

_149.children.push(_149_11);

_149.children.push(_149_14);

_149.children.push(_149_16);

_149.children.push(_149_19);

_149.children.push(_149_17);

_149.children.push(_149_2);

_149.children.push(_149_20);

_149.children.push(_149_13);

_149.children.push(_149_23);

_149.children.push(_149_3);

_149.children.push(_149_31);

_149.children.push(_149_5);

_149.children.push(_149_50);

_149.children.push(_149_53);

_149.children.push(_149_54);

_149.children.push(_149_57);

_149.children.push(_149_60);

_149.children.push(_149_63);

_149.children.push(_149_7);

_149.children.push(_149_8);

_149.children.push(_149_21);

_149.children.push(_149_25);

_149.children.push(_149_28);

_149.children.push(_149_24);

_149.children.push(_149_38);

_149.children.push(_149_41);

_149.children.push(_149_44);

_149.children.push(_149_47);

_149.children.push(_149_48);



var OclEngine = require('ocl-js').default;
var myEngine;

myEngine = new OclEngine();

myEngine.addOclExpression('context And inv: self.children->select(c|c.name="InputPort")->size() = 2');

//myEngine.addOclExpression('context And inv: self.children->select(c|c.name="OutputPort")->size() = 1');

//myEngine.addOclExpression('context And inv: self.children->size()=3');

var result = myEngine.evaluate(_2_5_21);

console.log(result);
