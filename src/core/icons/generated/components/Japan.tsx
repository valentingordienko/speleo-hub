import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Japan.svg';

export function Japan(props: TProps) {
  return (
    <Icon {...props} name="Japan">
      <SVG />
    </Icon>
  );
}
