import React from 'react'
import Navbar from '../components/Navbar'
import { ArrowRight, FolderKanban, ListChecks, Users, Gauge, MessageSquare, StickyNote } from 'lucide-react'

const Landing = () => {
    const stages = [
        { label: 'To do', color: 'bg-mist-400', ring: 'ring-mist-400/30' },
        { label: 'In progress', color: 'bg-current', ring: 'ring-current/30' },
        { label: 'Done', color: 'bg-success', ring: 'ring-done/30' },
    ];

    const taskContent = [
        { title: 'Design api', priority: 'Medium', style: 'bg-primary-button/30 px-2 py-1 rounded-lg text-primary-button border border-primary-button' },
        { title: 'API endpoint', priority: 'High', style: 'bg-red-900/30 px-2 py-1 rounded-lg text-red-500 border border-red-500' },
        { title: 'Setup repo', priority: 'Done', style: 'bg-success/30 px-2 py-1 rounded-lg text-success border border-success', pStyle: 'line-through text-mute-text' }
    ]

    const features = [
        {
            icon: FolderKanban,
            title: 'Projects that hold their shape',
            description: 'Group work into projects with a title, priority, and status — active or archived — so nothing gets buried.',
        },
        {
            icon: ListChecks,
            title: 'Personal and project tasks',
            description: 'Keep a private task list for yourself, or assign work inside a project to a specific teammate by email.',
        },
        {
            icon: Users,
            title: 'Roles that match responsibility',
            description: 'Add members as an owner, admin, or contributor, and control who can change what inside a project.',
        },
        {
            icon: Gauge,
            title: 'Status and priority, always visible',
            description: 'Every task carries a status — to do, in progress, done — and a priority from low to high, at a glance.',
        },
        {
            icon: MessageSquare,
            title: 'Comments on the task itself',
            description: 'Discuss the work where it lives. Comments stay attached to the task, not scattered across a chat app.',
        },
        {
            icon: StickyNote,
            title: 'Sticky notes for the small stuff',
            description: 'Jot a reminder or a stray idea onto a task without turning it into a whole new ticket.',
        },
    ];

    const steps = [
        {
            number: '01',
            title: 'Create a project',
            description: 'Name it, describe it, set a priority. This is the container everything else lives in.',
        },
        {
            number: '02',
            title: 'Bring in your team',
            description: 'Add members by email and assign them a role — owner, admin, or member.',
        },
        {
            number: '03',
            title: 'Assign the work',
            description: 'Create a task, hand it to a teammate, set a due date and priority.',
        },
        {
            number: '04',
            title: 'Watch it move to done',
            description: 'The assignee updates status as they go. You see progress without asking for it.',
        },
    ];

    const questionAnswer = [
        {
            q: 'Is Taskflow for individuals or teams?',
            a: 'Both. Use personal tasks for your own list, or spin up a project the moment you need to assign work to someone else.',
        },
        {
            q: 'How do I add someone to a project?',
            a: 'From a project page, add their email and pick a role: owner, admin, or member. They see the project right away.',
        },
        {
            q: 'Can I track priority and due dates?',
            a: 'Every task carries a priority — low, medium, or high — and an optional due date, visible on the board.',
        },
        {
            q: 'Where do task discussions live?',
            a: 'Directly on the task, as comments — plus sticky notes for quick, informal reminders.',
        },
    ]

    return (
        <div className='flex flex-col'>
            <Navbar />
            <main className='relative flex-1'>
                {/* Hero section */}
                <section className='relative overflow-hidden mt-30 '>
                    <div className='max-w-6xl mx-auto px-6 relative grid lg:grid-cols-2 items-center border-b border-mute-text/40 pb-20'>
                        <div className='flex flex-col'>
                            <span
                                className='bg-success/10 text-success w-fit border border-success/30 text-xs uppercase inline-flex items-center gap-2 font-mono tracking-widest rounded-full px-3 py-1.5'>
                                TASK &amp; PROJECT MANAGEMENT
                            </span>
                            <h1 className='text-primary-text text-5xl font-bold my-4'>Work, in motion.</h1>
                            <p className='text-mute-text text-xl tracking-wider mb-8'>Taskflow gives your projects a single pipeline - create tasks, assign them, discuss them, and watch them move from to do to done. No spreadsheet required.</p>
                            <div className='flex gap-5 items-center'>
                                <button className='flex justify-center items-center gap- text-base bg-primary-button border text-background px-5 py-2 rounded-xl font-medium cursor-pointer hover:bg-hover-button'>Get started free <ArrowRight /></button>
                                <button className='text-primary-text px-5 py-2 rounded-xl font-medium cursor-pointer bg-secondary-background hover:border border-success'>Sign in</button>
                            </div>
                        </div>

                        <div className='text-primary-text flex justify-center items-center pl-8 pt-10'>
                            <div className='flex flex-col w-fit bg-secondary-background/60 p-4 gap-5 rounded-2xl h-fit'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-mute-text'>SHIP IT - LIVE BOARD</p>
                                    <span className='h-2 w-2 bg-success rounded-full' />
                                </div>
                                <div className='flex gap-2'>
                                    {
                                        stages.map((stage, index) => (
                                            <div className='w-[35%] p-2 border border-ink-700 min-h-33 rounded-xl h-40'>
                                                <div>
                                                    <div className='flex items-center gap-2 mb-2'>
                                                        <span className={`w-1.5 h-1.5 rounded-full ${stage.color}`} />
                                                        <p className='text-mute-text'>{stage.label}</p>
                                                    </div>
                                                    <div className='border p-2 rounded-xl flex flex-col items-center gap-2 bg-background'>
                                                        <p className={`${taskContent[index].pStyle} `}>{taskContent[index].title}</p>
                                                        <span className={`${taskContent[index].style}`}>{taskContent[index].priority}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <p className='text-mute-text '>Every task moves through one pipeline - no more status updates lost in chat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature section */}
                <section id='feature' className='max-w-6xl mx-auto px-6 py-20 border-b border-mute-text/40 pb-20'>
                    <div className='max-w-xl'>
                        <h1 className='text-primary-text text-4xl font-bold mb-4'>Everything a task needs, nothing it doesn't</h1>
                        <p className='text-mute-text text-lg '>Taskflow is built around the parts of project work that actually matter: who's doing what, how urgent it is, and where it stands.</p>
                    </div>
                    <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {features.map(({ icon: Icon, title, description }) => (
                            <div key={title} className='p-4 bg-ink-800 border border-ink-700 rounded-xl shadow-card hover:border-ring/30 transition-colors'>
                                <div className='w-10 h-10 rounded-lg bg-primary-button/10 border border-primary-button/25 flex items-center justify-center text-primary-button mb-4'>
                                    <Icon size={18} />
                                </div>
                                <h3 className='font-semibold text-primary-text mb-1.5'>{title}</h3>
                                <p className='text-sm text-mute-text leading-relaxed'>{description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How it works section */}
                <section id='how-it-work' className='max-w-6xl mx-auto px-6 py-20 border-b border-mute-text/40 pb-20'>
                    <div className='max-w-xl mb-12'>
                        <h2 className='text-3xl font-bold text-primary-text tracking-tight'>From idea to done, in four steps</h2>
                        <p className='mt-3 text-mute-text'>The same sequence every project follows, whether it's one person or ten.</p>
                    </div>
                    <div className='grid md:grid-cols-2 gap-x-10 gap-y-10'>
                        {steps.map(({ number, title, description }) => (
                            <div className='flex gap-5'>
                                <span className='font-mono text-sm text-primary-button/70 shrink-0'>{number}</span>
                                <div className='border-l border-ink-700 pl-5'>
                                    <h3 className='font-semibold text-primary-text mb-1.5'>{title}</h3>
                                    <p className='text-sm text-mute-text leading-relaxed max-w-sm'>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ section */}
                <section id='faq' className='max-w-6xl mx-auto px-6 py-20 border-b border-mute-text/40 pb-20'>
                    <div className='max-w-xl mb-10'>
                        <h2 className="text-3xl font-bold text-primary-text tracking-tight" >Questions,answered</h2>
                    </div>
                    <div className='grid md:grid-cols-2 gap-6 max-w-4xl'>
                        {questionAnswer.map(({ q, a }) => (
                            <div key={q} className="border-b border-ink-700/60 pb-5">
                                <h3 className="font-medium text-primary-text mb-1.5">{q}</h3>
                                <p className="text-sm text-mute-text leading-relaxed">{a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='max-w-6xl mx-auto px-6 pb-24 pt-20'>
                    <div className="bg-ink-900 border border-ink-700 rounded-xl shadow-card relative overflow-hidden px-8 py-14 text-center">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(69,216,192,0.08),transparent_60%)]" />
                        <div className="relative flex justify-center flex-col items-center">
                            <h2 className="text-3xl font-bold text-primary-text tracking-tight">Give your next project a pipeline</h2>
                            <p className="mt-3 text-mute-text max-w-md mx-auto">
                                Create your account and set up your first project in under a minute.
                            </p>
                            <button className="bg-primary-button flex gap-2 justify-center items-center mt-7 px-3 py-3 rounded-xl cursor-pointer">
                                Get started free <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-ink-700/60 mt-24">
                <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-mute-text">
                        <span className="text-sm">Taskflow — work, in motion.</span>
                    </div>
                    <p className="text-xs text-mute-text">© {new Date().getFullYear()} Taskflow. Built for teams who ship.</p>
                </div>
            </footer>
        </div>
    )
}

export default Landing
