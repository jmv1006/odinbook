import { useContext, useEffect, useState } from "react"
import { UserPageContext } from "../../../context/userPageContext"
import { CardsContainer, UserFriendsContainer } from "./styles"
import UserCard from "../../shared/user-card/user-card"

const UserFriends = () => {
    const {friends} = useContext<any>(UserPageContext);

    const mappedFriends = friends.map((friend: any) => 
        <UserCard key={friend.Id} user={friend} />
    )

    return(
        <UserFriendsContainer>
            Friends:
            <CardsContainer>
                {mappedFriends}
            </CardsContainer>
        </UserFriendsContainer>
    )
}

export default UserFriends