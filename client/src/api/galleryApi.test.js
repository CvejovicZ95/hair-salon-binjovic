import { getAllImages, uploadPhoto, deletePhoto } from "../api/galleryApi";

describe("Gallery API", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("getAllImages should return data on successful fetch", async () => {
    const mockResponse = { images: ["image1.jpg", "image2.jpg"] };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const response = await getAllImages();
    expect(response).toEqual(mockResponse);
  });

  test("getAllImages should throw an error on fetch failure", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Failed to fetch images" }),
    });

    await expect(getAllImages()).rejects.toThrow("Failed to fetch images");
  });

  test("uploadPhoto should return true on successful upload", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    const result = await uploadPhoto("alt text", new Blob(), "category");
    expect(result).toBe(true);
  });

  test("uploadPhoto should throw an error on upload failure", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Failed to upload photo" }),
    });

    await expect(
      uploadPhoto("alt text", new Blob(), "category"),
    ).rejects.toThrow("Failed to upload photo");
  });

  test("deletePhoto should return result on successful deletion", async () => {
    const mockResponse = { success: true };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const response = await deletePhoto("photoId");
    expect(response).toEqual(mockResponse);
  });

  test("deletePhoto should throw an error on deletion failure", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: "Failed to delete photo" }),
    });

    await expect(deletePhoto("photoId")).rejects.toThrow(
      "Failed to delete photo",
    );
  });
});
