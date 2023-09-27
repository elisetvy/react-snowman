import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

it("No image displays after number of wrong guesses exceeds maxWrong",
  function () {
    const { container, debug } = render(
      <Snowman
        images={[img0]}
        words={["apple"]}
        maxWrong={1}
      />
    );

    const gButton = document.querySelector("div.Snowman button[value='g']");
    fireEvent.click(gButton);

    const img = document.querySelector("img");
    expect(img.alt).toEqual("1");
    expect(container.querySelector("button")).not.toBeInTheDocument();
    expect(container.querySelector(".Snowman-lose-msg")).toBeInTheDocument();

  });