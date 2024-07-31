import { loginAdmin, logoutAdmin } from "../api/adminApi";

describe("Authentication API", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("loginAdmin should return data on successful login", async () => {
    const mockResponse = { token: "dummyToken" };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const response = await loginAdmin("username", "password");
    expect(response).toEqual(mockResponse);
  });

  test("loginAdmin should throw an error on failed logi", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Invalid credentials" }),
    });

    await expect(loginAdmin("username", "password")).rejects.toThrow(
      "Invalid credentials",
    );
  });

  test("logoutAdmin should return data on successful logout", async () => {
    const mockResponse = { success: true };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const response = await logoutAdmin();
    expect(response).toEqual(mockResponse);
  });

  test("logoutAdmin should throw an error on failed logout", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Logout failed" }),
    });

    await expect(logoutAdmin()).rejects.toThrow("Logout failed");
  });
});
