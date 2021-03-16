export function makeEventKey(providerKey, eventName) {
  return `${providerKey}.${eventName}`;
}
