import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Russia.svg';

export function Russia(props: TBaseProps) {
  return (
    <Icon {...props} name="Russia">
      <SVG />
    </Icon>
  );
}
