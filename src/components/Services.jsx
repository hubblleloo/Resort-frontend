import React from 'react';
import Title from "./Title";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/all";

export default class Services extends React.Component{
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info:"Lorem Ipsum is simply " +
                    "dummy text of the printing and typesetting industry. "
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Lorem Ipsum is simply " +
                    "dummy text of the printing and typesetting industry. "
            },

            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info:"Lorem Ipsum is simply " +
                    "dummy text of the printing and typesetting industry. "
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Lorem Ipsum is simply " +
                    "dummy text of the printing and typesetting industry. "
            },
        ]
    }

    render(){
        return (
            <section className={"services"}>
                <Title title={'Services'}/>
                <div className={"services-center"}>
                    {
                        this.state.services.map((item,index)=>{
                            return <article key={index} className={"service"}>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })
                    }

                </div>
            </section>
        );
    }
}
