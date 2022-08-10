
import { render, screen } from "@testing-library/react"
import Footer from "./Footer";

require("fake-indexeddb/auto");


test('Email should be rendered', () => {


    render(<Footer />);
    const liEl = screen.getByRole('article', {name: ''});
    expect(liEl).toHaveTextContent(/Plamena/i)
}); 