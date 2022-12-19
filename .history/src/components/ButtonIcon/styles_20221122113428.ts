import styled from "styled-components/native"

export type ButtonIconStylesProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonIconStylesProps
}

export const Container = styled(Toucha)