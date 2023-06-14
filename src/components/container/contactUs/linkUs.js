import "../../../css/container/contactUs/linkUs.sass";
import {TitleBox} from "../../com/titleBox";
import {Button, Form, Input} from "antd";
import {getFormList} from "../../../tools/datas";
import TextArea from "antd/es/input/TextArea";
import {LinkUsRight} from "./linkUsRight";

export const LinkUs = () => {
    const onFinish = (val) => {

    }
    const onFinishFailed = (val) => {

    }
    const formList = getFormList();
    return (
        <div className="linkUs">
            <TitleBox title={"联系我们"} titleEn={"CONTACT US"}/>
            <div className="MsgBox">
                <div className="formBox">
                    <Form
                        className={"form"}
                        name="basic"
                        layout="vertical"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {formList.map((item, index) => (
                            <Form.Item
                                className={"formItem"}
                                key={item.id}
                                label={item.label}
                                name={item.name}
                                rules={item.rules}
                            >
                                {item.id === 4 ? <TextArea rows={4} placeholder={item.placeholder} maxLength={500}/> :
                                    <Input placeholder={item.placeholder}/>}
                            </Form.Item>
                        ))}
                        <Form.Item className={"formItem"} wrapperCol={{offset: 8, span: 16}}>
                            <Button className={"formBtn"} type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <LinkUsRight topTitle={"业务咨询：130000000"} topQQ={"联系QQ：177488228"} topEmail={"联系邮箱：xxx@.co.m"} topPhone={"联系电话：020-000000 000-000000"} topLoader={"联系地址：XXX省XXX市XXX县XXX路XXX号"} />
            </div>
        </div>
    )
}