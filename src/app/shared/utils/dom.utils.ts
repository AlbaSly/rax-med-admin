export namespace DOMUtils {
  export function scrollToBottom(): void {
    const $html = document.querySelector('html') as HTMLHtmlElement;
  
    $html.scrollTop = $html.scrollHeight;
  }

  export function scrollToTop(): void {
    const $html = document.querySelector('html') as HTMLHtmlElement;

    $html.scrollTop = 0;
  }
  
  export function removeHtmlOverflowYTemporal(): void {
    // let $html = document.querySelector('html') as HTMLHtmlElement;
  
    // $html.style.overflowY = 'hidden';
    
    // setTimeout(() => {
    //   $html.style.overflowY = 'scroll';
    // }, 500);
  }
}