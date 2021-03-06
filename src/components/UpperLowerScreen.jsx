import { useState, useEffect } from "react";
import "./practice.css";
import infoBtn from "../images/info-btn.png";
import CursiveUpper from "../images/upper.png";
import CursiveLower from "../images/lower.png";
import PreCursiveLower from "../images/pre-cur-lower.png";
import PreCursiveUpper from "../images/pre-cur-upper.png";
import join2 from "../images/joinBG2.png";
import join3 from "../images/joinBG3.png";
import { NavLink } from "react-router-dom";
import { MyConsumer } from "./context";
import info143 from "../images/info-i143.png";

function UpperLowerScreen(props) {
  const [state, setStateHelp] = useState({ help: "Choose your level to start practicing!", infDiagVis: "none" });
  var actImg = null;
  var func = null;
  var buttons = setButtonType(props.state.activeTab);
	var currentTab;
	var icons={
		CursiveUpper:CursiveUpper,
		CursiveLower:CursiveLower,
		PreCursiveLower:PreCursiveLower,
		PreCursiveUpper:PreCursiveUpper,
		CursiveJoin2:join2,
		CursiveJoin3:join3
	}
	//console.log(props);
  useEffect(() => {
    props.setVisibility(props.history);
    document.getElementsByClassName("activity-base")[0].style.backgroundImage = "url(" + actImg + ")";
    //buttons = setButtonType();
    //console.log("-----------", this.tab);
    func(null, props.location.case);
    //console.log(buttons);
  }, []);

  function getTColor() {
    return (
      <MyConsumer>
        {(a) => {
          if (a.activeTab != null) {
            let cc = a.activeTab.replace(" ", "");
            if (cc.includes("-")) {
              cc = cc.replace("-", "");
            }

            var r = document.documentElement;
            r.style.setProperty("--tabColors", a.getImg[cc].tColor);
          }
        }}
      </MyConsumer>
    );
  }

  function abc() {
    return (
      <MyConsumer>
        {(a) => {
          func = a.func;
          if (a.activeTab != null) {
            var cc = a.activeTab.replace(" ", "");
            if (cc.includes("-")) {
              cc = cc.replace("-", "");
            }
            actImg = a.getImg[cc].a3;
          }

          return <p className="activity-name">{a.activeTab}</p>;
        }}
      </MyConsumer>
    );
  }
  function getBtnType(obj, index) {
		var type = Object.keys(obj)[0];
		var cname = currentTab.substr(0,currentTab.length-1) + type;
    //console.log(icons, cname, icons[cname]);
		return (
			<NavLink key={index} to={{"pathname":"/LetterFormation", case:type}}>
				<div className={type}> <img src={icons[cname]} alt=""></img><div>{obj[type]}</div></div>
				</NavLink>	
		)
  }
  function setButtonType(_tab) {
    var tabNames = {
      PreCursiveB: [{ "Lower": "Lower Case" }, { "Upper": "Upper Case" }],
      PreCursiveC: [{ "Lower": "Lower Case" }, { "Upper": "Upper Case" }],
      PreCursiveD: [{ "Lower": "Lower Case" }, { "Upper": "Upper Case" }],
      CursiveB: [{ "Lower": "Lower Case" }, { "Upper": "Upper Case" }],
      CursiveC: [{ "Join2": "Two-Letter Joins" }, { "Join3": "Three-Letter Joins" }],
      CursiveD: [{ "Join2": "Two-Letter Joins" }, { "Join3": "Three-Letter Joins" }],
      CursiveE: [{ "Join2": "Two-Letter Joins" }, { "Join3": "Three-Letter Joins" }],
      CursiveF: [{ "Join2": "Two-Letter Joins" }, { "Join3": "Three-Letter Joins" }],
    };
    
		var cc = _tab.replace(" ", "");
		if (cc.includes("-")) {
			cc = cc.replace("-", "");
		}
    currentTab = cc;
    buttons = tabNames[cc];
    return tabNames[cc];
  }
  

  function openDialog() {
    var vis = state.infDiagVis == "flex" ? "none" : "flex";
    setStateHelp({ ...state, infDiagVis: vis });
  }

  return (
    <div className="activity-base">
      <div className="dailoug-block-img">
        <img alt="" src="assets/images/dialog-1.png" />
      </div>
      <div className="activity-base-inner">
        <div className="activity-head">
          <a className="btn-icon oragnge-btn info-btn" onClick={openDialog}>
            <img alt="" src={infoBtn} />
          </a>
          <div className="activity-Title">{abc()}</div>
        </div>

        <div className="info-dialog" style={{ display: state.infDiagVis }}>
          <div>
            <img src={info143} alt="" />
          </div>
          <div>{state.help}</div>
        </div>

        <div className="letterFormText">Letter Formation</div>
        <div id="letterCont">
          <div className="upperLowerCont">
						{
            buttons.map((item, index) =>(
							getBtnType(item, index)
						))
						}
            {/* <NavLink to={{pathname:"/LetterFormation", case:"lower"}}>
					<div>{getBtnType("upper")} Lower Case</div>
				</NavLink>
				<NavLink to={{pathname:"/LetterFormation", case:"upper"}}>
					<div>{getBtnType("lower")} Upper Case</div>
				</NavLink> */}
          </div>
        </div>
        {getTColor()}
      </div>
    </div>
  );
}

export default UpperLowerScreen;
