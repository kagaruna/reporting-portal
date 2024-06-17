import React, { useState } from "react";
import SvgIcon from "./SvgIcon";
import "../css/sidebar.scss";

const menus = [
    {
        id: "1",
        name: "Финансовый департамент",
        submenu: [
            {
                id: "2",
                name: "Оперативный отчет о результатах деятельности ВТБ РБ",
                submenu: [
                    {
                        id: "3",
                        name: "Оперативные показатели",
                        submenu: [
                            {
                                id: "3",
                                name: "Оперативные показатели",
                            },
                        ],
                    },
                    {
                        id: "4",
                        name: "Продажи",
                    },
                    {
                        id: "5",
                        name: "Канальные детализации",
                    },
                    {
                        id: "6",
                        name: "Портфели и приросты",
                    },
                    {
                        id: "7",
                        name: "Клиентская аналитика",
                    },
                    {
                        id: "8",
                        name: "Общие финансовые показатели ГБЛ РБ",
                    },
                    {
                        id: "9",
                        name: "Финансовые показатели ГБЛ РБ",
                    },
                    {
                        id: "10",
                        name: "Финансовые показатели ВТБ РБ",
                    },
                    {
                        id: "11",
                        name: "Исполнение плана по АУР",
                    },
                    {
                        id: "12",
                        name: "Доходность по продуктам",
                    },
                    {
                        id: "13",
                        name: "Рентабельность новых выдач по кредитным продуктам",
                    },
                    {
                        id: "14",
                        name: "Приложения",
                    },
                ],
            },
        ],
    },
];

function SidebarReports() {
    const [activeMenus, setActiveMenus] = useState([]);

    const handleMenuClick = (data) => {
        console.log(data);
    };

    const handleArrowClick = (menuName) => {
        let newActiveMenus = [...activeMenus];

        if (newActiveMenus.includes(menuName)) {
            var index = newActiveMenus.indexOf(menuName);
            if (index > -1) {
                newActiveMenus.splice(index, 1);
            }
        } else {
            newActiveMenus.push(menuName);
        }

        setActiveMenus(newActiveMenus);
    };

    const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => (
        <li>
            <div dept={dept} className='left-sidebar__menu-item'>
                <label
                    onClick={() => handleMenuClick(data)}
                    className='left-sidebar__menu-item--name'>
                    {data.name}
                </label>
                {hasSubMenu && (
                    <div
                        className='left-sidebar__menu-item--toggle'
                        onClick={() => handleArrowClick(menuName)}
                        toggle={activeMenus.includes(menuName)}>
                        <SvgIcon
                            id={
                                activeMenus.includes(menuName)
                                    ? "list-minus-icon"
                                    : "list-plus-icon"
                            }
                        />
                    </div>
                )}
            </div>
            {hasSubMenu && (
                <SubMenu
                    dept={dept}
                    data={data.submenu}
                    toggle={activeMenus.includes(menuName)}
                    menuIndex={menuIndex}
                />
            )}
        </li>
    );

    const SubMenu = ({ dept, data, toggle, menuIndex }) => {
        if (!toggle) {
            return null;
        }

        dept = dept + 1;

        return (
            <ul>
                {data.map((menu, index) => {
                    const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

                    return (
                        <ListMenu
                            dept={dept}
                            data={menu}
                            hasSubMenu={menu.submenu}
                            menuName={menuName}
                            key={menuName}
                            menuIndex={index}
                        />
                    );
                })}
            </ul>
        );
    };

    return (
        <nav id='left-sidebar' className='left-sidebar'>
            <div className='left-sidebar__functions'>
                <div className='sidebar-btns'>
                    <div className='sidebar-btns__item'>
                        <SvgIcon id='favorite-icon' />
                        <span>Избранное</span>
                    </div>
                    <div className='sidebar-btns__item'>
                        <SvgIcon id='last-icon' />
                        <span>Последние</span>
                    </div>
                </div>
            </div>
            <div className='left-sidebar__menu'>
                <ul>
                    {menus.map((menu, index) => {
                        const dept = 1;
                        const menuName = `sidebar-menu-${dept}-${index}`;
                        return (
                            <ListMenu
                                dept={dept}
                                data={menu}
                                hasSubMenu={menu.submenu}
                                menuName={menuName}
                                key={menuName}
                                menuIndex={index}
                            />
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default SidebarReports;
