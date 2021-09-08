import React from 'react';

const style = {
  widht: '100%',
  height: '200px',
  backgroundColor: 'khaki',
};

export const ChildArea = (props) => {
  const { open } = props;

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネン</p>
        </div>
      ) : null}
    </>
  );
};
