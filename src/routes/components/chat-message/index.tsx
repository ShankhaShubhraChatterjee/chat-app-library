import { createFileRoute } from '@tanstack/react-router'

import './index.styl'

export const Route = createFileRoute('/components/chat-message/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='chat__message--text'>Chat Message</div>
}
