import txt1 from 'raw-loader!./file.txt'
import txt2 from './file2.txt'

const div = document.createElement('div')
div.innerText = txt1 + txt2
document.body.appendChild(div)

// console.log(txt)




