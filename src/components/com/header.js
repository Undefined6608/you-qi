import '../../css/com/header.sass';
import {getMenuList} from "../../tools/datas";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

export const Header = ({title}) => {
    const location = useLocation();
    const menuList = getMenuList();
    return (
        <>
            <div className={"header"}>
            <span className={"headerLeft"}>
                {title}
            </span>
                <div className={"headerRight"}>
                    <ul>
                        {menuList.map((item1, index1) => (
                            <li key={index1} className={location.pathname === item1.href ? "select" : ""}>
                                {!item1.innerList.length > 0 ?
                                    <Link className={location.pathname === item1.href ? "jump select" : "jump"}
                                          to={item1.href}>{item1.name}</Link> : <span>{item1.name}</span>
                                }
                                {item1.innerList.length > 0 ?
                                    <ul>
                                        {item1.innerList.map((item2, index2) => (
                                            <li key={index2}><Link
                                                className={location.pathname === item2.href ? "select" : "jump"}
                                                to={item2.href}>{item2.name}</Link>
                                            </li>
                                        ))}
                                    </ul> :
                                    ""
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={"headerCon"}></div>
        </>
    )
}