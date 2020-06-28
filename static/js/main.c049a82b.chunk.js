(this["webpackJsonp5e-dungeon-generator"]=this["webpackJsonp5e-dungeon-generator"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(3),r=a.n(i),c=(a(13),a(14),a(4)),o=a(5),l=a(1),d=a(7),p=a(6);function u(e){return Math.floor(Math.random()*Math.floor(e))+1}function h(){u(10);var e={type:5,exits:0,description:"No stairs yet!"};return e}function f(){var e={type:4,exits:0};switch(u(10)){case 1:case 2:e.description="Square, 20 x 20 ft";break;case 3:case 4:e.description="Square, 30 x 30 ft";break;case 5:case 6:e.description="Square, 40 x 40 ft";break;case 7:case 8:case 9:e.description="Rectangle, 20 x 30 ft";break;case 10:case 11:case 12:e.description="Rectangle, 30 x 40 ft";break;case 13:case 14:e.description="Rectangle, 40 x 50 ft";break;case 15:e.description="Rectangle, 50 x 80 ft";break;case 16:e.description="Circle, 30ft diameter";break;case 17:e.description="Circle, 50ft diameter";break;case 18:e.description="Octagon, 40 x 40ft diameter";break;case 19:e.description="Octagon, 60 x 60ft diameter";break;default:e.description="Trapezoid, roughly 40 x 60ft"}return e}function k(){var e={type:2,exits:[]};switch(u(20)){case 1:case 2:e.description="Continue straight 30ft, no doors or side passages";break;case 3:e.description="Continue straight 20ft./ door to the right, then an additional 10ft. ahead",e.exits=[x(),k()];break;case 4:e.description="Continue straight 20ft./ door to the left, then an additional 10 ft. ahead",e.exits=[x(),k()];break;case 5:e.description="Continue straight 20ft; passage ends in a door",e.exits=[x()];break;case 6:case 7:e.description="Continue straight 20ft; side passage to the right, then an additional 10 ft ahead",e.exits=[k(),k()];break;case 8:case 9:e.description="Continue straight 20ft; side passage to the left, then an additional 10 ft ahead",e.exits=[k(),k()];break;case 10:e.description="Continue straight 20ft; comes to a dead end; 10 % chance of a secret door",e.exits=[x(),k()];break;case 11:case 12:e.description="Continue straight 20ft; then the passage turns left and continues 10 ft",e.exits=[k()];break;case 13:case 14:e.description="Continue straight 20ft; then the passage turns right anc continues 10ft",e.exits=[k()];break;case 15:case 16:case 17:case 18:case 19:e.description="Chamber",e.exits=[f()];break;default:e.description="Stairs",e.exits=[h()]}return e}function x(){var e={type:3,exits:[],locked:!1,trapped:!1};switch(u(20)){case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:e.description="Wooden",e.exits=[g()],e.trapped=0===e.exits.length;break;case 11:case 12:e.description="Wooden, barred or locked",e.exits=[g()],e.locked=!0,e.trapped=0===e.exits.length;break;case 13:e.description="Stone",e.exits=[g()],e.trapped=0===e.exits.length;break;case 14:e.description="Stone, barred or locked",e.exits=[g()],e.locked=!0,e.trapped=0===e.exits.length;break;case 15:e.description="Iron",e.exits=[g()],e.trapped=0===e.exits.length;break;case 16:e.description="Iron, barred or locked",e.exits=[g()],e.locked=!0,e.trapped=0===e.exits.length;break;case 17:e.description="Portcullis",e.exits=[g()],e.trapped=0===e.exits.length;break;case 18:e.description="Portcullis, barred or locked",e.exits=[g()],e.locked=!0,e.trapped=0===e.exits.length;break;case 19:e.description="Secret door",e.exits=[g()],e.trapped=0===e.exits.length;break;default:e.description="Secret door, barred or locked",e.exits=[g()],e.locked=!0,e.trapped=0===e.exits.length}return e}function g(){switch(u(20)){case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:return k();case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:return f();case 19:return h();default:return}}a(15);var b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={sections:[]},s.handleClick=s.handleClick.bind(Object(l.a)(s)),s.back=s.back.bind(Object(l.a)(s)),s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.sections;e.push(function(){var e={type:1,exits:0};switch(u(10)){case 1:e.description="Square, 20 x 20 ft; passage on each wall",e.exits=[k(),k(),k()];break;case 2:e.description="Square, 20 x 20 ft; door on two walls, passage on third wall",e.exits=[x(),x(),k()];break;case 3:e.description="Square, 40 x 40 ft; door on three walls",e.exits=[x(),x(),x()];break;case 4:e.description="Rectangle, 80 x 20 ft; passage on each wall",e.exits=[x(),x(),x()];break;case 5:e.description="Rectangle, 20 x 40 ft; passage on each wall",e.exits=[k(),k(),k()];break;case 6:e.description="Circle, 40 ft diameter; one passage at each cardinal direction",e.exits=[k(),k(),k()];break;case 7:e.description="Circle, 40 ft diameter; one passage at each cardinal direction; well in middle of room (might lead down to lower level)",e.exits=[k(),k(),k(),h()];break;case 8:e.description="Square 20 x 20 ft; door on two walls, passage on third wall, secret door on fourth wall",e.exits=[x(),x(),k(),x()];break;case 9:e.description="Passage, 10 ft wide; T intersection",e.exits=[k(),k()];break;default:e.description="Passage, 10ft wide; four-way intersection",e.exits=[k(),k(),k(),k()]}return e}()),this.setState({sections:e})}},{key:"handleClick",value:function(e){var t=e.target.value,a=this.state.sections,s=a[a.length-1].exits[t];a.push(s),this.setState(a)}},{key:"back",value:function(){var e=this.state.sections;e.pop(),this.setState(e)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"dungeon"},n.a.createElement("span",{role:"img","aria-label":"skull"},"\ud83d\udc80"),n.a.createElement("p",null,"Refresh for a new dungeon"),n.a.createElement("hr",null),this.state.sections.map((function(t){return n.a.createElement("div",null,n.a.createElement("em",null,t.description),n.a.createElement("p",null,"Exits:"),n.a.createElement("ul",null,1!==t.type?n.a.createElement("li",null,t===e.state.sections[e.state.sections.length-1]?n.a.createElement("button",{onClick:e.back},"Back"):n.a.createElement("em",null,"Back")):"",t.exits.length>0?t.exits.map((function(a,s){return n.a.createElement("li",null,!0!==a.locked&&a.exits.length>0&&t===e.state.sections[e.state.sections.length-1]?n.a.createElement("button",{value:s,onClick:e.handleClick},a.description):n.a.createElement("em",null,a.description))})):""),n.a.createElement("hr",null))})))}}]),a}(n.a.Component);var m=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,"Zanzer's Dungeon"),n.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c049a82b.chunk.js.map