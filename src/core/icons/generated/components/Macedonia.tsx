import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Macedonia.svg';

export function Macedonia(props: TBaseProps) {
  return (
    <Icon {...props} name="Macedonia">
      <SVG />
    </Icon>
  );
}
