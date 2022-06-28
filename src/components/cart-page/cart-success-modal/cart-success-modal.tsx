import { KeyboardEvent } from 'react';

import { useAppDispatch } from '../../../hooks';
import { redirectToRoute } from '../../../store/action';
import { endPurchasing } from '../../../store/catalog-cart/catalog-cart';
import { AppRoute } from '../../../const';

function CartSuccessModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(endPurchasing());
    document.body.style.position = 'static';
  };

  const handleEscKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      dispatch(endPurchasing());
      document.body.style.position = 'static';
    }
  };

  const handleRedirectToCart = () => {
    dispatch(endPurchasing());
    document.body.style.position = 'static';
    dispatch(redirectToRoute(AppRoute.CartPage));
  };

  const handleRedirectToCatalog = () => {
    dispatch(endPurchasing());
    document.body.style.position = 'static';
    dispatch(redirectToRoute(AppRoute.CatalogPage1));
  };

  return (
    <div className="modal is-active modal--success modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay" data-close-modal onClick={handleCloseModal}>
        </div>
        <div className="modal__content" onKeyPress={handleEscKeyDown}>
          <svg className="modal__icon" width="26" height="20" aria-hidden="true">
            <use xlinkHref="#icon-success"></use>
          </svg>
          <p className="modal__message">Товар успешно добавлен в корзину</p>
          <div className="modal__button-container modal__button-container--add">
            <button
              className="button button--small modal__button"
              onClick={handleRedirectToCart}
            >
              Перейти в корзину
            </button>
            <button
              className="button button--black-border button--small modal__button modal__button--right"
              onClick={handleRedirectToCatalog}
            >
              Продолжить покупки
            </button>
          </div>
          <button
            className="modal__close-btn button-cross"
            type="button"
            aria-label="Закрыть"
            onClick={handleCloseModal}
          >
            <span className="button-cross__icon"></span>
            <span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSuccessModal;