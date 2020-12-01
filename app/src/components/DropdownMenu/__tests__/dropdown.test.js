import React from "react";
import { mount, shallow } from "enzyme";
import DropdownMenu from "../";

describe("Dropdown menu component testing", () => {

    let wrapper;

    global.window = { location: { pathname: null }};

    beforeEach(() => {
        wrapper = shallow(<DropdownMenu/>)
    });


    test("render the text of dropdown menu", () => {
        expect(wrapper.find("button").text()).toBe("Resume");
        expect(wrapper.find("#pdf-download-link").text()).toBe("PDF Copy");
        expect(wrapper.find("#google-drive-link").text()).toBe("Google Drive");
    });

    test("make sure nav's class changes according to clicking the dropdown menu",
    () => {
        expect(wrapper.find("nav").hasClass("inactive")).toBe(true)
        wrapper.find("button").simulate("click");
        expect(wrapper.find("nav").hasClass("active")).toBe(true)
        wrapper.find("button").simulate("click");
        expect(wrapper.find("nav").hasClass("inactive")).toBe(true)
    });


});