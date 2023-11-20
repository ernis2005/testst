import React from 'react';

export default function Link() {
  return (
    <div>
      <Link href="/page/videochat" className={s.link}>
        <MdLocalPhone className={s.logo} />
      </Link>
    </div>
  );
}
