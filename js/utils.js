export const createElement = (tag, content, className, id = '', value ='') => {
    const element = document.createElement(tag);
    element.textContent= content
    element.id = id
    element.value= value
    element.classList.add(className)
    return element
}