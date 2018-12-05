import React from 'react';

const Notification = props => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M28.4 8.4c.3 0 .5 0 .8.1 1.5.4 2.4 2 1.9 3.5 0 .1-.1.3-.2.4l-.2.6c2.3 1.9 3.9 3.7 3.9 6.5 0 2.9-1.8 9.3-1.8 9.3-.6 2 2.5 4.7 2.5 4.7s-.2.8-.5 1.8c-.2.8-1 1.3-1.8 1.3-.2 0-.4 0-.5-.1-.1 0-21.4-6.5-21.5-6.6-1-.3-1.5-1.4-1.2-2.3.3-1 .5-1.8.5-1.8s4.1-.5 4.7-2.5c0 0 1.8-6.1 3.6-8.7 1.9-2.6 4-3 6.9-3.3l.3-1c.2-1.1 1.3-1.9 2.6-1.9m0-2c-2 0-3.7 1.2-4.5 3 0 0 0 .1-.1.1-2.6.3-5 1.1-7 3.9-2 2.7-3.7 8.3-3.9 9.2-.3.4-1.8 1-3 1.1-.8.1-1.4.6-1.7 1.4L7.7 27c-.6 2 .5 4.2 2.6 4.8.1 0 21.4 6.5 21.5 6.6.4.1.7.2 1.1.2 1.7 0 3.2-1.1 3.7-2.7l.5-1.8c.2-.8 0-1.6-.6-2.1-1-.8-1.9-2.2-1.9-2.6.2-.7 1.9-6.7 1.9-9.8 0-3.2-1.7-5.4-3.6-7.1.3-1.2.1-2.4-.5-3.5s-1.6-1.9-2.9-2.3c-.3-.2-.7-.3-1.1-.3z" />
    <path d="M26 36.5c-.8 2.8-3.7 4.3-6.5 3.5s-4.2-3.7-3.4-6.5c3 .9 4.6 1.4 9.9 3z" />
    <path
      d="M30.3 33H30l-15.2-4.7c-.5-.2-.8-.7-.7-1.2.2-.5.7-.8 1.2-.7L30.6 31c.5.2.8.7.7 1.2-.2.5-.6.8-1 .8z"
      opacity={0.99}
    />
    <circle cx={28.3} cy={11.3} r={1.4} />
  </svg>
);

export default Notification;