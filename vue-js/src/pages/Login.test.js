import { describe, expect, it, vi } from "vitest";
import {render, screen, waitFor} from "@testing-library/vue"
import {userEvent} from "@testing-library/user-event"
import Login from "./Login.vue"

describe("Login", () => {
  it("redirects to recipe page after login", async () => {
    const user = userEvent.setup()
    const router = {
      push: vi.fn()
    }
    render(Login,{props:{router}})
    await user.type(screen.getByLabelText("Your email"),"linustorvalds@gmail.com")
    await user.type(screen.getByLabelText("Your password"),"ilovecats")
    await user.click(screen.getByRole("button",{name: "Login"}))

    await waitFor(() => {
      expect(router.push).toHaveBeenCalled()
    }, {timeout: 5000})

  });
});
