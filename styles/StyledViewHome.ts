import { ButtonProps } from "react-native";
import styled from "styled-components/native";

interface PrincipalTitleProps {
    color: string;
}

interface StyledViewHomeProps {
    bgColor: string;
}

interface StyledPressableButtonProps {
    bgColor: string;
}

export const StyledViewHome = styled.SafeAreaView<StyledViewHomeProps>`
    display: flex;
    flex: 1;
    align-items: center;
    background-color: ${props => props.bgColor};
`

export const PrincipalTitle = styled.Text<PrincipalTitleProps>`
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.color};
    margin-top: 40px;
`

export const StyledPressableButton = styled.TouchableOpacity<StyledPressableButtonProps>`
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    border: 2px solid #333;
    background-color: ${props => props.bgColor};
`

export const StyledPressableButtonText = styled.Text<PrincipalTitleProps>`
    color: ${props => props.color};
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`