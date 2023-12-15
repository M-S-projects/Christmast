import { ToastContainer } from "react-toastify";

const Toastcontainer = () => {
  return (
    <ToastContainer
      position="top-right" // 알람 위치 지정
      autoClose={2000} // 자동 off 시간
      hideProgressBar={false} // 진행시간바 숨김
      closeOnClick // 클릭으로 알람 닫기
      rtl={false} // 알림 좌우 반전
      pauseOnFocusLoss // 화면을 벗어나면 알람 정지
      draggable // 드래그 가능
      pauseOnHover // 마우스를 올리면 알람 정지
      theme="dark"
      limit={3} // 알람 개수 제한
    />
  );
};

export default Toastcontainer;
