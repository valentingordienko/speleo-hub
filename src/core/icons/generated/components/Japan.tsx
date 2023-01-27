import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Japan.svg';

export function Japan(props: TBaseProps) {
  return (
    <Icon {...props} name="Japan">
      <SVG />
    </Icon>
  );
}
