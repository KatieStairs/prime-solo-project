// import React, { useState } from 'react'
// import {CopyToClipboard} from 'react-copy-to-clipboard';


// function Clipboard () {
//     const [value, setValue] = useState('');
//     const [isCopied, setIsCopied] = useState(false);

// //   const state = {
// //         value: '',
// //         copied: false,
// //   }

//     return (
//       <div>
//         <input value={transcript}
//           onChange={() => setValue(value)}/>

//         {/* <CopyToClipboard text={this.state.value}
//           onCopy={() => this.setState({copied: true})}>
//           <span>Copy to clipboard with span</span>
//         </CopyToClipboard> */}

//         <CopyToClipboard text={setValue}
//           onCopy={() => setIsCopied(true)}>
//           <button>Copy to clipboard</button>
//         </CopyToClipboard>

//         {isCopied ? <span style={{color: 'red'}}>Copied.</span> : null}
//         <div>
//             <input placeholder='paste'></input>
//         </div>
//       </div>
//     );
// }

// //What gets pasted with this code is: function () { [native code] }

// export default Clipboard;

// function Clipboard() {
//     const
//         activeClass = { copy: 'copyactive', paste: 'pasteactive' },
//         doneMessage = { copy: 'copied', paste: 'pasted' },
//         doneClass   = 'done';


// // initialize
//     window && window.addEventListener('DOMContentLoaded', init);

//     function init() {
//     const body = document && document.body;

//   // clipboard API available?
//     if (!body || !navigator.clipboard) return;

//   // text copy active
//     if (navigator.clipboard.writeText) body.classList.add(activeClass.copy);

//   // text paste active
//     if (navigator.clipboard.readText) body.classList.add(activeClass.paste);

//   // copy/paste handler
//     body.addEventListener('click', clipboardHandler);
    
//     }

// // copy or paste clicked?
//     async function clipboardHandler(e) {

//   // get clicked element
//         const
//             target  = e.target,
//             type    = (undefined === target.dataset.paste ? 'copy' : 'paste'),
//             content = target.dataset[type];

//         if (undefined === content) return;

//   // is CSS selector?
//         let select;
//             try {
//                 select = content && document.querySelector(content);
//             }
//             catch (error) {}

//   // call copy or paste handler
//         const handler = { copy, paste };
//         if (!await handler[type]( select, content )) return;

//   // show success message
//         if (!target.dataset.done) target.dataset.done = doneMessage[type];

//         target.addEventListener('animationend', () => target.classList.remove(doneClass), { once: true });
//         target.classList.add(doneClass);

//     }


// // copy to clipboard
// async function copy(select, content) {

//   // get text
//   const copytext = select ? select.value || select.innerText : content;

//   try {

//     await navigator.clipboard.writeText(copytext);
//     return true;

//   }
//   catch (error) {
//     console.log('copy error', error);
//   }

// }


// // paste handler
// async function paste(select) {

//   if (!select) return;

//   // paste from clipboard
//   try {

//     const pastetext = await navigator.clipboard.readText();

//     if (undefined === select.value) {
//       select.innerText += pastetext;
//     }
//     else {
//       select.value += pastetext;
//     }

//     return true;

//   }
//   catch (error) {
//     console.log('paste error', error);
//   }

// }

//     return(
//         <div>
//             <div>
//                 <button
//                     data-copy="selector|text"
//                     data-done="copy sucessful"
//                 >copy</button>
//             </div>
//             <div>
//                 <button
//                     data-paste="selector"
//                     data-done="paste sucessful"
//                     >paste</button>
//             </div>
//         </div>
//     )
// }

// export default Clipboard;