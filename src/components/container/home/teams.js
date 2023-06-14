import "../../../css/container/home/teams.sass";
export const Teams = () => {
    return(
        <div className={"teams"}>
            <div className={"teamLeft"}>
                <div className="teamTitleBox">
                    <span className={"teamTitle"}>案例展示</span>
                    <span>CASE SHOW</span>
                </div>
                <span>设有研发部门，经验丰富的专业研发队伍，引进国外先进技术，每六个月研发一款新产品，具有强大的自主创新、开发能力。</span>
            </div>
            <div className="teamIcon"><img src="/static/img/team1.png.webp" alt=""/></div>
            <div className="teamIcon"><img src="/static/img/team2.png.webp" alt=""/></div>
            <div className="teamIcon"><img src="/static/img/team3.png.webp" alt=""/></div>
        </div>
    )
}