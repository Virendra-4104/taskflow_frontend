import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="border-t border-ink-700/60 mt-24">
                <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-mute-text">
                        <span className="text-sm">Taskflow — work, in motion.</span>
                    </div>
                    <p className="text-xs text-mute-text">© {new Date().getFullYear()} Taskflow. Built for teams who ship.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
