import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Russia.svg';

export function Russia(props: TProps) {
  return (
    <Icon {...props} name="Russia">
      <SVG />
    </Icon>
  );
}
