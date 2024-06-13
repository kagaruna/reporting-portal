import React, { useRef, useState } from "react";
// import "./Tabs.css";

const Tabs = () => {
    const tabsRef = useRef([
        { title: "Отчет", content: "Content 1" },
        { title: "Информация", content: "Content 2" },
    ]);

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const renderTabs = () => {
        return tabsRef.current.map((tab, index) => (
            <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={
                    activeTab === index
                        ? "tabs__list-item active"
                        : "tabs__list-item"
                }>
                {tab.title}
            </div>
        ));
    };

    return (
        <div className='tabs'>
            <div className='tabs__list'>{renderTabs()}</div>
            <div className='tab__content'>
                {tabsRef.current[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
