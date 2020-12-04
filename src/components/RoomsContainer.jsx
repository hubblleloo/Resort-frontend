import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
import {withRoomConsumer} from "../context";


function RoomsContainer({context}) {
    const {loading,sortedRooms,rooms} = context;
    if (loading){
        return <Loading/>
    }
    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer(RoomsContainer);

// import React from 'react';
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from './RoomsList';
// import {RoomConsumer} from "../context";
// import Loading from "./Loading"
//
// function RoomsContainer(props) {
//
//     return (
//         <RoomConsumer>
//             {
//                 (value)=>{
//                     const {loading,sortedRooms,rooms} = value;
//                     if(loading){
//                         return <Loading/>
//                     }
//                     return(
//                         <div>Hello from rooms container
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//
//     );
// }
//
// export default RoomsContainer;
