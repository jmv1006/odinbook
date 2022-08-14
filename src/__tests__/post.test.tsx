import { screen, render } from "@testing-library/react"
import TestsContextProvider from "../context/tests-wrapper";
import '@testing-library/jest-dom';
import Post from '../components/shared/post/post';
import IPost from "../interfaces/post";

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


describe("Post Component", () => {
    it("renders without error", () => {
        render(
            <TestsContextProvider>
                <Post post={mockPost} reload={jest.fn()}/>
            </TestsContextProvider>
        )
    });

    it("renders post text", () => {
        render(
            <TestsContextProvider>
                <Post post={mockPost} reload={jest.fn()}/>
            </TestsContextProvider>
        )

        expect(screen.getByText("Loading Post...")).toBeInTheDocument()
    })

});





