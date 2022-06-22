export function subscribe(eventClass, handler) {
    const callback = event => handler(...event.detail)

    document.addEventListener(eventClass.name, callback, { passive: true })

    return {
        unsubscribe: function unsubscribe() {
            document.removeEventListener(eventClass.name, callback)
        }
    }
}

export function publish(event) {
    const nativeEvent = new CustomEvent(event.constructor.name, {
        detail: event.args,
    })

    document.dispatchEvent(nativeEvent)
}
