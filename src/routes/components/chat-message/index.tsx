import { createFileRoute } from '@tanstack/react-router'

import './index.styl'

export const Route = createFileRoute('/components/chat-message/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='chat__message--container--background'>
			<div className='chat__message--container'>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver, This Message Contains Everything</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender, This Message Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver, This Message Contains Everything</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender, This Message Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver, This Message Contains Everything</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender, This Message Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--receiver'>
					<span className='chat__message--receiver--msg'>Message Sent To Receiver Contains Everything</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
				<section className='chat__message--sender'>
					<span className='chat__message--sender--msg'>Message Received By Sender Contains Nothing Better Than The Receiver's</span>
				</section>
			</div>
		</div>
	)
}
