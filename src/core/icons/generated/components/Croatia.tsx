import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Croatia.svg';

export function Croatia(props: TProps) {
  return (
    <Icon {...props} name="Croatia">
      <SVG />
    </Icon>
  );
}
