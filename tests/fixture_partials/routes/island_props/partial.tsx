import { defineRoute } from "../../../../src/__OLD/server/defines.ts";
import type { RouteConfig } from "$fresh/server.ts";
import { Partial } from "@fresh/runtime";
import type { Fader } from "../../islands/Fader.tsx";
import PropIsland from "../../islands/PropIsland.tsx";

export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default defineRoute((req, ctx) => {
  return (
    <Partial name="slot-1">
      <p class="status-updated">updated</p>
      <PropIsland
        boolean={false}
        number={42}
        obj={{ foo: 123456 }}
        strArr={["foo", "bar"]}
        string="foobar"
      />
    </Partial>
  );
});
