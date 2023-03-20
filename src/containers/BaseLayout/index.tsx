import React from 'react';

export interface BaseLayoutProps {
  children?: React.ReactElement;
}

function BaseLayout(props: BaseLayoutProps) {
  const { children } = props;
  return (
    <div>
      { children }
    </div>
  );
}

export default React.memo(BaseLayout);
