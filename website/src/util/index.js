export function makeChangeHandlerFactory(ctx) {
    const handlerCache = {};
    return (name, propName) => {
        if (handlerCache[name]) {
            return handlerCache[name];
        }
        handlerCache[name] = event => {
            const obj = {};
            obj[name] = event.target[propName || "value"];
            ctx.setState(obj);
        };
        return handlerCache[name];
    };
}

// eslint-disable-next-line no-underscore-dangle
export const currentUser = window.__userInfo;

// eslint-disable-next-line no-underscore-dangle
export const pageOptions = window.__options;
