import { ACTIONS_EVENT_NAMES, MAIN_PROVIDER_KEY } from './constatns';
import { emitter } from './emitter';
import { makeEventKey } from './helpers';

export function openModal({ name, providerKey = MAIN_PROVIDER_KEY, props = {} }) {
  const eventKey = makeEventKey(providerKey, ACTIONS_EVENT_NAMES.open);

  emitter.emit(eventKey, {
    name,
    props,
  });
}

export function closeModal({ name, providerKey = MAIN_PROVIDER_KEY }) {
  const eventKey = makeEventKey(providerKey, ACTIONS_EVENT_NAMES.close);

  emitter.emit(eventKey, {
    name,
  });
}

export function closeAllModals({ providerKey = MAIN_PROVIDER_KEY }) {
  const eventKey = makeEventKey(providerKey, ACTIONS_EVENT_NAMES.close);

  emitter.emit(eventKey);
}
