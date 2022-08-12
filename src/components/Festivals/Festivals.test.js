import {  render, screen } from '@testing-library/react';
import Festivals from './Festivals';

require("fake-indexeddb/auto");

const fakeFestival = {
    imgUrlFest: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/festival-guide-1649857344.jpg',
    festivalName: 'Summer Fest',
    date:'01.01.2022',
    summary:'Best summer festival',
    location:'Sofia'
};

// beforeEach(() => {
//     jest.spyOn(global, "fetch").mockImplementation(() =>
//         Promise.resolve({
//             json: () => Promise.resolve(fakeFestival)
//         })
//     );
// });

test('Show fetched festival', async () => {
    // global.fetch = jest.fn(() =>
    //     Promise.resolve({
    //         json: () => Promise.resolve(fakeFestival)
    //     })
    // );

    render(<Festivals />);

    const element = await screen.findByText('No Summer Music Festivals');

    expect(element).toBeInTheDocument();
});