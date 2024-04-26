import { describe, expect, it, vi } from "vitest";
import {render, screen, waitFor} from "@testing-library/vue"
import {userEvent} from "@testing-library/user-event"
import Login from "./Login.vue"

import { LoginUseCase } from "../use-cases/LoginUseCase.ts";

describe("Login", () => {
  it("redirects to recipe page after login", async () => {
    const user = userEvent.setup()
    const authService = {
      login: async () => {return "token"}
    }
    const tokenRepository = {
      save: vi.fn()
    }
    const routerVue = {
      goToRecipies: vi.fn()
    }
    const loginUseCase = new LoginUseCase(authService,routerVue,tokenRepository)
    render(Login, {props: {loginUseCase}})
    await user.type(screen.getByLabelText("Your email"),"linustorvalds@gmail.com")
    await user.type(screen.getByLabelText("Your password"),"ilovecats")
    await user.click(screen.getByRole("button",{name: "Login"}))

    await waitFor(() => {
      expect(routerVue.goToRecipies).toHaveBeenCalled()
    }, {timeout: 5000})

  });
});
