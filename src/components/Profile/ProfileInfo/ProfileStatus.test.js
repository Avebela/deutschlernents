import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Hallo, Nina!" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Hallo, Nina!");
  });

  test("after creation span should be desplayed ", () => {
    const component = create(<ProfileStatus status="Hallo, Nina!" />);
    const root = component.root;
    let span = root.findByType("span");
    // expect(span.length).toBe(1);
    expect(span).not.toBeNull();
  });

  test("after creation input shouldnt be desplayed ", () => {
    const component = create(<ProfileStatus status="Hallo, Nina!" />);
    const root = component.root;

    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation span should contains correct status ", () => {
    const component = create(<ProfileStatus status="Hallo, Nina!" />);
    const root = component.root;
    let span = root.findByType("span");
    //expect(span.innerText).toBe("Hallo, Nina!");
    expect(span.children[0]).toBe("Hallo, Nina!");
  });

  test("input should be desplayed instead span ", () => {
    const component = create(<ProfileStatus status="Hallo, Nina!" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    input.props.value;
    expect(input.props.value).toBe("Hallo, Nina!");
  });

  test("callback schouöd be called ", () => {
    const MockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="Hallo, Nina!" updateStatus={MockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(MockCallback.mock.calls.length).toBe(1);
  });
});
