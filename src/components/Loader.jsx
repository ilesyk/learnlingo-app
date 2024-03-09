import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#3470FF"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};
