import React from "react";
import { mount, shallow } from "enzyme";
import Header from "../";

describe("Dropdown menu component testing", () => {

    let wrapper;

    // global.window = { location: { pathname: null }};

    beforeEach(() => {
        wrapper = mount(<Header/>)
        console.log(wrapper.debug())
    });

    test("My name should appear at the top", () => {
        // check that my name appears within nav
        expect(wrapper.find("h1").text()).toBe("Antonio Alvarado");
    })

    test("Test ul and items within it, including anchors", () => {
        // check that ul has three anchors
        expect(wrapper.find("a")).toHaveLength(3);
        // check that ul contains the following items
        expect(wrapper.find("ul").childAt(0).text()).toBe("About")
        expect(wrapper.find("ul").childAt(1).text()).toBe("|")
        expect(wrapper.find("ul").childAt(2).text()).toBe("Projects")
        expect(wrapper.find("ul").childAt(3).text()).toBe("|")
        expect(wrapper.find("ul").childAt(4).text()).toBe("Contact")

    })
});