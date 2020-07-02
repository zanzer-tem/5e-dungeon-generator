(this["webpackJsonp5e-dungeon-generator"]=this["webpackJsonp5e-dungeon-generator"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),c=t(3),n=t.n(c),o=(t(13),t(14),t(4)),i=t(5),l=t(1),d=t(7),u=t(6);function p(e){return Math.floor(Math.random()*Math.floor(e))+1}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;console.log("Generating door");var a=e>0&&e<=20?e:p(20),t={type:20,leadsTo:null,locked:!1,trapped:!1};switch(a){case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:t.description="Wooden door",t.leadsTo=f(),t.trapped=!t.leadsTo;break;case 11:case 12:t.description="Wooden, barred or locked door",t.leadsTo=f(),t.locked=!0,t.trapped=!t.leadsTo;break;case 13:t.description="Stone door",t.leadsTo=f(),t.trapped=!t.leadsTo;break;case 14:t.description="Stone, barred or locked door",t.leadsTo=f(),t.locked=!0,t.trapped=!t.leadsTo;break;case 15:t.description="Iron door",t.leadsTo=f(),t.trapped=!t.leadsTo;break;case 16:t.description="Iron, barred or locked door",t.leadsTo=f(),t.locked=!0,t.trapped=!t.leadsTo;break;case 17:t.description="Portcullis door",t.leadsTo=f(),t.trapped=!t.leadsTo;break;case 18:t.description="Portcullis, barred or locked door",t.leadsTo=f(),t.locked=!0,t.trapped=!t.leadsTo;break;case 19:t.description="Secret door",t.leadsTo=f(),t.trapped=!t.leadsTo;break;default:t.description="Secret door, barred or locked door",t.leadsTo=f(),t.locked=!0,t.trapped=!t.leadsTo}return t}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;console.log("Generating archway");var a={type:21,description:"An archway",locked:!1,trapped:!1,leadsTo:f(e)};return a.leadsTo||(a.description="An impassable archway",a.locked=!0),a}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;console.log("Generating well");var a={type:22,description:"A well",locked:!1,trapped:!1,leadsTo:f(e)};return a.leadsTo||(a.description="An impassable well",a.locked=!0),a}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=e>0&&e<=20?e:p(20);switch(a){case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:return x();case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:return v();case 19:return m();default:return}}var b=0;function m(){console.log("Generating stairs");p(10);var e={type:13,exits:[],description:"No stairs yet!"};return e}function x(){console.log("Generating passage");var e,a={type:11,exits:[]};switch(b+1>=150?2:p(20)){case 1:case 2:a.description="Continue straight 30ft, no doors or side passages";break;case 3:a.description="Continue straight 20ft./ door to the right, then an additional 10ft. ahead",a.exits=[h(),k()];break;case 4:a.description="Continue straight 20ft./ door to the left, then an additional 10 ft. ahead",a.exits=[h(),k()];break;case 5:a.description="Continue straight 20ft; passage ends in a door",a.exits=[h()];break;case 6:case 7:a.description="Continue straight 20ft; side passage to the right, then an additional 10 ft ahead",a.exits=[k(),k()];break;case 8:case 9:a.description="Continue straight 20ft; side passage to the left, then an additional 10 ft ahead",a.exits=[k(),k()];break;case 10:a.description="Continue straight 20ft; comes to a dead end; 10 % chance of a secret door",a.exits=[h()];break;case 11:case 12:a.description="Continue straight 20ft; then the passage turns left and continues 10 ft",a.exits=[k()];break;case 13:case 14:a.description="Continue straight 20ft; then the passage turns right anc continues 10ft",a.exits=[k()];break;case 15:case 16:case 17:case 18:case 19:a.description="Chamber",a.exits=[k(18)];break;default:a.description="Stairs",a.exits=[k(19)]}return e=a.exits.length,b+=e,a}function v(){console.log("Generating chamber");var e={type:12,exits:[]};switch(p(10)){case 1:case 2:e.description=E()+", Square, 20 x 20 ft",e.exits=y();break;case 3:case 4:e.description=E()+", Square, 30 x 30 ft",e.exits=y();break;case 5:case 6:e.description=E()+", Square, 40 x 40 ft",e.exits=y();break;case 7:case 8:case 9:e.description=E()+", Rectangle, 20 x 30 ft",e.exits=y();break;case 10:case 11:case 12:e.description=E()+", Rectangle, 30 x 40 ft",e.exits=y();break;case 13:case 14:e.description=E()+", Rectangle, 40 x 50 ft",e.exits=w();break;case 15:e.description=E()+", Rectangle, 50 x 80 ft",e.exits=w();break;case 16:e.description=E()+", Circle, 30ft diameter",e.exits=y();break;case 17:e.description=E()+", Circle, 50ft diameter",e.exits=w();break;case 18:e.description=E()+", Octagon, 40 x 40ft diameter",e.exits=w();break;case 19:e.description=E()+", Octagon, 60 x 60ft diameter",e.exits=w();break;default:e.description=E()+", Trapezoid, roughly 40 x 60ft",e.exits=w()}return e}function w(){var e=[];switch(p(20)){case 1:case 2:case 3:e=[];break;case 4:case 5:case 6:case 7:case 8:e=[T()];break;case 9:case 10:case 11:case 12:case 13:e=[T(),T()];break;case 14:case 15:case 16:case 17:e=[T(),T(),T()];break;case 18:e=[T(),T(),T(),T()];break;case 19:e=[T(),T(),T(),T(),T()];break;default:e=[T(),T(),T(),T(),T(),T()]}return e}function y(){var e=[];switch(p(20)){case 1:case 2:case 3:case 4:case 5:e=[];break;case 6:case 7:case 8:case 9:case 10:case 11:e=[T()];break;case 12:case 13:case 14:case 15:e=[T(),T()];break;case 16:case 17:case 18:e=[T(),T(),T()];break;case 19:default:e=[T(),T(),T(),T()]}return e}function T(){return p(20)<=10?h():k()}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=e>0&&e<=100?e:p(100);switch(a){case 1:return"Antechamber";case 2:case 3:return"Armory";case 4:return"Audience chamber";case 5:return"Aviary";case 6:case 7:return"Banquet room";case 8:case 9:case 10:return"Barracks";case 11:return"Bathroom";case 12:return"Bedroom";case 13:return"Bestiary";case 14:case 15:case 16:return"Cell";case 17:return"Chantry";case 18:return"Chapel";case 19:case 20:return"Cistern";case 21:return"Classroom";case 22:return"Closet";case 23:case 24:return"Conjuring room";case 25:case 26:return"Court";case 27:case 28:case 29:return"Crypt";case 30:case 31:return"Dining room";case 32:case 33:return"Divination room";case 34:return"Dormitory";case 35:return"Dressing room";case 36:return"Vestibule";case 37:case 38:return"Gallery";case 39:case 40:return"Game room";case 41:case 42:case 43:return"Guardroom";case 44:case 45:return"Hall";case 46:case 47:return"Great Hall";case 48:case 49:return"Hallway";case 50:return"Kennel";case 51:case 52:return"Kitchen";case 53:case 54:return"Laboratory";case 55:case 56:case 57:return"Library";case 58:case 59:return"Lounge";case 60:return"Meditation chamber";case 61:return"Observatory";case 62:return"Office";case 63:case 64:return"Pantry";case 65:case 66:return"Prison";case 67:case 68:return"Reception room";case 69:case 70:return"Refectory";case 71:return"Robing room";case 72:return"Salon";case 73:case 74:return"Shrine";case 75:case 76:return"Sitting room";case 77:case 78:return"Smithy";case 79:return"Stable";case 80:case 81:return"Storage room";case 82:case 83:return"Vault";case 84:case 85:return"Study";case 86:case 87:case 88:return"Temple";case 89:case 90:return"Throne room";case 91:return"Torture chamber";case 92:case 93:return"Training room";case 94:case 95:return"Trophy room";case 96:return"Waiting room";case 97:return"Nursery";case 98:return"Well";case 99:default:return"Workshop"}}t(15);var C=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={sections:[]},r.handleClick=r.handleClick.bind(Object(l.a)(r)),r.back=r.back.bind(Object(l.a)(r)),r}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.sections;e.push(function(){console.log("Generating starting area");var e={type:10,exits:0};switch(p(10)){case 1:e.description="Entrance, Square, 20 x 20 ft; passage on each wall",e.exits=[k(),k(),k()];break;case 2:e.description="Entrance, Square, 20 x 20 ft; door on two walls, passage on third wall",e.exits=[h(),h(),k()];break;case 3:e.description="Entrance, Square, 40 x 40 ft; door on three walls",e.exits=[h(),h(),h()];break;case 4:e.description="Entrance, Rectangle, 80 x 20 ft; passage on each wall",e.exits=[h(),h(),h()];break;case 5:e.description="Entrance, Rectangle, 20 x 40 ft; passage on each wall",e.exits=[k(),k(),k()];break;case 6:e.description="Entrance, Circle, 40 ft diameter; one passage at each cardinal direction",e.exits=[k(),k(),k()];break;case 7:e.description="Entrance, Circle, 40 ft diameter; one passage at each cardinal direction; well in middle of room (might lead down to lower level)",e.exits=[k(),k(),k(),g()];break;case 8:e.description="Entrance, Square 20 x 20 ft; door on two walls, passage on third wall, secret door on fourth wall",e.exits=[h(),h(),k(),h()];break;case 9:e.description="Entrance, Passage, 10 ft wide; T intersection",e.exits=[k(),k()];break;default:e.description="Entrance, Passage, 10ft wide; four-way intersection",e.exits=[k(),k(),k(),k()]}return e}()),this.setState({sections:e})}},{key:"handleClick",value:function(e){var a=e.target.value,t=this.state.sections;if(!0===t[t.length-1].exits[a].trapped)t[t.length-1].exits[a].locked=!0,t[t.length-1].exits[a].description=t[t.length-1].exits[a].description+"TRAPPED!";else{var r=t[t.length-1].exits[a].leadsTo;t.push(r)}this.setState(t)}},{key:"back",value:function(){var e=this.state.sections;e.pop(),this.setState(e)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"dungeon"},s.a.createElement("span",{role:"img","aria-label":"skull"},"\ud83d\udc80"),s.a.createElement("p",null,"Refresh for a new dungeon"),s.a.createElement("hr",null),this.state.sections.map((function(a,t){return s.a.createElement("div",null,s.a.createElement("em",null,a.description),s.a.createElement("p",null,"Exits:"),s.a.createElement("ul",null,10!==a.type?s.a.createElement("li",{key:t+"back"},a===e.state.sections[e.state.sections.length-1]?s.a.createElement("button",{onClick:e.back},"Back"):s.a.createElement("em",null,"Back")):"",a.exits.length>0?a.exits.map((function(r,c){return s.a.createElement("li",{key:t+"exit"+c},!0!==r.locked&&a===e.state.sections[e.state.sections.length-1]?s.a.createElement("button",{value:c,onClick:e.handleClick},r.description):s.a.createElement("em",null,r.description))})):""),s.a.createElement("hr",null))})))}}]),t}(s.a.Component);var S=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,"Zanzer's Dungeon"),s.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.617ec20d.chunk.js.map