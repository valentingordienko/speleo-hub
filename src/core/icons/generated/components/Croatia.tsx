import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Croatia.svg';

export function Croatia(props: TBaseProps) {
  return (
    <Icon {...props} name="Croatia">
      <SVG />
    </Icon>
  );
}
