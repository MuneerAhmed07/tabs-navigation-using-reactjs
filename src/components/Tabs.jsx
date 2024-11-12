import TabContent from "./TabContent";
import { useState } from "react";

const Tabs = () => {

    const [activeTab, setActiveTab] = useState("HTML");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

  return (
    <>
    <div className="tabs-container">
        <div className="tabs-header">
            <button className={activeTab === "HTML" ? "tab active" : "tab"} onClick={() => handleTabClick("HTML")}>HTML</button>
            <button className={activeTab === "CSS" ? "tab active" : "tab"} onClick={() => handleTabClick("CSS")}>CSS</button>
            <button className={activeTab === "JavaScript" ? "tab active" : "tab"} onClick={() => handleTabClick("JavaScript")}>JavaScript</button>
        </div>
        <TabContent activeTab={activeTab} />
    </div> 
    </>
  )
}

export default Tabs;
