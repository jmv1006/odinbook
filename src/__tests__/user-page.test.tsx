import { screen, render } from "@testing-library/react"
import TestsContextProvider from "../context/tests-wrapper";
import { createContext } from "react";
import '@testing-library/jest-dom';
import UserInfo from "../components/user-page/user-info/user-info";
import UserPagePosts from "../components/user-page/posts/user-posts";

import IUser from "../interfaces/user";
import IPost from "../interfaces/post";
import UserFriends from "../components/user-page/friends/user-friends";

const UserPageTestContext = createContext<any>({});

let userPosts: any = [];
let userFriends: any = [];
let isCurrentUser = true;

const UserPageTestProvider = ({children}: any) => {
    return (
        <UserPageTestContext.Provider value={{ user: {}, userPosts: [], friends: [], isCurrentUser: false, profileInfo: {}, triggerReload: jest.fn() }}>
            {children}
        </UserPageTestContext.Provider>
    )
};

const mockPost: IPost = {
    Id: "12345",
    Date: "Today",
    Text: "This is a test post",
    Users: {
        Id: "12345",
        DisplayName: "TestUser",
        Email: "testuser@gmail.com",
        ProfileImg: "test.com"
    }
};

const mockUser: IUser = {
    Id: "12345",
    DisplayName: "Test User",
    Email: "testuser@gmail.com",
    ProfileImg: "null.com",
};

const mockUserInfo = {
    Bio: "Test Bio"
}

jest.mock('../context/userPageContextRewrite', () => ({
    useUserPageContext: () => ({user: mockUser, userPosts: userPosts, friends: userFriends, isCurrentUser: isCurrentUser, profileInfo: mockUserInfo, triggerReload: jest.fn()})
}));

describe("User Profile Information Component", () => {
    it("renders without error", () => {
        render(
            <TestsContextProvider>
                <UserPageTestProvider>
                    <UserInfo />
                </UserPageTestProvider>
            </TestsContextProvider>
        )
    })

    it("renders user display name", () => {
        render(
            <TestsContextProvider>
                <UserPageTestProvider>
                    <UserInfo />
                </UserPageTestProvider>
            </TestsContextProvider>
        )
        expect(screen.getByText(mockUser.DisplayName + " (Me)")).toBeInTheDocument()
    });

    it("renders user bio", () => {
        render(
            <TestsContextProvider>
                <UserPageTestProvider>
                    <UserInfo />
                </UserPageTestProvider>
            </TestsContextProvider>
        )
        expect(screen.getByText(mockUserInfo.Bio)).toBeInTheDocument()
    })

    it("renders edit profile button if current user", () => {
        render(
            <TestsContextProvider>
                <UserPageTestProvider>
                    <UserInfo />
                </UserPageTestProvider>
            </TestsContextProvider>
        )
        expect(screen.getByText("Edit Profile")).toBeInTheDocument()
    })
});

describe("User Page Posts Component", () => {
    it("renders without error", () => {
        render(
            <TestsContextProvider>
                <UserPageTestProvider>
                    <UserPagePosts />
                </UserPageTestProvider>
            </TestsContextProvider>
        )
    })

    it("renders correct text when user has no posts", () => {
        render(
            <TestsContextProvider>
                <UserPageTestProvider>
                    <UserPagePosts />
                </UserPageTestProvider>
            </TestsContextProvider>
        )
        expect(screen.getByText("User Has No Posts!")).toBeInTheDocument()
    })

    it("renders posts", () => {
        //Pushing mock post to posts array
        userPosts.push(mockPost)
        render(
            <TestsContextProvider>
                <UserPageTestProvider>
                    <UserPagePosts />
                </UserPageTestProvider>
            </TestsContextProvider>
        )
        expect(screen.getByText("Loading Post...")).toBeInTheDocument()
    })

})

describe("User Page Friends Component", () => {
    it("renders without error", () => {
        render(
            <TestsContextProvider>
                <UserPageTestProvider>
                    <UserFriends />
                </UserPageTestProvider>
            </TestsContextProvider>
        )
    });

    it("renders correct message when user has no friends", () => {
        render(
            <TestsContextProvider>
                <UserPageTestProvider>
                    <UserFriends />
                </UserPageTestProvider>
            </TestsContextProvider>
        )

        expect(screen.getByText("User Has No Friends!")).toBeInTheDocument()
    });

    it("renders friend card", () => {
        userFriends.push(mockUser)
        render(
            <TestsContextProvider>
                <UserPageTestProvider>
                    <UserFriends />
                </UserPageTestProvider>
            </TestsContextProvider>
        )
        expect(screen.getByText(mockUser.DisplayName)).toBeInTheDocument()
    });

    it("renders requests button if user is current user", () => {
        render(
            <TestsContextProvider>
                <UserPageTestProvider>
                    <UserFriends />
                </UserPageTestProvider>
            </TestsContextProvider>
        )
        expect(screen.getByText("Requests")).toBeInTheDocument()
    });

})