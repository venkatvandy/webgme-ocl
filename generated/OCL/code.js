        function FCO() {

                this.children=[];


                this.name = null;

        }

        function Language() {

                this.children=[];


                this.name = null;

        }

        function UMLStateDiagram() {

                this.children=[];


                this.name = null;

        }

        function End() {

                this.children=[];


                this.name = null;

        }

        function Initial() {

                this.children=[];


                this.name = null;

        }

        function State() {

                this.children=[];


                this.name = null;

        }

        function Transition() {

                this.children=[];


                this.name = null;

                this.event = null;

                this.src = null;

                this.dst = null;

        }

        function StateBase() {

                this.children=[];


                this.name = null;

        }

        function Documentation() {

                this.children=[];


                this.name = null;

                this.documentation = null;

        }

        var _t = new Documentation();
        _t.type ="Documentation";

                                        _t.name = "FiniteStateMachine";

                                        _t.documentation = "### Finite State Machine\n\nThis project contains a meta-model for building  Finite-state machines [(shift + click)](https://en.wikipedia.org/wiki/Finite-state_machine).\n\nThe plugin `FSMCodeGenerator` generates simulation code in various languages:\n\n- C#\n- Python\n- C++\n- JavaScript\n- Ruby\n- Java";

        var _m_z = new End();
        _m_z.type ="End";

                                        _m_z.name = "End";

        var _m_x = new End();
        _m_x.type ="End";

                                        _m_x.name = "End";

        var _m_q = new Transition();
        _m_q.type ="Transition";

                                        _m_q.name = "Transition";

                                        _m_q.event = "test succeeds";

                                _m_q.src = _m_L;

                                _m_q.dst = _m_4;

        var _m_n = new Transition();
        _m_n.type ="Transition";

                                        _m_n.name = "Transition";

                                        _m_n.event = "test fails";

                                _m_n.src = _m_L;

                                _m_n.dst = _m_l;

        var _m_m = new Transition();
        _m_m.type ="Transition";

                                        _m_m.name = "Transition";

                                        _m_m.event = "npm install fails";

                                _m_m.src = _m_B;

                                _m_m.dst = _m_l;

        var _m_l = new State();
        _m_l.type ="State";

                                        _m_l.name = "Faliure";

        var _m_L = new State();
        _m_L.type ="State";

                                        _m_L.name = "instFinished";

        var _m_G = new Transition();
        _m_G.type ="Transition";

                                        _m_G.name = "Transition";

                                        _m_G.event = "revert back";

                                _m_G.src = _m_l;

                                _m_G.dst = _m_z;

        var _m_E = new Transition();
        _m_E.type ="Transition";

                                        _m_E.name = "Transition";

                                        _m_E.event = "notify users";

                                _m_E.src = _m_4;

                                _m_E.dst = _m_x;

        var _m_B = new Initial();
        _m_B.type ="Initial";

                                        _m_B.name = "Initial";

        var _m_5 = new Transition();
        _m_5.type ="Transition";

                                        _m_5.name = "Transition";

                                        _m_5.event = "npm install";

                                _m_5.src = _m_B;

                                _m_5.dst = _m_L;

        var _m_4 = new State();
        _m_4.type ="State";

                                        _m_4.name = "Tested";

        var _m = new UMLStateDiagram();
        _m.type ="UMLStateDiagram";

                                        _m.name = "deployment";

                                        _m.children.push(_m_4);

                                        _m.children.push(_m_5);

                                        _m.children.push(_m_z);

                                        _m.children.push(_m_G);

                                        _m.children.push(_m_x);

                                        _m.children.push(_m_B);

                                        _m.children.push(_m_L);

                                        _m.children.push(_m_E);

                                        _m.children.push(_m_l);

                                        _m.children.push(_m_m);

                                        _m.children.push(_m_q);

                                        _m.children.push(_m_n);

        var _903349001_622990788 = new Transition();
        _903349001_622990788.type ="Transition";

                                        _903349001_622990788.name = "Transition";

                                        _903349001_622990788.event = "01";

                                _903349001_622990788.src = _903349001_2090816916;

                                _903349001_622990788.dst = _903349001_524989402;

        var _903349001_524989402 = new State();
        _903349001_524989402.type ="State";

                                        _903349001_524989402.name = "State1";

        var _903349001_484262466 = new End();
        _903349001_484262466.type ="End";

                                        _903349001_484262466.name = "End";

        var _903349001_2090816916 = new Initial();
        _903349001_2090816916.type ="Initial";

                                        _903349001_2090816916.name = "Initial";

        var _903349001 = new UMLStateDiagram();
        _903349001.type ="UMLStateDiagram";

                                        _903349001.name = "MinimalMachine";

                                        _903349001.children.push(_903349001_484262466);

                                        _903349001.children.push(_903349001_524989402);

                                        _903349001.children.push(_903349001_622990788);

                                        _903349001.children.push(_903349001_2090816916);

        var _615025579_i = new Documentation();
        _615025579_i.type ="Documentation";

                                        _615025579_i.name = "Documentation";

                                        _615025579_i.documentation = "";

        var _615025579_909339777 = new StateBase();
        _615025579_909339777.type ="StateBase";

                                        _615025579_909339777.name = "StateBase";

        var _615025579_318746662 = new Transition();
        _615025579_318746662.type ="Transition";

                                        _615025579_318746662.name = "Transition";

                                        _615025579_318746662.event = "switch";

                                        _615025579_318746662.src = "null";

                                        _615025579_318746662.dst = "null";

        var _615025579_1416392928 = new State();
        _615025579_1416392928.type ="State";

                                        _615025579_1416392928.name = "State";

        var _615025579_1242097160 = new Initial();
        _615025579_1242097160.type ="Initial";

                                        _615025579_1242097160.name = "Initial";

        var _615025579_1178174363 = new End();
        _615025579_1178174363.type ="End";

                                        _615025579_1178174363.name = "End";

        var _615025579_1077978197 = new UMLStateDiagram();
        _615025579_1077978197.type ="UMLStateDiagram";

                                        _615025579_1077978197.name = "UMLStateDiagram";

        var _615025579 = new Language();
        _615025579.type ="Language";

                                        _615025579.name = "Language";

                                        _615025579.children.push(_615025579_318746662);

                                        _615025579.children.push(_615025579_909339777);

                                        _615025579.children.push(_615025579_1077978197);

                                        _615025579.children.push(_615025579_1178174363);

                                        _615025579.children.push(_615025579_1242097160);

                                        _615025579.children.push(_615025579_1416392928);

                                        _615025579.children.push(_615025579_i);

        var _1319592604_785608684 = new Transition();
        _1319592604_785608684.type ="Transition";

                                        _1319592604_785608684.name = "Transition";

                                        _1319592604_785608684.event = "24";

                                _1319592604_785608684.src = _1319592604_1784105995;

                                _1319592604_785608684.dst = _1319592604_1364444264;

        var _1319592604_622990788 = new Transition();
        _1319592604_622990788.type ="Transition";

                                        _1319592604_622990788.name = "Transition";

                                        _1319592604_622990788.event = "01";

                                _1319592604_622990788.src = _1319592604_2090816916;

                                _1319592604_622990788.dst = _1319592604_524989402;

        var _1319592604_524989402_w = new Documentation();
        _1319592604_524989402_w.type ="Documentation";

                                        _1319592604_524989402_w.name = "Documentation";

                                        _1319592604_524989402_w.documentation = "";

        var _1319592604_524989402 = new State();
        _1319592604_524989402.type ="State";

                                        _1319592604_524989402.name = "State1";

                                        _1319592604_524989402.children.push(_1319592604_524989402_w);

        var _1319592604_484262466 = new End();
        _1319592604_484262466.type ="End";

                                        _1319592604_484262466.name = "End";

        var _1319592604_353482612 = new Transition();
        _1319592604_353482612.type ="Transition";

                                        _1319592604_353482612.name = "Transition";

                                        _1319592604_353482612.event = "13";

                                _1319592604_353482612.src = _1319592604_524989402;

                                _1319592604_353482612.dst = _1319592604_484262466;

        var _1319592604_2090816916 = new Initial();
        _1319592604_2090816916.type ="Initial";

                                        _1319592604_2090816916.name = "Initial";

        var _1319592604_1784105995 = new State();
        _1319592604_1784105995.type ="State";

                                        _1319592604_1784105995.name = "State2";

        var _1319592604_1364444264 = new End();
        _1319592604_1364444264.type ="End";

                                        _1319592604_1364444264.name = "End";

        var _1319592604_1238370714 = new Transition();
        _1319592604_1238370714.type ="Transition";

                                        _1319592604_1238370714.name = "Transition";

                                        _1319592604_1238370714.event = "12";

                                _1319592604_1238370714.src = _1319592604_524989402;

                                _1319592604_1238370714.dst = _1319592604_1784105995;

        var _1319592604 = new UMLStateDiagram();
        _1319592604.type ="UMLStateDiagram";

                                        _1319592604.name = "SimpleMachine";

                                        _1319592604.children.push(_1319592604_353482612);

                                        _1319592604.children.push(_1319592604_484262466);

                                        _1319592604.children.push(_1319592604_524989402);

                                        _1319592604.children.push(_1319592604_622990788);

                                        _1319592604.children.push(_1319592604_785608684);

                                        _1319592604.children.push(_1319592604_1238370714);

                                        _1319592604.children.push(_1319592604_1364444264);

                                        _1319592604.children.push(_1319592604_1784105995);

                                        _1319592604.children.push(_1319592604_2090816916);