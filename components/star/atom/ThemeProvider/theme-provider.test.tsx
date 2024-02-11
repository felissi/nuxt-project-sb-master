import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import { defineComponent, Fragment } from "vue";
import themeProvider from "./theme-provider";

test("tag: should render proper tag", async() => {
  const testTagName = "p";
  const wrapper = mount(themeProvider, {
    props: {
      tag: testTagName,
    },
  });
  expect((wrapper.vm.$el.tagName as string).toLowerCase()).toBe(testTagName);
});

test("tag: should render div tag as default", async() => {
  const wrapper = mount(themeProvider, {});
  expect((wrapper.vm.$el.tagName as string).toLowerCase()).toBe("div");
});

test("tag: should render Fragment as request", async() => {
  const f = defineComponent(
    defineComponent(() => () => <Fragment>sdsd</Fragment>),
    {}
  );
  const div = document.createElement("div");
  const wrapper = mount(f, {
    props: {
      tag: "Fragment",
    },
    attachTo: div,
  });
  console.log(wrapper);
  // process.stdout.write(wrapper);
  // expect(wrapper).toBe(null);
});

test("should apply theme vars correctly", async() => {
  const wrapper = mount({
    render() {
      const themeVars = {
        myTheme: {
          color: {
            50: "#123123",
          },
        },
      };
      return (
        <themeProvider themeVars={themeVars} theme="myTheme"></themeProvider>
      );
    },
  });
  expect(wrapper.element.getAttribute("style")).toEqual(
    "--sui-color-50: #123123; color-scheme: light;"
  );
});

test("should apply custom prefix to theme vars correctly", async() => {
  const wrapper = mount({
    render() {
      const themeVars = {
        myTheme: {
          color: {
            50: "#123123",
          },
        },
      };
      const testPrefix = "--test";
      return (
        <themeProvider
          themeVars={themeVars}
          theme="myTheme"
          prefix={testPrefix}
        ></themeProvider>
      );
    },
  });

  expect(wrapper.element.getAttribute("style")).toEqual(
    "--test-color-50: #123123;"
  );
});
