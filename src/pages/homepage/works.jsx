import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import styled from 'styled-components'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const AppWorks = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <Hero>
            <div id='works' className='block worksBlock'>
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>How it Works</h2>
                        <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                    </div>
                    <div className="contentHolder">
                        <Button size="large" onClick={showModal}><PlayCircleOutlineIcon className='icon'/></Button>
                    </div>
                    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
            </div>
        </Hero>
    )
}

export default AppWorks

const Hero = styled.div`
    margin-bottom: 8rem;
`