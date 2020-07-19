import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

    return(
        <div>
            <Hero title={props.title}/>


            <Content>
                <p>I'm an undergraduate at Hunter College majoring in Computer Science and minoring in Media web development.</p>
                <p>I enjoy learning new programming languages, such as Python, MySQL and JavaScript, to create new projects.</p>
                <p>My goal is to land a fullstack developer position.</p>
                <iframe title="myFrame" src='../assets/images/resume.pdf' width="100%" ></iframe>
            </Content>
        </div>
    );

}

export default AboutPage;
