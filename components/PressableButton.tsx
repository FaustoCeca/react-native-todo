import React from 'react'
import { StyledPressableButton, StyledPressableButtonText } from '@/styles/StyledViewHome';

interface PressableButtonProps {
    onPress: () => void;
    bgColor: string;
    title: string;
    textColor: string;
}

const PressableButton = ({onPress, bgColor, title, textColor} : PressableButtonProps) => {
  return (
    <StyledPressableButton
        bgColor={bgColor}
    >
        <StyledPressableButtonText
            color={textColor}
        >
            {title}
        </StyledPressableButtonText>
    </StyledPressableButton>
  )
}

export default PressableButton;