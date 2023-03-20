import React from 'react';

export interface LoginLayoutProps {
  children?: React.ReactElement;
}

function LoginLayout(props: LoginLayoutProps) {
  const { children } = props;
  return (
    <div>
      { children }
    </div>
  );
}

export default React.memo(LoginLayout);
