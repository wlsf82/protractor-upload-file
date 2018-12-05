const helper = require("protractor-helper");
const path = require("path");

const base64EncodedImageString = require("./base64Img");

describe("File upload", () => {
  it("successfully uploads a file", () => {
    const fileToUploadRelativePath = "./tatLogo.jpg";
    const fileToUploadAbsolutePath = path.resolve(
      __dirname,
      fileToUploadRelativePath
    );

    const fileInputField = element(by.css(".btn #upload"));
    const thumbnailElement = element(by.id("thumbnail"));

    browser.get("/outros/uploaddearquivos");

    helper.fillInputFieldWithFileWhenPresent(
      fileInputField,
      fileToUploadAbsolutePath
    );

    expect(thumbnailElement.getAttribute("src")).toEqual(
      base64EncodedImageString
    );
  });
});
