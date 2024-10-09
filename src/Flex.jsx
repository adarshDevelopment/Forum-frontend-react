import React from 'react'

function Flex() {
    return (
        <div className='flex flex-col'>
            Flex grow
            <div className="flex bg-gray-200 p-4 gap-x-4">
                <div className="bg-blue-400 p-4 ">Item 1 (grow)</div>
                <div className="bg-green-400 p-4 grow-0">Item 2 (no grow)</div>
                <div className="bg-yellow-400 p-4 grow">Item 3 (grow)</div>
            </div>

            <br /><br />
            Max width xs
            <div className='flex '>
                <div className="flex bg-gray-200 p-4 space-x-4">
                    <div className="bg-blue-400 p-4 grow-0 max-w-sm">A very long paragraph that forces the div to grow. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni vitae aspernatur asperiores porro quidem soluta est earum corporis qui repellendus, fuga maxime doloremque voluptatem itaque rem aliquam repellat aperiam...</div>
                    <div className="bg-green-400 p-4 grow-0 max-w-xs">Another long text...</div>
                </div>
            </div>

            <br /><br />

            Overflow:

            <div className="w-64 h-32 p-4 bg-gray-200 overflow-x-auto">
                <p className=''>
                    This is a long paragraph that will eventually overflow its container. When it does, a scrollbar will appear, and the content will be scrollable. You can continue to add more text or elements to see how the overflow works.
                </p>
            </div>

            <br /><br />
            Table:

            <div class="w-full overflow-x-auto">
                <table class="min-w-full bg-white border">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 border">Name</th>
                            <th class="px-4 py-2 border">Age</th>
                            <th class="px-4 py-2 border">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="px-4 py-2 border">John Doe</td>
                            <td class="px-4 py-2 border">30</td>
                            <td class="px-4 py-2 border">New York</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2 border">John Doe</td>
                            <td class="px-4 py-2 border">30</td>
                            <td class="px-4 py-2 border">New York</td>
                        </tr><tr>
                            <td class="px-4 py-2 border">John Doe</td>
                            <td class="px-4 py-2 border">30</td>
                            <td class="px-4 py-2 border">New York</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>

    )
}

function getRandom() {
    return '#' + ((1 << 24) * Math.random() | 0).toString(16);
}

export default Flex