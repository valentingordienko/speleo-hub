import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Canada.svg';

export function Canada(props: TProps) {
  return (
    <Icon {...props} name="Canada">
      <SVG />
    </Icon>
  );
}
