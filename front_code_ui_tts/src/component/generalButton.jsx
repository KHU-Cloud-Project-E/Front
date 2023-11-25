import React, {useState} from "react";

//색상을 밝게 만드는 함수
function lightenColor(color, percent) {

    const hex = color.replace(/^#/, '');
    const rgb = parseInt(hex, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
  
    const factor = 1 + percent / 100;
    const newR = Math.round(r * factor)>0xff?0xff:Math.round(r * factor);
    const newG = Math.round(g * factor)>0xff?0xff:Math.round(g * factor);
    const newB = Math.round(b * factor)>0xff?0xff:Math.round(b * factor);
  
    const newColor = ((newR << 16) | (newG << 8) | newB).toString(16);
    return `#${newColor.padStart(6, '0')}`;
  }

  // text : 버튼에 들어가 텍스트
  // color : 버튼 배경 색
  // textColor : 텍스트 색
  // onClick : 버튼을 클릭했을때 실행할 함수
const GeneralButton = ({text, color, textColor, onClick}) => {

    const [isHovered, setHovered] = useState(false);

    const buttonStyle = {
        backgroundColor: isHovered?lightenColor(color,15):color,
        color: textColor,
        width: '9rem',
        height: '3rem',
        'border-radius': '3rem',
        'font-size': 'larger',
        'font-weight': 'bold'
    }
    
    return(
        <button style={buttonStyle} 
        onClick={() => {onClick()}}
        onMouseOver={()=>setHovered(true)}
        onMouseOut={()=>setHovered(false)}>{text}</button>
    );
}

GeneralButton.defaultProps = {
    text: '',
    color: '#CF69FF',
    textColor: '#FFFFFF'
}


export default GeneralButton;