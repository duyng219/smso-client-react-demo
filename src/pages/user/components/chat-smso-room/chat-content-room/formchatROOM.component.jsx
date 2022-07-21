import React, { useState } from 'react'
import { SendOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'

const FormChatRoom = () => {
    const [loadings, setLoadings] = useState([]);

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    return (
        <div>
            <div className="chat-area">
                <div className="chat-area-header">
                    <div className="chat-area-title">Room1</div>
                    <div className="chat-area-group">
                        <img className="chat-area-profile" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="img" />
                        <img className="chat-area-profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxae8Lemwby_tm6Xqj7JjF8lUiKXzjLZTd2IHhab-1Ee3NQf44NyIO5eMr0IKlpUUTC0&usqp=CAU" alt="img" />
                        <img className="chat-area-profile" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="img" />
                        <span>+4</span>
                    </div>
                </div>
                <div className="chat-area-main">
                    <div className="chat-msg">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxae8Lemwby_tm6Xqj7JjF8lUiKXzjLZTd2IHhab-1Ee3NQf44NyIO5eMr0IKlpUUTC0&usqp=CAU" alt="img" />
                            <div className="chat-msg-date">Message seen 1.22pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iure repellendus facere, obcaecati suscipit id saepe, eius ipsum qui quis quibusdam sequi dolor quam, numquam corporis corrupti fugit eligendi doloremque.</div>
                        </div>
                    </div>
                    <div className="chat-msg owner">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="img" />
                            <div className="chat-msg-date">Message seen 1.22pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Lorem ipsum dolor sit amet consectetur adipisicing elit😂😂😂</div>
                            <div className="chat-msg-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                    </div>
                    <div className="chat-msg">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxae8Lemwby_tm6Xqj7JjF8lUiKXzjLZTd2IHhab-1Ee3NQf44NyIO5eMr0IKlpUUTC0&usqp=CAU" alt="img" />
                            <div className="chat-msg-date">Message seen 2.45pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, perspiciatis pariatur libero quos nam et voluptatum possimus alias, tenetur vero quia voluptatem repellat fuga!😊</div>
                            <div className="chat-msg-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ipsum laudantium sequi atque</div>
                        </div>
                    </div>
                    <div className="chat-msg owner">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="img" />
                            <div className="chat-msg-date">Message seen 2.50pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Lorem ipsum dolor sit, amet consectetur</div>
                            <div className="chat-msg-text">Lorem ipsum dolor sit, amet consectetur.</div>
                        </div>
                    </div>
                    <div className="chat-msg">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxae8Lemwby_tm6Xqj7JjF8lUiKXzjLZTd2IHhab-1Ee3NQf44NyIO5eMr0IKlpUUTC0&usqp=CAU" alt="img" />
                            <div className="chat-msg-date">Message seen 3.16pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Lorem ipsum dolor sit, amet consectetur</div>
                        </div>
                    </div>
                    <div className="chat-msg">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxae8Lemwby_tm6Xqj7JjF8lUiKXzjLZTd2IHhab-1Ee3NQf44NyIO5eMr0IKlpUUTC0&usqp=CAU" alt="img" />
                            <div className="chat-msg-date">Message seen 3.16pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Lorem ipsum dolor sit, amet consectetur
                            </div>
                        </div>
                    </div>
                    <div className="chat-msg owner">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="img" />
                            <div className="chat-msg-date">Message seen 2.50pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Lorem ipsum dolor sit, amet consectetur😂</div>
                        </div>
                    </div>
                    <div className="chat-msg">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxae8Lemwby_tm6Xqj7JjF8lUiKXzjLZTd2IHhab-1Ee3NQf44NyIO5eMr0IKlpUUTC0&usqp=CAU" alt="img" />
                            <div className="chat-msg-date">Message seen 3.16pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Lorem ipsum dolor sit, amet consectetur
                            </div>
                        </div>
                    </div>
                </div>
                <form action="" className='form-chat-area-footer'>
                    <div className="chat-area-footer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video">
                            <path d="M23 7l-7 5 7 5V7z" />
                            <rect x={1} y={5} width={15} height={14} rx={2} ry={2} />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image">
                            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle">
                            <circle cx={12} cy={12} r={10} />
                            <path d="M12 8v8M8 12h8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-paperclip">
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                        </svg>
                        <input type="text" placeholder="Type something here..." />
                        {/* <Button>Send</Button> */}
                        <Space >
                            <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                                Send
                            </Button>
                        </Space>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default FormChatRoom