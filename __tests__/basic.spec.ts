import { mount } from "@vue/test-utils";
import Helloworld from "../src/components/HelloWorld.vue";
import { expect, test } from "vitest";

test("mount component", async () => {
  expect(Helloworld).toBeTruthy();

  const wrapper = mount(Helloworld, {
    props: {
      msg: "test message",
    },
  });

  expect(wrapper.text()).toContain("test message");
});
