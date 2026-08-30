export const EnforcementEngine = {
  enforce: (action, resolver, stateManager) => {
    const mod = resolver.resolve(action.capability);
    const result = mod.execute(action.action, action.payload);

    stateManager.updateModule(mod.id, { lastAction: action.type, result });
    return result;
  }
};
