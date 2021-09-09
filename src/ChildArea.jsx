import React from 'react';
import { memo } from 'react';

const style = {
  widht: '100%',
  height: '200px',
  backgroundColor: 'khaki',
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log('レンダリング！！！！');
  const data = [...Array(5).keys()];
  data.forEach(() => {
    console.log('/////');
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネン</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
