import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Canada.svg';

export function Canada(props: TBaseProps) {
  return (
    <Icon {...props} name="Canada">
      <SVG />
    </Icon>
  );
}
