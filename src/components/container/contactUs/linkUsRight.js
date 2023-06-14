import "../../../css/container/contactUs/linkUsRight.sass";

export const LinkUsRight = ({topTitle,topQQ,topEmail,topPhone,topLoader}) => {
    return(
        <div className="linkUsRight">
            <div className="top">
                <span className={"title"}>{topTitle}</span>
                <span className={"qq"}>{topQQ}</span>
                <span className={"email"}>{topEmail}</span>
                <span className={"phone"}>{topPhone}</span>
                <span className={"loader"}>{topLoader}</span>
            </div>
            <div className="bottom">
                <span>
                    如对我们产品感兴趣或有任何疑问，<br/>欢迎联系我们或留言反馈，<br/>我们期待与您的合作！
                </span>
            </div>
        </div>
    )
}