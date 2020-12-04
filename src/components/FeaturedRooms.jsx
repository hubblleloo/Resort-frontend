import React, {Component} from 'react';
import {RoomContext} from "../context";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";
class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        //featuredRooms was aliased to rooms
        const {loading, featuredRooms}= this.context
        console.log(featuredRooms)
        return (
            <section className={"featured-rooms"}>
                <Title title={"Featured Room"}/>
                <div className={"featured-rooms-center"}>
                    {loading ? <Loading/> :
                        featuredRooms.map(room =>{
                            return <Room key={room.id} room={room}/>
                        })
                    }
                </div>
            </section>
        );
    }
}

export default FeaturedRooms;
