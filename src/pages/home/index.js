import React, { Component } from 'react';
import Header from '../../components/header';
import SectionOne from '../../components/sections/section1';
import Card from '../../components/sections/section2';
import LastSection from '../../components/sections/section3';
import Footer from '../../components/footer';

import './style.css'

import ImgLogo from '../../img/logoBranco.svg';
import ImgTop1 from '../../img/top-desktop1.svg';
import ImgBottom1 from '../../img/bottom-desktop1.svg';
import ImgExecutivos from '../../img/illustration-grow-together.svg';
import ImgConversation from '../../img/illustration-flowing-conversation.svg';
import ImgUsers from '../../img/illustration-your-users.svg';
import ImgFooterDesk from '../../img/footer-desktop.svg';
import ImgPhone from '../../img/icon-phone.svg';
import ImgEmail from '../../img/icon-email.svg';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        return (
            <div>
                <header>
                    <Header btnName='Try Free' />
                </header>

                <section>
                    <SectionOne />

                    <Card
                        imgTop={ImgTop1}
                        imgBottom={ImgBottom1}
                        imgFundo={ImgExecutivos}
                        ColorBackground={'hsl(207, 100%, 98%)'}
                        Titulo='Grow Together'
                        Contexto='Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.' />

                    <Card
                        imgFundo={ImgConversation}
                        reverse = {true}
                        Titulo='Flowing Conversations'
                        Contexto={`You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.`} />


                    <Card
                        imgTop={ImgTop1}
                        imgBottom={ImgBottom1}
                        imgFundo={ImgUsers}
                        ColorBackground={'hsl(207, 100%, 98%)'}
                        Titulo='Your Users'
                        Contexto={`It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately`} />


                        <LastSection />
                </section>

                <footer>
                    <Footer 
                    ImgFooter={ImgFooterDesk}
                    phone={ImgPhone}
                    email={ImgEmail}
                    logo={ImgLogo}
                    />
                </footer>
            </div>
        );
    }
}

export default Home;