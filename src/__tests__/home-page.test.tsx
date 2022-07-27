import { screen, render } from "@testing-library/react"
import HomePageLayout from '../layouts/home/home-page-layout'
import TestsContextProvider from "../context/tests-wrapper";
import '@testing-library/jest-dom';
import MainFeedContainer from '../components/home/main-feed/container-main-feed';
import LeftPanelContainer from '../components/home/left-panel/container-left-panel';
import IPost from "../interfaces/post";

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

describe('Home Page Layout', () => {
    it("renders without error", () => {
        render(
            <TestsContextProvider>
                <HomePageLayout />
            </TestsContextProvider>
        );
    })
});

describe('Main Feed', () => {
    it("renders without error", () => {
        render(
            <TestsContextProvider>
                <HomePageContext.Provider value={{posts: [], reFetchPosts: jest.fn(), postsLoading: true}}>
                    <MainFeedContainer timelineUpdate={false} updateTimeline={jest.fn()}/>
                </HomePageContext.Provider>
            </TestsContextProvider>
        );
   
    })

    it("renders a post", () => {
        render(
            <TestsContextProvider>
                <HomePageContext.Provider value={{posts: [mockPost], reFetchPosts: jest.fn(), postsLoading: false}}>
                    <MainFeedContainer timelineUpdate={false} updateTimeline={jest.fn()}/>
                </HomePageContext.Provider>
            </TestsContextProvider>
        );
        expect(screen.getByText("Loading Post...")).toBeInTheDocument()
    })

    it("renders correct message when no posts in timeline", () => {
        render(
            <TestsContextProvider>
                <HomePageContext.Provider value={{posts: [], reFetchPosts: jest.fn(), postsLoading: false}}>
                    <MainFeedContainer timelineUpdate={false} updateTimeline={jest.fn()}/>
                </HomePageContext.Provider>
            </TestsContextProvider>
        );
        expect(screen.getByText("No Posts To Show!")).toBeInTheDocument()
    })
});
