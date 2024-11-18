/*! For license information please see main.adf790e2.js.LICENSE.txt */
    html {
        --desktop-background: ${e=>e.styles.desktopBackground};
        --interact-background: ${e=>e.styles.interactBackground};
        --main-font: ${e=>e.styles.mainFont};
        --main-text-color: ${e=>e.styles.mainTextColor};
        --taskbar-background: ${e=>e.styles.taskbarBackground};
        --taskbar-text-color: ${e=>e.styles.taskbarTextColor};
        --taskbar-highlight-color: ${e=>e.styles.taskbarHighlightColor};
        --main-button-background: ${e=>e.styles.mainButtonBackground};
        --main-button-background-hover: ${e=>e.styles.mainButtonBackgroundHover};
        --alt-button-background: ${e=>e.styles.altButtonBackground};
        --button-text-color: ${e=>e.styles.buttonTextColor};
        --main-highlight-background: ${e=>e.styles.mainHighlightBackground};
        --alt-highlight-background: ${e=>e.styles.altHighlightBackground};
        --highlight-text-color: ${e=>e.styles.highlightTextColor};
        --subtitles-background: ${e=>e.styles.subtitlesBackground};
        --subtitles-text-color: ${e=>e.styles.subtitlesTextColor};
    }
`,sI=aI;class uI extends r.Component{constructor(){super(...arguments),this.handleClick=()=>{this.props.onClicked(this.props.id)}}render(){return(0,YS.jsx)("button",{className:this.props.style,disabled:this.props.selected,onClick:this.handleClick,children:this.props.text})}}class lI extends r.Component{constructor(e){super(e),this.state={value:""},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}handleChange(e){this.setState({value:e.target.value})}handleSubmit(e){this.props.onSubmitted(this.state.value),this.setState({value:""}),e.preventDefault()}render(){return(0,YS.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,YS.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange}),(0,YS.jsx)("input",{type:"submit",value:"Submit"})]})}}class cI extends r.Component{render(){return(0,YS.jsxs)("div",{className:"taskbar",children:[(0,YS.jsx)("div",{className:"taskbar-left","aria-hidden":"true",children:this.props.left}),(0,YS.jsx)("div",{className:"taskbar-right","aria-hidden":"true",children:this.props.right})]})}}class hI extends r.Component{render(){return(0,YS.jsx)("div",{className:"video-container",children:(0,YS.jsx)("iframe",{className:"video",title:"embed",src:this.props.embedLink,frameBorder:"0",referrerPolicy:"strict-origin-when-cross-origin"})})}}class fI extends r.Component{constructor(e){super(e),this.handleChoice=e=>{const t=this.state.selected,n={};t&&(n[`/choices/${t}/votes`]=xb.database.ServerValue.increment(-1)),n[`/choices/${e}/votes`]=xb.database.ServerValue.increment(1),xb.database().ref(this.props.settings.performanceId).update(n),this.setState((t=>({selected:e})))},this.handleFreeResponse=e=>{var t=e,n={};n["/rants/"+xb.database().ref(this.props.settings.performanceId).child("rants").push().key]=t,xb.database().ref(this.props.settings.performanceId).update(n)},this.state={selected:null,mute:"unmute"}}componentDidUpdate(){if(!this.props.performance)return;let e=!0;const t=this.props.performance.choices;if(t){Object.values(t).forEach((t=>{t.votes&&(e=!1)}))}e&&this.state.selected&&this.setState((e=>({selected:null})))}render(){if(!this.props.performance)return(0,YS.jsx)("div",{"aria-live":"off",children:(0,YS.jsx)("p",{children:"Nothing to display to audience"})});let e=[],t=0;const n=this.props.performance.choices;if(n)for(let i=0;i<n.length;i++)n.length>1&&(n[i].votes>n[t].votes&&(t=i),e.push(n[i]));let r="";if(this.props.performance.audience){if(r=this.props.performance.audience.replace("@",""),e.length>0){const n=Object.keys(e).map((n=>(0,YS.jsx)(uI,{text:e[n].text+" ("+e[n].votes+" votes)",style:Number(n)===Number(t)?"highlight":null,id:n,onClicked:this.handleChoice,selected:this.state.selected===n},n)));return(0,YS.jsxs)("div",{children:[(0,YS.jsx)("p",{tabIndex:"0",role:"alert",children:r.trim()}),n]})}{let e=null;return this.props.performance.rants&&(e=Object.keys(this.props.performance.rants).map((e=>(0,YS.jsx)("li",{children:this.props.performance.rants[e]},e)))),(0,YS.jsxs)("div",{children:[(0,YS.jsxs)("div",{className:"bubble",children:[(0,YS.jsx)("p",{tabIndex:"0",role:"alert",children:r.trim()}),(0,YS.jsx)(lI,{onSubmitted:this.handleFreeResponse})]}),(0,YS.jsx)("p",{"aria-hidden":"true",children:"Current rant content"}),(0,YS.jsx)("ul",{"aria-hidden":"true",children:e})]})}}return(0,YS.jsx)("div",{"aria-live":"off",children:(0,YS.jsx)("p",{children:this.props.settings.defaultAudienceMessage})})}}const dI=fI;class pI extends r.Component{render(){if(!this.props.performance)return null;const e=this.props.performance;var t=[];if(e.nextLines?(console.log(e.nextLines),t=e.nextLines.map(((e,t)=>(0,YS.jsx)("li",{className:"preview "+e.substring(0,4),children:e},t)))):console.log("There's no p.nextLines available to the VideoCaller view right now."),e.currentSpeaker===this.props.speaker&&""!==e.currentLine){let n=null;return e.currentLine.includes("Firebase-read")?(this.props.performance.rants&&(n=Object.keys(this.props.performance.rants).map((e=>(0,YS.jsx)("li",{children:this.props.performance.rants[e]},e)))),(0,YS.jsxs)("div",{children:[this.props.speaker.toUpperCase(),":",(0,YS.jsx)("ul",{children:n})]})):(n=(0,YS.jsx)("p",{dangerouslySetInnerHTML:{__html:e.currentLine}}),(0,YS.jsxs)("div",{children:[(0,YS.jsxs)("div",{children:[this.props.speaker.toUpperCase(),":",n]}),(0,YS.jsx)("div",{children:(0,YS.jsx)("ul",{className:"knot",children:t})})]}))}return(0,YS.jsxs)("div",{children:[(0,YS.jsx)("div",{children:"--"}),(0,YS.jsx)("div",{children:(0,YS.jsx)("ul",{className:"knot",children:t})})]})}}const gI=pI,vI=n(95).Story;const mI=new class{initPerformance(e,t){QS.get("./script.json").then((n=>this.setScript(n.data,t,e)))}setScript(e,t,n){this.story=new vI(e),n?this.story.state.LoadJson(n.saveState):this.continue(t)}continue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[],r=null,i=null,o=null;if(t)t.nextLines&&(n=t.nextLines),t.audience&&(r=t.audience),t.choices&&(i=t.choices),t.rants&&(o=t.rants);else{for(n=[];this.story.canContinue;)n.push(this.story.Continue());let e=this.story.currentChoices.length;if(e>0){i={};for(let t=0;t<e;t++){i[t]={text:null,speaker:null,votes:0};let e=this.story.currentChoices[t].text.replace("/","");i[t].text=this.getLineText(e),i[t].speaker=this.getSpeaker(e)}}}let a="";for(;n.length>0&&(a=n.shift(),a.includes("@"));)r=this.getLineText(a);const s=this.story.state.toJson();xb.database().ref(e).set({currentLine:this.getLineText(a),currentSpeaker:this.getSpeaker(a),nextLines:n,audience:r,choices:i,rants:o,saveState:s})}getLineText(e){return e.replace(/\w+: /,"").trim()}getSpeaker(e){return e.includes(": ")?e.slice(0,e.indexOf(": ")):null}pickChoice(e,t){this.story.ChooseChoiceIndex(e),this.continue(t)}startOver(e){this.story.ChoosePathString("Start"),this.continue(e)}},yI=mI;class _I extends r.Component{constructor(e){super(e),this.handleContinueButton=e=>{yI.continue(this.props.settings.performanceId,this.props.performance)},this.handlePickButton=e=>{let t=0;Object.values(this.props.performance.choices).forEach(((e,n)=>{e.votes>this.props.performance.choices[t].votes&&(t=n)})),yI.pickChoice(t,this.props.settings.performanceId)},this.handleEndButton=e=>{this.state.areYouSure?(xb.database().ref(this.props.settings.performanceId).set(null),this.props.onBackButton()):this.setState({areYouSure:!0})},this.handleRantButton=e=>{xb.database().ref(this.props.settings.performanceId+"/rants").set(null)},this.handleRestartButton=e=>{xb.database().ref(this.props.settings.performanceId).set("restarting"),yI.startOver(this.props.settings.performanceId)},this.handlePassword=e=>{e===this.props.settings.modPassword&&(this.setState({passwordCorrect:!0}),yI.initPerformance(this.props.performance,this.props.settings.performanceId)),this.setState({attemptedPassword:!0})},this.handleBackButton=e=>{this.state.areYouSure?this.setState({areYouSure:!1}):this.props.onBackButton()},this.state={passwordCorrect:!1,attemptedPassword:!1,areYouSure:!1}}truncateString(e,t){return e.length>t?e.slice(0,t)+"...":e}componentWillUnmount(){this.setState=(e,t)=>{}}render(){let e=null;if(this.props.performance.rants&&(e=Object.keys(this.props.performance.rants).map((e=>(0,YS.jsx)("li",{children:this.props.performance.rants[e]},e)))),this.state.areYouSure)return(0,YS.jsxs)("div",{children:[(0,YS.jsx)("p",{children:"This will end the entire performance. Are you sure?"}),(0,YS.jsx)(uI,{text:"End performance",id:"end",onClicked:this.handleEndButton}),(0,YS.jsx)(uI,{text:"Go back",id:"back",onClicked:this.handleBackButton})]});if(this.state.passwordCorrect&&this.props.performance){let t,n,r;if(""!==this.props.performance.currentLine&&(this.props.performance.currentSpeaker&&(t=(0,YS.jsxs)("div",{className:this.props.performance.currentSpeaker,children:[(0,YS.jsxs)("p",{children:[this.props.performance.currentSpeaker.toUpperCase(),":"]}),(0,YS.jsx)("p",{children:this.props.performance.currentLine})]})),r=(0,YS.jsx)(uI,{text:"Next line",id:"continue",speaker:"highlight",onClicked:this.handleContinueButton})),this.props.performance.choices){const e=this.props.performance.choices,t=Object.keys(e).map((t=>(0,YS.jsx)("li",{className:e[t].speaker,children:e[t].text+" ("+e[t].votes+" votes)"},t)));n=(0,YS.jsx)("ol",{children:t}),r||(r=(0,YS.jsx)(uI,{text:"Next section",id:"pick",speaker:"highlight",onClicked:this.handlePickButton}))}return(0,YS.jsxs)("div",{id:"mod",children:[(0,YS.jsx)("h2",{children:"Current line"}),t,(0,YS.jsx)("h2",{children:"Current choices"}),n,(0,YS.jsx)("h2",{children:"Performance controls"}),r,(0,YS.jsx)(uI,{text:"Start over",id:"end",onClicked:this.handleRestartButton}),(0,YS.jsx)("p",{children:"Once the show's over, click this button:"}),(0,YS.jsx)(uI,{text:"End performance",id:"end",onClicked:this.handleEndButton}),(0,YS.jsx)("h2",{children:"Current rant content"}),(0,YS.jsx)("ul",{children:e}),(0,YS.jsx)(uI,{text:"Reset rant",onClicked:this.handleRantButton})]})}{let e=(0,YS.jsx)("p",{children:"Password:"});return this.state.attemptedPassword&&(e=(0,YS.jsx)("p",{children:"Wrong password. Try again:"})),(0,YS.jsxs)("div",{children:[e,(0,YS.jsx)(lI,{onSubmitted:this.handlePassword}),(0,YS.jsx)(uI,{text:"Go back",id:"back",onClicked:this.handleBackButton})]})}}}const bI=_I;class wI extends r.Component{constructor(){super(...arguments),this.handleButton=e=>{this.props.onRoleSelected(e)}}render(){if(this.props.performance){if("loading"===this.props.performance)return(0,YS.jsx)("div",{children:(0,YS.jsx)("p",{children:"Loading..."})});{const e=Object.keys(this.props.settings.callers).map((e=>(0,YS.jsx)(uI,{text:this.props.settings.callers[e],id:this.props.settings.callers[e],onClicked:this.handleButton},e)));return(0,YS.jsxs)("div",{children:[(0,YS.jsxs)("p",{tabIndex:"0",role:"alert",children:["Welcome to ",this.props.settings.title,". Please select your role from the following options:"]}),(0,YS.jsxs)("div",{id:"rolepicker",children:[(0,YS.jsx)(uI,{text:"Audience",id:"audience",onClicked:this.handleButton}),e,(0,YS.jsx)(uI,{text:"Moderator",id:"moderator",onClicked:this.handleButton})]})]})}}return(0,YS.jsxs)("div",{children:[(0,YS.jsxs)("p",{tabIndex:"0",role:"alert",children:["Welcome to ",this.props.settings.title,"."]}),(0,YS.jsx)(uI,{text:"Start Performance",id:"moderator",onClicked:this.handleButton})]})}}const SI=wI;class EI extends r.Component{render(){let e;return""!==this.props.performance.currentLine&&this.props.performance.currentSpeaker&&(e=this.props.performance.currentLine.includes("Firebase-read")?(0,YS.jsxs)("p",{children:[this.props.performance.currentSpeaker.toUpperCase(),": (Reads the audience-generated rant, displayed on the right)"]}):(0,YS.jsxs)("p",{children:[this.props.performance.currentSpeaker.toUpperCase(),": ",this.props.performance.currentLine]})),(0,YS.jsx)("div",{className:"App-subtitles",children:(0,YS.jsx)("div",{className:"App-subtitles-container",children:e})})}}const TI=EI;class CI extends r.Component{constructor(e){super(e),this.initSettings=e=>{this.setState((t=>({settings:e})));xb.database().ref(this.state.settings.performanceId).on("value",(e=>{const t=e.val();this.setState((e=>({performance:t}))),t?"restarting"===t&&"moderator"!==this.state.role&&this.handleBackButton():this.handleBackButton()}))},this.handleRoleSelected=e=>{this.setState((t=>({role:e})))},this.handleBackButton=()=>{this.setState((e=>({role:null})))},this.handleResizeFinished=(e,t)=>{this.setState((e=>({panelSizes:t})))},this.handleShowVideoPanel=e=>{this.setState((t=>({showVideoPanel:e})))},this.state={settings:null,role:null,performance:"loading",showVideoPanel:!1,panelSizes:[62.5,37.5]}}componentDidMount(){QS.get("./settings.json").then((e=>this.initSettings(e.data))),this.handleShowVideoPanel(window.innerWidth>=1024)}componentWillUnmount(){this.setState=(e,t)=>{}}render(){let e,t,n,r,i,o,a,s=this.state.panelSizes;if(this.state.settings){switch(n=(0,YS.jsx)(sI,{styles:this.state.settings.styles}),this.state.role){case"audience":t=(0,YS.jsx)(dI,{settings:this.state.settings,performance:this.state.performance});break;case"moderator":t=(0,YS.jsx)(bI,{settings:this.state.settings,performance:this.state.performance,onBackButton:this.handleBackButton});break;case null:t=(0,YS.jsx)(SI,{settings:this.state.settings,performance:this.state.performance,onRoleSelected:this.handleRoleSelected});break;default:t=(0,YS.jsx)(gI,{settings:this.state.settings,performance:this.state.performance,speaker:this.state.role})}o=(0,YS.jsx)("strong",{children:this.state.settings.title}),this.state.showVideoPanel&&"audience"===this.state.role?(a=(0,YS.jsxs)("div",{children:[(0,YS.jsxs)("span",{class:"material-icons",children:[(0,YS.jsx)("span",{class:"active",children:"feed"})," mic bluetooth cloud wifi battery_4_bar"]})," \xa02:22"]}),r=(0,YS.jsxs)("div",{className:"App-video-container",children:[(0,YS.jsx)(cI,{}),(0,YS.jsx)(hI,{embedLink:this.state.settings.videoCallEmbedLink})]})):s=[100]}return e=(0,YS.jsxs)("div",{className:"App",children:[n,(0,YS.jsx)(cI,{left:o,right:a}),(0,YS.jsxs)(hE,{initialSizes:s,minWidths:[640,384],gutterClassName:"gutter",onResizeFinished:this.handleResizeFinished,children:[r,(0,YS.jsx)("div",{className:"App-interact-container",children:(0,YS.jsx)("div",{className:"App-interact",children:t})})]})]}),i=(0,YS.jsxs)("div",{className:"App",children:[n,(0,YS.jsx)(TI,{performance:this.state.performance})]}),(0,YS.jsx)(ue,{children:(0,YS.jsxs)(oe,{children:[(0,YS.jsx)(re,{exact:!0,path:"/",element:e}),(0,YS.jsx)(re,{path:"/subtitles",element:i})]})})}}const II=CI,kI=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:o,getTTFB:a}=t;n(e),r(e),i(e),o(e),a(e)}))};o.render((0,YS.jsx)(r.StrictMode,{children:(0,YS.jsx)(II,{})}),document.getElementById("root")),kI()})()})();
//# sourceMappingURL=main.adf790e2.js.map