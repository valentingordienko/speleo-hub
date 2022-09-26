import React from 'react';
import { ReactComponent as SVG } from '../svg/SpinnerSolid.svg';
import { Icon, TProps } from '../../Icon';

export function SpinnerSolid(props: Omit<TProps, 'children'>) {
  return (
    <Icon {...props} name="SpinnerSolid">
      <SVG />
    </Icon>
  );
}
