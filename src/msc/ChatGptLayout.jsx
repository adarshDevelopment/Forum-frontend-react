import React from 'react';

function Layout() {
    return (
        <div className='min-h-screen bg-gray-400 flex flex-col'>
            <header className='flex-grow-0 flex-shrink-0 bg-red-300'>
                Header
            </header>

            <main className='flex-1 flex-shrink-0 bg-blue-400 flex max-h-[calc(100vh-100px)] overflow-y-auto'>
                <aside className='flex-none w-1/4 bg-gray-200'>
                    Sidebar
                </aside>

                <div className='flex-grow text-4xl overflow-auto p-4'>
                    {/* Content goes here */}
                    {Array.from({ length: 20 }).map((_, index) => (
                        <p key={index}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, distinctio similique! Cumque dolores quaerat officiis ullam natus harum sapiente beatae quibusdam perferendis, atque assumenda consequuntur dolorum, sed in, nam quisquam!
                        </p>
                    ))}
                </div>
            </main>

            <footer className='flex-grow-0 flex-shrink-0 bg-green-400'>
                Footer
            </footer>
        </div>
    );
}

export default Layout;
