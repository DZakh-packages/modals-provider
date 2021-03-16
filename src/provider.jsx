/* eslint-disable import/no-unresolved */

import findLastIndex from 'lodash.findlastindex';
import { memo, useEffect, useMemo, useState } from 'react';
import { ACTIONS_EVENT_NAMES, MAIN_PROVIDER_KEY } from './constatns';
import { emitter } from './emitter';
import { makeEventKey } from './helpers';

const Modal = memo(({ ModalComponent, modalParams }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ModalComponent {...modalParams.props} />;
});

export const ModalsProvider = ({ providerKey = MAIN_PROVIDER_KEY, modals = {} }) => {
  const [openedModals, setOpenedModals] = useState([]);

  const { openModalEventKey, closeModalEventKey, closeAllModalsEventKey } = useMemo(() => {
    return {
      openModalEventKey: makeEventKey(providerKey, ACTIONS_EVENT_NAMES.open),
      closeModalEventKey: makeEventKey(providerKey, ACTIONS_EVENT_NAMES.close),
      closeAllModalsEventKey: makeEventKey(providerKey, ACTIONS_EVENT_NAMES.closeAll),
    };
  }, [providerKey]);

  useEffect(() => {
    function onOpenModal(openModalParams) {
      setOpenedModals((currentlyOpenedModals) => {
        return currentlyOpenedModals.concat(openModalParams);
      });
    }

    emitter.on(openModalEventKey, onOpenModal);

    return () => {
      emitter.removeListener(openModalEventKey, onOpenModal);
    };
  }, [openModalEventKey]);

  useEffect(() => {
    function onCloseModal(closeModalParams) {
      setOpenedModals((currentlyOpenedModals) => {
        const indexOfLastOpenedModalByName = findLastIndex(currentlyOpenedModals, {
          name: closeModalParams.name,
        });
        if (indexOfLastOpenedModalByName === -1) {
          return currentlyOpenedModals;
        }
        return [
          ...currentlyOpenedModals.slice(0, indexOfLastOpenedModalByName),
          ...currentlyOpenedModals.slice(
            indexOfLastOpenedModalByName + 1,
            currentlyOpenedModals.length
          ),
        ];
      });
    }

    emitter.on(closeModalEventKey, onCloseModal);

    return () => {
      emitter.removeListener(closeModalEventKey, onCloseModal);
    };
  }, [closeModalEventKey]);

  useEffect(() => {
    function onCloseAllModals() {
      setOpenedModals([]);
    }

    emitter.on(closeAllModalsEventKey, onCloseAllModals);

    return () => {
      emitter.removeListener(closeAllModalsEventKey, onCloseAllModals);
    };
  }, [closeAllModalsEventKey]);

  return openedModals.map((modalParams, idx) => {
    const modalName = modalParams.name;
    const ModalComponent = modals[modalName];

    return (
      <Modal
        // eslint-disable-next-line react/no-array-index-key
        key={`${modalName}.${idx}`}
        ModalComponent={ModalComponent}
        modalParams={modalParams}
      />
    );
  });
};
