import { screen, render } from "@testing-library/react"
import HomePageLayout from '../layouts/home/home-page-layout'
import TestsContextProvider from "../context/tests-wrapper";
import '@testing-library/jest-dom';
import MainFeedContainer from '../components/home/main-feed/container-main-feed';
import LeftPanelContainer from '../components/home/left-panel/container-left-panel';
import RightPanelContainer from "../components/home/right-panel/container-right-panel";
import IPost from "../interfaces/post";
import IUser from "../interfaces/user";

import {HomePageContext} from '../context/homePageContext';

window.HTMLElement.prototype.scrollIntoView = function() {};

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

describe('Home Page Layout', () => {
    it("renders without error", () => {
        render(
            <TestsContextProvider>
                <HomePageLayout />
            </TestsContextProvider>
        );
    })
});

describe('Home Page Main Feed', () => {
    it("renders without error", () => {
        render(
            <TestsContextProvider>
                <HomePageContext.Provider value={{posts: [], reFetchPosts: jest.fn(), postsLoading: true, suggested: []}}>
                    <MainFeedContainer timelineUpdate={false} setPaginationPage={jest.fn()} postActions={{updatePostInTimeline: jest.fn(), deletePostInTimeline: jest.fn(), addPostToTimeline: jest.fn()}}/>
                </HomePageContext.Provider>
            </TestsContextProvider>
        );
   
    });

    it("renders a post", () => {
        render(
            <TestsContextProvider>
                <HomePageContext.Provider value={{posts: [mockPost], reFetchPosts: jest.fn(), postsLoading: false, suggested: []}}>
                    <MainFeedContainer timelineUpdate={false} setPaginationPage={jest.fn()} postActions={{updatePostInTimeline: jest.fn(), deletePostInTimeline: jest.fn(), addPostToTimeline: jest.fn()}}/>
                </HomePageContext.Provider>
            </TestsContextProvider>
        );
        expect(screen.getByText("Loading Post...")).toBeInTheDocument()
    })

    it("renders correct message when no posts in timeline", () => {
        render(
            <TestsContextProvider>
                <HomePageContext.Provider value={{posts: [], reFetchPosts: jest.fn(), postsLoading: false, suggested: []}}>
                    <MainFeedContainer timelineUpdate={false} setPaginationPage={jest.fn()} postActions={{updatePostInTimeline: jest.fn(), deletePostInTimeline: jest.fn(), addPostToTimeline: jest.fn()}}/>
                </HomePageContext.Provider>
            </TestsContextProvider>
        );
        expect(screen.getByText("No Posts To Show!")).toBeInTheDocument()
    })
});

describe('Home Page Friends Panel', () => {
    it("renders without error", () => {
        render(
            <TestsContextProvider>
                <RightPanelContainer friends={[]}/>
            </TestsContextProvider>
        );
    })

    it("renders correct text if user has no friends", () => {
        render(
            <TestsContextProvider>
                <RightPanelContainer friends={[]}/>
            </TestsContextProvider>
        );

        expect(screen.getByText("No Friends Found")).toBeInTheDocument()
    })

    it("renders friend bar for each friend", () => {
        render(
            <TestsContextProvider>
                <RightPanelContainer friends={[mockUser]}/>
            </TestsContextProvider>
        );

        expect(screen.getByText(mockUser.DisplayName)).toBeInTheDocument()
    })
});


describe('Home Page Left-Side Panel', () => {
    it("renders without error", () => {
        render(
            <TestsContextProvider>
                <LeftPanelContainer />
            </TestsContextProvider>
        );
    })

    it("renders user display name", () => {
        render(
            <TestsContextProvider>
                <LeftPanelContainer />
            </TestsContextProvider>
        );

        expect(screen.getByText("Hello, " + mockUser.DisplayName)).toBeInTheDocument();
    })
});