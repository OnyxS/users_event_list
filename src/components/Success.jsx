import React from 'react';
import successSvg from '../assets/img/success.svg';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src={successSvg} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">
        Назад
      </button>
    </div>
  );
};
