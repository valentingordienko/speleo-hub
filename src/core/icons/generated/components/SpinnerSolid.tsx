import React from 'react';
import { ReactComponent as SVG } from '../svg/SpinnerSolid.svg';
import { Icon, TBaseProps } from '../../Icon';

export function SpinnerSolid(props: Omit<TBaseProps, 'children'>) {
  return (
    <Icon {...props} name="SpinnerSolid">
      <SVG />
    </Icon>
  );
}
