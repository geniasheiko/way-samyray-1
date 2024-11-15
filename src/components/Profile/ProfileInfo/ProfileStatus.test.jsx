import React from "react";
import {create} from "@testing-library/react";
import ProfileStatus from "./ProfileStatus";
//import {create} from "react-test-render";

describe ("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create (<ProfileStatus status="it-kamasutra.com" />);
        const instance = component.getInstance();
        //берем instance и проверяем, что в state у него в status it-kamasutra.com
        expect (instance.state.status).toBe("it-kamasutra.com");
    });



    test("after creation <span> should be displayed with correct status", () => {
        const component = create (<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span");
        //берем instance и проверяем, что в state у него в status it-kamasutra.com
        expect (span.length).toBe(1);
    });

    test("after creation <span> should be displayed with correct status", () => {
        const component = create (<ProfileStatus status="it-kamasutra.com" />);
        const root= component.root;
        let span = root.findByType("span");
        expect (span.children[0]).toBe("it-kamasutra.com");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create (<ProfileStatus status="it-kamasutra.com" />);
        const root= component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect (input.props.value).toBe("it-kamasutra.com");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);

})
});



