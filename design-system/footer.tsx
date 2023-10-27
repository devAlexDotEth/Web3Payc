import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';
import Body from './body';
import Stack from './stack';
import Button from './button';
import Fast from './icons/fast';
import Medium from './icons/medium';
import Slow from './icons/slow';
import Eth from './icons/eth';

export type Props = {
  localStyles?: CSSObject;
  socials?: ReactNode;
  contactNavigation?:  () => void;
  ethPrice?: number | string | ReactNode;
  highGas?: number | string | ReactNode;
  mediumGas?: number | string | ReactNode;
  lowGas?: number | string | ReactNode;
};

const El = styled.div(({ localStyles }: Props) => ({
  background: 'var(--dark-1000)',
  alignItems: 'center',
  width: '100%',
  borderTop: '1px solid #FFFFFF40',
  padding: 'var(--scale-12) var(--scale-24)',
  '@media (min-width: 1080px)' :{
    display: 'grid',
    minHeight: 50,
    gridTemplateColumns: '1fr auto',
    padding: '0 var(--scale-36)',
  },
  '@media (min-width: 1200px)' :{
    padding: '0 var(--scale-48)',
  },
  ...(localStyles)
}));


export const Footer: FC<Props> = ({socials, contactNavigation, ethPrice = '1,701.55', highGas = '11', mediumGas = '8', lowGas = '6', localStyles}) => {
  return (
    <El localStyles={localStyles}>
      <Stack direction='HORIZONTAL' space={'var(--scale-12)'} localStyles={{alignItems: 'center'}} >
        <Body localStyles={{
          display: 'none', 
          '@media (min-width: 1080px)': {
            display: 'flex'
          }
        }}>
          Pepe Ape Yacht Club ™
        </Body>
        <Button size='S' variant='TERTIARY' onClick={contactNavigation} 
          localStyles={{
            display: 'none', 
            '@media (min-width: 1080px)': {
              display: 'inline-flex'
            }
          }}>
            Contact us
        </Button>
        <Button size='S' variant='SECONDARY' onClick={contactNavigation} 
          localStyles={{
            width: '100%', 
            marginBottom: 'var(--scale-16)',
            '@media (min-width: 1080px)': {
              display: 'none'
              }
          }}>
            Contact us
        </Button>
        <Stack 
          direction='HORIZONTAL' 
          space={'var(--scale-16)'} 
          localStyles={{
            width: 'auto', 
            alignItems: 'center',
            display: 'none', '@media (min-width: 1080px)': {display: 'flex'},
          }}>
          {socials}
        </Stack>
      </Stack>
      <Stack direction='HORIZONTAL' space={'var(--scale-16)'} localStyles={{maxWidth: 225, margin: '0 auto'}}>
        <Stack direction='HORIZONTAL' space={'var(--scale-4)'} localStyles={{alignItems: 'center'}}>
          <Eth theme="LIGHT" size="S" />
          <Body size='S'>${ethPrice}</Body>
        </Stack>
        <Stack direction='HORIZONTAL' space={'var(--scale-4)'} localStyles={{alignItems: 'center'}}>
          <Fast theme="LIGHT" size="S" />
          <Body size='S'>{highGas}</Body>
        </Stack>
        <Stack direction='HORIZONTAL' space={'var(--scale-4)'} localStyles={{alignItems: 'center'}}>
          <Medium theme="LIGHT" size="S" />
          <Body size='S'>{mediumGas}</Body>
        </Stack>
        <Stack direction='HORIZONTAL' space={'var(--scale-4)'} localStyles={{alignItems: 'center'}}>
          <Slow theme="LIGHT" size="S" />
          <Body size='S'>{lowGas}</Body>
        </Stack>
      </Stack>
    </El>
  );
}

export default Footer;